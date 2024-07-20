import CustomElement from "../../../lib/customElement";

export default class FifthRow extends CustomElement {
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
                <periodic-table-element data-id="7"></periodic-table-element>
                <div class="element-separator"></div>
                <periodic-table-element data-id="28"></periodic-table-element>
                <div class="element-separator"></div>
                <periodic-table-element data-id="29"></periodic-table-element>
                <div class="element-separator"></div>
                <periodic-table-element data-id="35"></periodic-table-element>
                <div class="element-separator"></div>
                <periodic-table-element data-id="37"></periodic-table-element>
                <div class="element-separator"></div>
                <periodic-table-element data-id="38"></periodic-table-element>
                <div class="element-separator"></div>
                <periodic-table-element data-id="39"></periodic-table-element>
                <div class="element-separator"></div>
                <periodic-table-element data-id="40"></periodic-table-element>
                <div class="element-separator"></div>
                <periodic-table-element data-id="41"></periodic-table-element>
                <div class="element-separator"></div>
                <periodic-table-element data-id="42"></periodic-table-element>
                <div class="element-separator"></div>
                <periodic-table-element data-id="43"></periodic-table-element>
                <div class="element-separator"></div>
                <periodic-table-element data-id="44"></periodic-table-element>
                <div class="element-separator"></div>
                <periodic-table-element data-id="36"></periodic-table-element>
                <div class="element-separator"></div>
                <periodic-table-element data-id="45"></periodic-table-element>
                <div class="element-separator"></div>
                <periodic-table-element data-id="20"></periodic-table-element>
                <div class="element-separator"></div>
            </div>
        </div>
    `;
}