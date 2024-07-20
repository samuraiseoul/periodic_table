import CustomElement from "../../lib/customElement";

export default class TableTitle extends CustomElement {
    protected readonly STYLE = `
        <style>
            h1, h2, h3, p {
                margin: 0;
                padding: 0;
                font-family: sans-serif;
            }

            .table-title {
                margin-left: calc(var(--increment-amount) * 40);
                position: absolute;
                display: block;
            }

            .table-title > div {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                width: calc(var(--increment-amount) * var(--element-size) * 7.5);
                height: calc(var(--increment-amount) * var(--element-size) * 3 + var(--border-size) * var(--increment-amount) * 4);
            }

            .table-title h1 {
                font-size: calc(var(--increment-amount) * 12);
                text-align: center;
                margin: auto;
            }
        </style>
    `;

    protected readonly TEMPLATE = `
        <div class="table-title">
            <div>
                <h1>THE PERIODIC TABLE</h1>
                <h1>OF HATE AND</h1>
                <h1>INTOLERANCE</h1>
            </div>
        </div>
    `;
}