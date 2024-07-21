import CustomElement from "../../lib/customElement";
import elementTypes from "../../data/elementTypes";
import findPeriodicElementByNumber, {ElementLink, TableElement} from "../../data/elements";

export default class ElementModal extends CustomElement {
    protected readonly STYLE = `
        <style>
            h1, h2, h3, p, ul, li {
                margin: 0;
                padding: 0;
                text-align: center;
            }
            
            li {
                list-style-type: none;
            }
            
            h3 {
                text-align: left;
            }

            .element_info {
                border: 1px solid black;
                height: 500px;
                width: 750px;
                background-color: white;
            }
        </style>
    `;

    protected readonly TEMPLATE = `
        <dialog class='element_info'>
            <button>&#10060;</button>
            <div>
                <header>
                    <div id="element-box">
                        <periodic-element data-id=""></periodic-element>
                    </div>
                    <h1></h1>
                </header>
                <article>
                    <p></p>
                    <h2>Examples</h2>
                    <ul class="examples"></ul>
                    <h2>Organizations Exhibiting This</h2>
                    <ul class="orgs-for"></ul>
                    <h2>Organizations Fighting This</h2>
                    <ul class="orgs-against"></ul>
                    <h2>Additional Education and Resources</h2>
                    <ul class="additional-resources"></ul>
                </article>
            </div>
        </dialog>
    `;

    private getTableElement() : TableElement {
        return findPeriodicElementByNumber(this.getAttribute('data-id') as string);
    }

    private static linkDataToListItemHtmlElement(link : ElementLink) : HTMLLIElement {
        const item = document.createElement('li');
        const aTag = document.createElement('a');
        aTag.innerText = link.display_name;
        aTag.href = link.url;
        item.append(aTag);
        return item;
    }

    public open() {
        const element = this.getTableElement();

        this.shadowSelector('periodic-element')?.setAttribute('data-id', this.getTableElement().number);
        (this.shadowSelector('h1') as HTMLHeadingElement).innerText = element.full_name;
        (this.shadowSelector('p') as HTMLParagraphElement).innerText = element.additional_information.extended_description;
        (this.shadowSelector('header') as HTMLHeadingElement).style.backgroundColor = elementTypes[element.type].color;

        (this.shadowSelector('.examples') as HTMLUListElement).innerHTML = '';
        element.additional_information.examples.map(function(example) {
            const listItem = document.createElement('li');
            listItem.innerText = example;
            return listItem;
        }).forEach(
            listItem => (this.shadowSelector('.examples') as HTMLUListElement).append(listItem)
        );

        (this.shadowSelector('.orgs-for') as HTMLUListElement).innerHTML = '';
        (this.shadowSelector('.orgs-against') as HTMLUListElement).innerHTML = '';
        (this.shadowSelector('.additional-resources') as HTMLUListElement).innerHTML = '';

        element.additional_information.organizations_exhibiting.map(ElementModal.linkDataToListItemHtmlElement)
            .forEach(
                listItem => (this.shadowSelector('.orgs-for') as HTMLUListElement).append(listItem)
            );
        element.additional_information.organizations_fighting
            .map(ElementModal.linkDataToListItemHtmlElement)
            .forEach(
                listItem => (this.shadowSelector('.orgs-against') as HTMLUListElement).append(listItem)
            );
        element.additional_information.learn_more
            .map(ElementModal.linkDataToListItemHtmlElement)
            .forEach(
                listItem => (this.shadowSelector('.additional-resources') as HTMLUListElement).append(listItem)
            );

        (this.shadowSelector('button') as HTMLButtonElement).addEventListener('click', event => (this.shadowSelector('dialog') as HTMLDialogElement).close());

        (this.shadowSelector('dialog') as HTMLDialogElement).showModal();
    }
}