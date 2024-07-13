class SeventhRow extends CustomElement {
    static observedAttributes = [];

    constructor() {
        super();
        this.STYLE = `
            <style>    
                #row {
                    overflow: hidden;
                    width: 100%;
                    height: calc(var(--increment-amount) * (var(--element-size) + var(--border-size)));
                    display: flex;
                    justify-content: space-between;
                }
    
                #row > div {
                    display: flex;
                    height: calc(var(--increment-amount) * (var(--element-size) + var(--border-size)));
                    border: none;
                    border-top: var(--increment-amount) solid black;
                    justify-content: space-between;
                }
    
                .element-separator {
                    background-color: black;
                    height: 100%;
                    width: calc(var(--border-size) * var(--increment-amount));
                }
            </style>
        `;

        this.TEMPLATE = `
            <div id="row">
                <div>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="9"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="59"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="60"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="67"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="68"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="69"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="70"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="71"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="72"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="73"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="74"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="75"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="61"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="62"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="22"></periodic-table-element>
                    <div class="element-separator"></div>
                </div>
            </div>
        `;
    }

    postRender() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

defineCustomElement(SeventhRow);