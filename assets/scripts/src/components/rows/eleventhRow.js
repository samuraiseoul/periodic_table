class EleventhRow extends CustomElement {
    static observedAttributes = [];

    constructor() {
        super();
        this.STYLE = `
            <style>    
                #row {
                    display: flex;
                    margin-left: calc(var(--increment-amount) * (var(--element-size) + var(--border-size))); 
                    width: calc(var(--increment-amount) * (var(--element-size) * 13 + var(--border-size) * 14)); 
                    height: calc(var(--increment-amount) * var(--element-size)); 
                    overflow: hidden; 
                    justify-content: space-around;
                }
    
                #row > div {
                    display: flex;
                    border: none;
                    justify-content: space-between;
                    border-top: #8A3688 solid var(--increment-amount);
                }
    
                .element-separator {
                    height: 100%;
                    width: calc(var(--border-size) * var(--increment-amount));
                    background-color: #8A3688;
                }
    
                .fake-bottom {
                    display: flex;
                    height: var(--increment-amount) !important;
                }
    
                .fake-bottom > div {
                    border: none;
                    height: var(--increment-amount); 
                    background-color: #8A3688;
                }
    
                .fake-bottom > div.spacer {
                    background-color: transparent;
                }
                
                #signature {
                    width: calc(var(--increment-amount) * 20);
                    height: calc(var(--increment-amount) * 10);
                    position: absolute;
                    margin-top: calc(var(--increment-amount) * 10);
                    margin-left: calc(var(--increment-amount) * 20 * 14.8);
                }
            </style>
        `;

        this.TEMPLATE = `
            <img id="signature" src="./assets/imgs/amy-signature.png" alt="Amy Cohen Efron's Signature 'AEfron' in a lovely cursive font." />
            <div id="row">
                <div>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="93"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="94"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="95"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="96"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="97"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="98"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="99"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="100"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="101"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="102"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="103"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="104"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="105"></periodic-table-element>
                    <div class="element-separator"></div>
                </div>
            </div>
    
            <div class="fake-bottom">
                <div 
                    class="spacer" 
                    style="width: calc(var(--increment-amount) * (var(--element-size)) + (var(--increment-amount) * 1));"
                ></div>
                <div 
                    style="width: calc(var(--increment-amount) * (var(--element-size) * 13) + (var(--increment-amount) * 14));"
                ></div>
            </div>
        `;
    }

    postRender() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

defineCustomElement(EleventhRow);