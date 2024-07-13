class SixthRow extends CustomElement {
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
                    <periodic-table-element data-id="8"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="46"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="47"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="48"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="49"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="50"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="51"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="52"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="53"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="54"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="55"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="56"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="57"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="58"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="21"></periodic-table-element>
                    <div class="element-separator"></div>
                </div>
            </div>
        `;
    }

    postRender() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

defineCustomElement(SixthRow);