interface CustomElement {
    registerListeners?() : void;
    preRender?() : void;
    postRender?() : void;
}

abstract class CustomElement extends HTMLElement {
    protected abstract readonly STYLE: string;

    protected abstract readonly TEMPLATE: string;

    private connectedCallback() {
        this.render();
        this.registerListeners?.();
    }

    private getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `${this.STYLE} ${this.TEMPLATE}`;
        return template;
    }

    private render() {
        this.preRender?.();
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        this.postRender?.();
    }

    protected shadowSelector(selector : string) : HTMLElement | null {
        return this.shadowRoot ? this.shadowRoot.querySelector(selector) : null;
    }

    protected shadowSelectorAll(selector : string) : HTMLElement[] {
        return this.shadowRoot ? Array.from(this.shadowRoot.querySelectorAll(selector)) : [];
    }
}

export default CustomElement;