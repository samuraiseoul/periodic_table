class NinthRow extends CustomElement {
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
    
                .fake-bottom {
                    display: flex;
                    height: var(--increment-amount) !important;
                }
    
                .fake-bottom > div {
                    border: none;
                    height: var(--increment-amount); 
                    background-color: black;
                }
    
                .fake-bottom > div.spacer {
                    background-color: transparent;
                }
            </style>
        `;

        this.TEMPLATE = `
            <div id="row">
                <div 
                    style="width: calc(var(--increment-amount) * (var(--element-size) * 2) + (var(--increment-amount) * 2.5)); height: var(--increment-amount);"
                > <!-- PLACEHOLDER TO MAKE FAKE BORDER TOP--> </div>
                <div>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="78"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="79"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="80"></periodic-table-element>
                    <div class="element-separator"></div>
                </div>
                <div style="width: calc(var(--increment-amount) * (5 * var(--element-size) + 5.5)); height: var(--increment-amount);">
                    <!-- PLACEHOLDER TO MAKE FAKE BORDER TOP-->
                </div>
                <div>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="81"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="82"></periodic-table-element>
                    <div class="element-separator"></div>
                </div>
                <div style="width: calc(var(--increment-amount) * (var(--element-size) * 3 + 4)); height: var(--increment-amount);">
                    <!-- PLACEHOLDER TO MAKE FAKE BORDER TOP-->
                </div>
            </div>
    
            <div class="fake-bottom">
                <div 
                    class="spacer" 
                    style="width: calc(var(--increment-amount) * (var(--element-size) * 2) + (var(--increment-amount) * 1.85));"
                ></div>
                <div 
                    style="width: calc(var(--increment-amount) * (var(--element-size) * 3) + (var(--increment-amount) * 4));"
                ></div>
                <div 
                    class="spacer" 
                    style="width: calc(var(--increment-amount) * (var(--element-size) * 5) + (var(--increment-amount) * 4.05));"
                ></div>
                <div 
                    style="width: calc(var(--increment-amount) * (var(--element-size) * 2) + (var(--increment-amount) * 3));"
                ></div>
            </div>
        `;
    }

    postRender() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

defineCustomElement(NinthRow);