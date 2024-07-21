import CustomElement from "../../../lib/customElement";

export default class OctagonKey extends CustomElement {
    protected readonly STYLE = `
        <style>
            svg{
                stroke: ${this.getAttribute('stroke')};
                fill: ${this.getAttribute('fill')};
                width: calc(var(--increment-amount) * var(--border-size) * 6);
            }
        </style>
    `;

    protected readonly TEMPLATE = `
        <div>
            <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
            <?xml version="1.0" encoding="utf-8"?>
            <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> 
                <title id="octagonIconTitle">Octagon</title> 
                <polygon points="16 3 21 8 21 16 16 21 8 21 3 16 3 8 8 3"/> 
            </svg>
        </div>
    `;
}