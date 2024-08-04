import CustomElement from "../../lib/customElement";
import elementTypes from "../../data/elementTypes";
import findPeriodicElementByNumber from "../../data/elements";

export default class PeriodicTableElement extends CustomElement {
    static observedAttributes = ["data-id"];

    protected readonly STYLE = `
        <style>
            h1, h2, h3, p {
                text-align: center;
                margin: 0;
                padding: 0;
                font-family: sans-serif;
            }

            .periodic_table_element {
                position: relative;
                width: calc(var(--increment-amount) * var(--element-size));
                height: calc(var(--increment-amount) * var(--element-size));
                background-color: white;
                cursor: pointer;
            }

            .periodic_table_element:hover {
                transition: 0.5s;
                transition-delay: 50ms;
            }
            
            .info-card {
                position: absolute; 
                margin: var(--increment-amount) var(--increment-amount) 0;
                width: calc(var(--increment-amount) * (var(--element-size) - 2));
                height: calc(var(--increment-amount) * (var(--element-size) - 2));
            }

            .periodic_table_element:hover .info-card {
                position: absolute; 
                margin: 0;
                width: calc(var(--increment-amount) * var(--element-size));
                height: calc(var(--increment-amount) * var(--element-size));
                transition: 0.5s;
                transition-delay: 50ms;
            }
            
            h1 {
                height: 42.5%;
                font-size: calc(var(--increment-amount) * 7);
            }
            
            h1.long {
                font-size: calc(var(--increment-amount) * 6.5);
            }

            h2 {
                height: 42.5%;
                padding: 0 calc(var(--increment-amount));
                font-size: calc(var(--increment-amount) * 2.5);
            }

            h2.medium {
                font-size: calc(var(--increment-amount) * 2.25);
            }

            h2.long {
                font-size: calc(var(--increment-amount) * 2);
            }

            h2.very-long {
                font-size: calc(var(--increment-amount) * 1.75);
            }

            h3 {
                height: 15%;
                padding-left: calc(var(--increment-amount));
                padding-top: calc(var(--increment-amount));
                font-size: calc(var(--increment-amount) * 2);
                text-align: left;
            }
            
            .learn-more {
                position: absolute; 
                display: flex;
                width: calc(var(--increment-amount) * var(--element-size));
                height: calc(var(--increment-amount) * var(--element-size) / 4);
                background-color: rgb(169,169,169, .75);
                margin-top: calc(var(--increment-amount) * var(--element-size));
                font-size: calc(var(--increment-amount) * 2);
            }
            
            .learn-more > p {
                margin: auto;
                font-weight: bolder;
            }

            .periodic_table_element:hover .learn-more {
                margin-top: calc(var(--increment-amount) * var(--element-size) * .75);
                transition: 0.5s;
                transition-delay: 50ms;
            }
        </style>
    `;

    protected readonly TEMPLATE = `
        <div class='periodic_table_element'>
            <div class="info-card">
                <h3></h3>
                <h1></h1>
                <h2></h2>
            </div>
            <div class="learn-more">
                <p>Learn more! &#x1F50E;</p>
            </div>
        </div>
    `;

    public postRender() {
        const element = findPeriodicElementByNumber(this.getAttribute('data-id') as string);

        if(!this.shadowRoot) { return; }

        (this.shadowSelector('.info-card') as HTMLDivElement).style.backgroundColor = element.type === 'strategies' ? 'transparent' : elementTypes[element.type].color;
        (this.shadowSelector('h3') as HTMLHeadingElement).innerText = element.number;
        (this.shadowSelector('h1') as HTMLHeadingElement).innerText = element.abbreviation;
        (this.shadowSelector('h2') as HTMLHeadingElement).innerText = element.full_name;

        if(element.abbreviation.length > 2) {
            (this.shadowSelector('h1') as HTMLHeadingElement).classList.add('long');
        }

        if(element.full_name.length > 12) {
            (this.shadowSelector('h2') as HTMLHeadingElement).classList.add('medium');
        }

        if(element.full_name.length > 20) {
            (this.shadowSelector('h2') as HTMLHeadingElement).classList.add('long');
        }

        if(element.full_name.length > 30) {
            (this.shadowSelector('h2') as HTMLHeadingElement).classList.add('very-long');
        }
    }

    public registerListeners() {
        this.addEventListener('click', (event : Event) => {
            this.dispatchEvent(new CustomEvent('element-clicked',  {
                composed : true,
                detail : {
                    id : this.getAttribute('data-id')
                }
            }));
        });
    }

    protected attributeChangedCallback() {
        this.postRender();
    }
}