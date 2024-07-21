import CustomElement from "../../../lib/customElement";

export default class SecondRow extends CustomElement {
    protected readonly STYLE = `
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

    protected readonly TEMPLATE = `
        <div id="row">
            <div>
                <div class="element-separator"></div>
                <periodic-table-element data-id="3"></periodic-table-element>
                <div class="element-separator"></div>
            </div>
            <div>
                <div class="element-separator"></div>
                <periodic-table-element data-id="4"></periodic-table-element>
                <div class="element-separator"></div>
            </div>
        </div>
    `;
}