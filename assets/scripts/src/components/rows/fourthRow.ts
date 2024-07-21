import CustomElement from "../../../lib/customElement";

export default class FourthRow extends CustomElement {
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
                    <periodic-table-element data-id="6"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="27"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="30"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="31"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="11"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="12"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="13"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="14"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="15"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="16"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="17"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="32"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="33"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="34"></periodic-table-element>
                    <div class="element-separator"></div>
                    <periodic-table-element data-id="19"></periodic-table-element>
                    <div class="element-separator"></div>
                </div>
            </div>
    `;
}