import CustomElement from "../../lib/customElement";

export default class TableLegend extends CustomElement {
    protected readonly STYLE = `
        <style>
            h1, h2, h3, p {
                margin: 0;
                padding: 0;
                font-family: sans-serif;
            }

            .table-legend {
                margin-left: calc(var(--increment-amount) * 200);
                position: absolute;
                display: flex;
                width: calc(var(--increment-amount) * var(--element-size) * 5);
                border-top : var(--increment-amount) black solid;
            }

            .table-legend li {
                font-family: sans-serif;
                display: flex;
            }

            .table-legend > div:nth-child(1) {
                text-orientation: upright;
                width: calc(var(--increment-amount) * 6);
                border-left : var(--increment-amount) black solid;
                border-bottom : var(--increment-amount) black solid;
            }

            .table-legend > div:nth-child(1) > h2 {
                writing-mode: vertical-rl;
            }

            .table-legend > div:nth-child(2) {
                border-left : var(--increment-amount) black solid;
                border-bottom : var(--increment-amount) black solid;
                display: flex;
                flex-direction: column;
                width: calc(var(--increment-amount) * var(--element-size) * 2);
            }

            .table-legend > div:nth-child(2) > ul {
                list-style: none;
            }

            .table-legend > div:nth-child(2) > ul > li {
                position: relative;
            }

            .table-legend > div:nth-child(2) > ul:nth-child(2) {
                border-right: var(--increment-amount) black solid;
            }

            .table-legend > div:nth-child(3) {
                display: flex;
                width: calc(var(--increment-amount) * var(--element-size) * 2.5);
                border-bottom : var(--increment-amount) black solid;
                border-right : var(--increment-amount) black solid;
                margin-left: calc(var(--increment-amount) * var(--border-size) * 2);
                height: calc(var(--increment-amount) * var(--element-size) * 1.25);
            }

            .table-legend > div:nth-child(3) > ul {
                list-style: none;
            }

            .table-legend > div:nth-child(3) > ul > li {
                position: relative;
            }
            
            li > svg {
                stroke: hsl(0deg, 100%, 50%, 0.5); /* transparent red */
                fill  : black;
            }
        </style>
    `;

    protected readonly TEMPLATE = `
        <div class="table-legend">
            <div>
                <h2>LEGEND KEY</h2>
            </div>
            <div>
                <ul>
                    <li><circle-key stroke="black" fill="#EC1B24"></circle-key>EMOTIONS</li>
                    <li><octagon-key stroke="black" fill="#818284"></octagon-key>TYPES OF KILLING</li>
                    <li><octagon-key stroke="black" fill="#00A64E"></octagon-key>"ISMS"</li>
                    <li><octagon-key stroke="black" fill="#FEF004"></octagon-key>PHOBIAS/BELIEFS</li>
                    <li><octagon-key stroke="black" fill="#C2B49A"></octagon-key>CYCLE OF OPPRESSION</li>
                </ul>
                <ul>
                    <li><triangle-key stroke="black" fill="#D2D2D2"></triangle-key>PEOPLE TO WATCH</li>
                    <li><circle-key stroke="#8A3688" fill="white"></circle-key>COUNTERACTION STRATEGIES</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><octagon-key stroke="black" fill="#00ADEF"></octagon-key>GOVERNMENT SYSTEMS</li>
                    <li><octagon-key stroke="black" fill="#A17A54"></octagon-key>HISTORICAL DICTATORS</li>
                    <li><octagon-key stroke="black" fill="#9597CB"></octagon-key>PRACTICES</li>
                    <li><octagon-key stroke="black" fill="#F4931D"></octagon-key>HATE GROUPS</li>
                    <li><octagon-key stroke="black" fill="#B8E5F9"></octagon-key>SLURS</li>
                </ul>
            </div>
        </div>
    `;
}