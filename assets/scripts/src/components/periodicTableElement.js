class PeriodicTableElement extends CustomElement {
    constructor() {
        super(...arguments);
        this.STYLE = `
            <style>
                h1, h2, h3 {
                    text-align: center;
                    margin: 0;
                    padding: 0;
                }

                .periodic_table_element {
                    border: 1px solid black;
                    height: 95px;
                    width: 95px;
                    background-color: white;
                    cursor: pointer;
                }

                .periodic_table_element:hover {
                    height: 115px;
                    width: 115px;
                    transition: 0.5s;
                    transition-delay: 50ms;
                }
                
                .info-card {
                    position: absolute;
                    width: 85px;
                    height: 85px;
                    margin: 5px;
                }

                .periodic_table_element:hover .info-card {
                    width: 105px;
                    height: 105px;
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
                    padding-left: 5px;
                    padding-top: 5px;
                }
                
                .learn-more { 
                    display: none;
                    background-color: rgb(169,169,169, 50%);
                    position: absolute;
                    width: 95px;
                    height: 32px;
                    margin-top: 95px;
                    font-size: 10px;
                }

                .periodic_table_element:hover .learn-more {
                    display: initial;
                    width: 115px;
                    transition: 0.5s;
                    transition-delay: 50ms;
                    margin-top: 83px;
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
        const element = periodicTableElements.find(
            element => element.number === this.getAttribute('data-id')
        );

        this.shadowSelector('.info-card').style.backgroundColor = elementTypes[element.type].color;

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