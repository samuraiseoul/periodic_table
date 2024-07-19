class TriangleKey extends CustomElement {
    static observedAttributes = [];

    constructor() {
        super();
        this.STYLE = `
            <style>
                .container {
                    width: calc(var(--increment-amount) * var(--border-size) * 6);
                    height: calc(var(--increment-amount) * var(--border-size) * 6);
                }
                
                svg {
                    width: 90%;
                    height: 90%;
                    transform: rotate(180deg);
                    fill: #D2D2D2;
                    stroke-width: 8;
                    stroke: black;
                }
            </style>
        `;

        this.TEMPLATE = `
            <div class="container">
                <svg id="triangle" stroke-width="2" viewBox="0 0 100 100">
                    <polygon points="50 15, 100 100, 0 100"/>
                </svg>
            </div>   
        `;
    }

    postRender() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

defineCustomElement(TriangleKey);