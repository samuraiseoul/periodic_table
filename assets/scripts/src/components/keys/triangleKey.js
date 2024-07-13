class TriangleKey extends CustomElement {
    static observedAttributes = [];

    constructor() {
        super();
        this.STYLE = `
            <style>
                svg {
                    stroke: ${this.getAttribute('stroke')};
                    fill: ${this.getAttribute('fill')};
                    width: calc(var(--increment-amount) * var(--border-size) * 6);
                    height: calc(var(--increment-amount) * var(--border-size) * 3);
                }
            </style>
        `;

        this.TEMPLATE = `
            <div>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <title>Downward Triangle</title>
                    <path xmlns="http://www.w3.org/2000/svg" stroke-width="3" d="M8, 3H300L154, 105z"/>
                </svg>
            </div>
        `;
    }

    postRender() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

defineCustomElement(TriangleKey);