import CustomElement from "../../lib/customElement";

export default class TableLegend extends CustomElement {
    protected readonly STYLE = `
        <style>
            h1, h2, h3, p {
                margin: 0;
                padding: 0;
                font-family: sans-serif;
            }

            #table-legend {
                margin-left: calc(var(--increment-amount) * 200);
                position: absolute;
                display: flex;
                width: calc(var(--increment-amount) * var(--element-size) * 5);
                height: calc(var(--increment-amount) * var(--element-size) * 2.75);
                border-top : var(--increment-amount) black solid;
            }

            #table-legend li {
                font-family: sans-serif;
                display: flex;
            }

            #table-legend > header {
                text-orientation: upright;
                width: calc(var(--increment-amount) * 6);
                border-left : var(--increment-amount) black solid;
                border-right : var(--increment-amount) black solid;
                border-bottom : var(--increment-amount) black solid;
                display: flex;
                justify-content: space-around;
            }

            #table-legend > header > h2 {
                writing-mode: vertical-rl;
                font-size: calc(var(--increment-amount) * 4);
                text-align: center;
            }

            #table-legend > #keys {
                display: flex;
                height: calc(var(--increment-amount) * var(--element-size) * 2.75);
                width: calc((var(--increment-amount) * var(--element-size) * 5) - (var(--increment-amount) * 6));
                flex-direction: column;
            }
            
            #keys > div {
                width: 100%;
                display: flex;
                height: calc(var(--increment-amount) * var(--element-size) * 1);
            }
            
            #keys > div:first-child {
                height: calc(var(--increment-amount) * var(--element-size) * 1.75);
            }

            #keys ul {
                display: flex;
                justify-content: center;
                flex-direction: column;
                width: 50%;
                padding: 0;
                margin: 0;
                list-style: none;
                border-right : var(--increment-amount) black solid;
                border-bottom : var(--increment-amount) black solid;
            }
            
            #keys .no-border {
                border-right : none;
                border-bottom : none;
            }

            #keys ul > li {
                position: relative;
                margin-left: calc(var(--increment-amount) * 2);
            }

            #keys ul > li > p {
                margin: auto 0 auto .25em;
                font-weight: 550;
                font-size: calc(var(--increment-amount) * 2.65);
            }
            
            li > svg {
                stroke: hsl(0deg, 100%, 50%, 0.5); /* transparent red */
                fill  : black;
            }
        </style>
    `;

    protected readonly TEMPLATE = `
        <div id="table-legend">
            <header>
                <h2>LEGEND KEY</h2>
            </header>
            <div id="keys">
                <div>
                    <ul class="no-border">
                        <li><circle-key stroke="black" fill="#EC1B24"></circle-key><p>EMOTIONS</p></li>
                        <li><octagon-key stroke="black" fill="#818284"></octagon-key><p>TYPES OF KILLING</p></li>
                        <li><octagon-key stroke="black" fill="#00A64E"></octagon-key><p>" - ISMS"</p></li>
                        <li><octagon-key stroke="black" fill="#FEF004"></octagon-key><p>PHOBIAS / BELIEFS</p></li>
                        <li><octagon-key stroke="black" fill="#C2B49A"></octagon-key><p>CYCLE OF OPPRESSION</p></li>
                    </ul>
                    <ul>
                        <li><octagon-key stroke="black" fill="#00ADEF"></octagon-key><p>GOVERNMENT SYSTEMS</p></li>
                        <li><octagon-key stroke="black" fill="#A17A54"></octagon-key><p>HISTORICAL DICTATORS</p></li>
                        <li><octagon-key stroke="black" fill="#9597CB"></octagon-key><p>PRACTICES</p></li>
                        <li><octagon-key stroke="black" fill="#F4931D"></octagon-key><p>HATE GROUPS</p></li>
                        <li><octagon-key stroke="black" fill="#B8E5F9"></octagon-key><p>SLURS</p></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><triangle-key stroke="black" fill="#D2D2D2"></triangle-key><p>PEOPLE TO WATCH</p></li>
                        <li><circle-key stroke="#8A3688" fill="white"></circle-key><p>COUNTERACTION STRATEGIES</p></li>
                    </ul>
                    <ul class="no-border"></ul>
                </div>
            </div>
        </div>
    `;
}