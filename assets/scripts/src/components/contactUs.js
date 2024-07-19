class ContactUs extends CustomElement {
    constructor() {
        super();
        this.STYLE = `
            <style>
            </style>
        `;

        this.TEMPLATE = `
            <h2>Contact Us</h2>
            <p>
                Please feel free to contact us! We would love to hear from you! We are excited to hear any feedback you
                may have! Whether its support, criticism, or an idea to progress this even further, we're more than happy 
                to listen!
            </p>
            <ul>
                <li>Discord</li>
                <li>Github</li>
                <li>Amy's Site</li>
                <li>Sophie's Site</li>
                <li>Email Us! <a href="mailto:contactus@reframinghate.com">contactus@reframinghate.com</a></li>
            </ul>
        `;
    }
}

defineCustomElement(ContactUs);