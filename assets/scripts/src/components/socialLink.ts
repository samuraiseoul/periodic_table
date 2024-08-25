import CustomElement from "../../lib/customElement";

export default class SocialLink extends CustomElement {
    protected readonly STYLE = `<style>
        #link {
            display: flex;
            justify-content: space-around;
        }
        
        #icon {
            width: 15%;
        }
        
        #description {
            width: 75%;
            margin: auto 0;
        }
    </style>`;

    protected readonly TEMPLATE = `
        <a href="" id="link">
            <img src="" alt="" id="icon"/>
            <p id="description"></p>
        </a>
    `;

    public postRender() {
        if(!this.shadowRoot) { return; }

        (this.shadowSelector('#link') as HTMLAnchorElement).href = this.getAttribute('data-uri') || '';

        (this.shadowSelector('#icon') as HTMLImageElement).src = this.getAttribute('data-img-src') || '';
        (this.shadowSelector('#icon') as HTMLImageElement).alt = this.getAttribute('data-img-alt') || '';

        (this.shadowSelector('#description') as HTMLParagraphElement).innerText = this.getAttribute('data-description') || '';
    }

    protected attributeChangedCallback() {
        this.postRender();
    }
}