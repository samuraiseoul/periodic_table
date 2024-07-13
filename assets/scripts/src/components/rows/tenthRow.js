class TenthRow extends CustomElement {
    static observedAttributes = [];

    constructor() {
        super();
        this.STYLE = `
            <style>    
                #row {
                    overflow: hidden;
                    width: 100%;
                    margin-top: calc(var(--increment-amount)* -15);
                    height: calc(var(--increment-amount) * (var(--element-size) + var(--border-size)));
                    display: flex;
                    justify-content: space-around;
                }
    
                #row > div {
                    display: flex;
                    height: calc(var(--increment-amount) * (var(--element-size) + var(--border-size)));
                    border: none;
                    border-top: var(--increment-amount) solid #8A3688;
                    justify-content: space-between;
                }
    
                .element-separator {
                    height: 100%;
                    width: calc(var(--border-size) * var(--increment-amount));
                    background-color: #8A3688;
                }
            </style>
        `;

        this.TEMPLATE = `
            <div id="row">
                <div>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="90"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="91"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="92"></periodic-table-element>
                    <div class="element-separator"></div>
                </div>
            </div>
        `;
    }

    postRender() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

defineCustomElement(TenthRow);