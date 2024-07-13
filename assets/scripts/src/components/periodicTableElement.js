class PeriodicTableElement extends CustomElement {
    constructor() {
        super(...arguments);
        this.STYLE = `
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

                .periodic_table_element:hover .info-card {
                }
                
                h1 {
                    font-size: 3em;
                }

                h2 {
                    font-size: .75em;
                }

                h3 {
                    text-align: left;
                    font-size: .6em;
                }
                
                .learn-more {
                    position: absolute; 
                    width: calc(var(--increment-amount) * var(--element-size));
                    height: calc(var(--increment-amount) * var(--element-size) / 4);
                    background-color: rgb(169,169,169, 50%);
                    margin-top: calc(var(--increment-amount) * var(--element-size));
                    font-size: 0.5em;
                }

                .periodic_table_element:hover .learn-more {
                    margin-top: calc(var(--increment-amount) * var(--element-size) * .75);
                    transition: 0.5s;
                    transition-delay: 50ms;
                }
            </style>
        `;

        this.TEMPLATE = `
            <div class='periodic_table_element'>
                <div class="info-card">
                    <h3></h3>
                    <h1></h1>
                    <h2></h2>
                </div>
                <div class="learn-more">
                    <p>Click to learn more! &#x1F50E;</p>
                </div>
            </div>
        `;
    }

    postRender() {
        const element = findPeriodicElementByNumber(this.getAttribute('data-id'));
        if(!element) { return; }

        this.shadowSelector('.info-card').style.backgroundColor = element.type === 'strategies' ? 'transparent' : elementTypes[element.type].color;

        this.shadowSelector('h3').innerText = element.number;
        this.shadowSelector('h1').innerText = element.abbreviation;
        this.shadowSelector('h2').innerText = element.full_name;

        this.shadowSelector('.periodic_table_element').addEventListener('click', function() {
            const modal = document.querySelector('element-modal');
            modal.setAttribute('data-id', element.number);
            modal.open();
        });
    }
}

window.customElements.define("periodic-element", PeriodicTableElement);