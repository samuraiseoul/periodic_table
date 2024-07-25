import CustomElement from "../../lib/customElement";

export default class ContactUs extends CustomElement {
    protected readonly STYLE = `<style></style>`;

    protected readonly TEMPLATE = `
        <h2>Contact Us</h2>
        <p>
            Please feel free to contact us! We would love to hear from you! We are excited to hear any feedback you
            may have! Whether its support, criticism, or an idea to progress this even further, we're more than happy 
            to listen!
        </p>
        <ul>
            <li><a href="https://discord.gg/SmTRvTGFVX">Discord</a></li>
            <li><a href="https://github.com/samuraiseoul/periodic_table">Github</a></li>
            <li><a href="https://aefronarts.com/">Amy's Site</a></li>
            <li><a href="https://sophielionhart.com/">Sophie's Site</a></li>
            <li>Email Us! <a href="mailto:contactus@reframinghate.com">contactus@reframinghate.com</a></li>
        </ul>
    `;
}