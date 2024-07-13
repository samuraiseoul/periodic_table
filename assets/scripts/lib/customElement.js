function toSnakeCase(camelCase) {
    return camelCase.replace(/[A-Z]/g, function(firstMatch) {
        return '-' + firstMatch.toLowerCase();
    }).slice(1);
}

function defineCustomElement(element) {
    window.customElements.define(element.ELEMENT_NAME, element);
}

class CustomElement extends HTMLElement {
    connectedCallback() {
        this.render();
        if (this.registerListeners) {
            this.registerListeners();
        }
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `${this.STYLE} ${this.TEMPLATE}`;
        return template;
    }

    render() {
        this.preRenderHook();
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
        this.postRenderHook();
    }

    preRenderHook() {
        if (this.preRender) {
            this.preRender();
        }
    }

    postRenderHook() {
        if (this.postRender) {
            this.postRender();
        }
    }

    shadowSelector(selector) {
        return this.shadowRoot ? this.shadowRoot.querySelector(selector) : null;
    }

    shadowSelectorAll(selector) {
        return this.shadowRoot ? Array.from(this.shadowRoot.querySelectorAll(selector)) : null;
    }

    static get ELEMENT_NAME() { return toSnakeCase(this.name); }
}