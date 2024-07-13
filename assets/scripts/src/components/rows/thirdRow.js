class ThirdRow extends CustomElement {
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
                    <periodic-table-element data-id="5"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="24"></periodic-table-element>
                    <div class="element-separator"></div>
                </div>
                <div>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="25"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="26"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="18"></periodic-table-element>
                    <div class="element-separator"></div>
                </div>
            </div>
        `;
    }

    postRender() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

defineCustomElement(ThirdRow);