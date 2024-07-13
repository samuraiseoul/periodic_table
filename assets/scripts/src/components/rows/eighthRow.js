class EighthRow extends CustomElement {
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
                    <periodic-table-element data-id="10"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="63"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="64"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="76"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="83"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="84"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="85"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="86"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="87"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="88"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="89"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="77"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="65"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="66"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="23"></periodic-table-element>
                    <div class="element-separator"></div>
                </div>
            </div>
        `;
    }

    postRender() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

defineCustomElement(EighthRow);