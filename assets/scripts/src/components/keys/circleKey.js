class CircleKey extends CustomElement {
    static observedAttributes = [];

    constructor() {
        super();
        this.STYLE = `
            <style>
                svg{
                    stroke: ${this.getAttribute('stroke')};
                    fill: ${this.getAttribute('fill')};
                    width: calc(var(--increment-amount) * var(--border-size) * 6);
                }
            </style>
        `;

        this.TEMPLATE = `
            <div>
                <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                <?xml version="1.0" encoding="utf-8"?>
                <svg viewBox="0 0 24 24">
                    <path 
                        d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        `;
    }

    postRender() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

defineCustomElement(CircleKey);