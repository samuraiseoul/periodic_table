import CustomElement from "../../lib/customElement";
import ElementModal from "./elementModal";

export default class PeriodicTable extends CustomElement {
    protected readonly STYLE = `
        <style>
            .table-container {
                margin: auto;
                width: var(--view-amount);
                height: calc(var(--increment-amount) * (var(--element-size) + (var(--border-size) * 2)) * var(--number-of-rows));
            }
            img {
                position: absolute;
                width: calc(var(--increment-amount));
                height: calc(var(--increment-amount));
            }
        </style>
    `;

    protected readonly TEMPLATE = `
        <table-title></table-title>
        <table-legend></table-legend>
        <div class="table-container">
            <first-row></first-row>
            <second-row></second-row>
            <third-row></third-row>
            <fourth-row></fourth-row>
            <fifth-row></fifth-row>
            <sixth-row></sixth-row>
            <seventh-row></seventh-row>
            <eighth-row></eighth-row>
            <ninth-row></ninth-row>
            <tenth-row></tenth-row>
            <eleventh-row></eleventh-row>
        </div>
        <element-modal data-id=""></element-modal>
    `;

    public registerListeners() {
        this.addEventListener('element-clicked', (event : Event)  => {
            const modal = this.shadowSelector('element-modal') as ElementModal;
            modal.setAttribute('data-id', (<CustomEvent>event).detail.id);
            modal.open();
        });
    }
}