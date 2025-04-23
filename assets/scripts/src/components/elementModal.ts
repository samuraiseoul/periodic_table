import CustomElement from "../../lib/customElement";
import elementTypes from "../../data/elementTypes";
import findPeriodicElementByNumber, {ElementLink, TableElement} from "../../data/elements";
import PeriodicTableElement from "./periodicTableElement";

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
                    
                </article>
            </div>
        </dialog>
    `;

    private getTableElement() : TableElement {
        return findPeriodicElementByNumber(this.getAttribute('data-id') as string);
    }

    public open() {
        const element = this.getTableElement();

        (this.shadowSelector('periodic-element') as PeriodicTableElement).setAttribute('data-id', this.getTableElement().number);
        (this.shadowSelector('h1') as HTMLHeadingElement).innerText = element.full_name;
        (this.shadowSelector('article') as HTMLElement).innerHTML = element.additional_information.extended_description;
        (this.shadowSelector('header') as HTMLHeadingElement).style.backgroundColor = elementTypes[element.type].color;

        (this.shadowSelector('button') as HTMLButtonElement).addEventListener('click', event => (this.shadowSelector('dialog') as HTMLDialogElement).close());

        (this.shadowSelector('dialog') as HTMLDialogElement).showModal();
    }
}