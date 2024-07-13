class ElementModal extends CustomElement {
    constructor() {
        super();
        this.STYLE = `
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

        this.TEMPLATE = `
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
    }

    linkDataToListItemHtmlElement(link) {
        const item = document.createElement('li');
        const aTag = document.createElement('a');
        aTag.innerText = link.display_name;
        aTag.href = link.url;
        item.append(aTag);
        return item;
    }

    open() {
        const element = findPeriodicElementByNumber(this.getAttribute('data-id'));
        if(!element) { return; }

        this.shadowSelector('periodic-element').setAttribute('data-id', this.getAttribute('data-id'));
        this.shadowSelector('periodic-element').setAttribute('data-idtest', this.getAttribute('data-id'));
        this.shadowSelector('h1').innerText = element.full_name;
        this.shadowSelector('p').innerText = element.additional_information.extended_description;
        this.shadowSelector('header').style.backgroundColor = elementTypes[element.type].color;

        this.shadowSelector('.examples').innerHTML = '';
        element.additional_information.examples.map(function(example) {
            const listItem = document.createElement('li');
            listItem.innerText = example;
            return listItem;
        }).forEach(
            listItem => this.shadowSelector('.examples').append(listItem)
        );

        this.shadowSelector('.orgs-for').innerHTML = '';
        this.shadowSelector('.orgs-against').innerHTML = '';
        this.shadowSelector('.additional-resources').innerHTML = '';

        element.additional_information.organizations_exhibiting.map(this.linkDataToListItemHtmlElement)
            .forEach(
                listItem => this.shadowSelector('.orgs-for').append(listItem)
            );
        element.additional_information.organizations_fighting
            .map(this.linkDataToListItemHtmlElement)
            .forEach(
                listItem => this.shadowSelector('.orgs-against').append(listItem)
            );
        element.additional_information.learn_more
            .map(this.linkDataToListItemHtmlElement)
            .forEach(
                listItem => this.shadowSelector('.additional-resources').append(listItem)
            );

        this.shadowSelector('button').addEventListener('click', event => this.shadowSelector('dialog').close());

        this.shadowSelector('dialog').showModal();
    }
}

defineCustomElement(ElementModal);