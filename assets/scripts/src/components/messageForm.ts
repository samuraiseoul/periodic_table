import CustomElement from "../../lib/customElement";

const CONTACT_FORM_URL = 'https://api.web3forms.com/submit';
const CONTACT_FORM_METHOD = 'POST';
const CONTACT_FORM_HEADERS = { 'Content-Type': 'application/json', 'Accept': 'application/json'};

export default class MessageForm extends CustomElement {
    protected readonly STYLE = `<style>
        label {
            width: 100%;
            display: block;
        }

        #succeed {
            color: green;
            font-weight: bold;
            display: none;
        }
        
        #fail {
            color: red;
            font-weight: bold;
            display: none;
        }
        
        .required {
            color: red;
            margin-left: 5px;
        }
        
        textarea {
            resize: vertical;
            display: block;
            width: 100%;
            min-height: 150px;
        }
        
        label > input {
            display: block;
            margin: 0.5em 0;
        }
    </style>`;

    protected readonly TEMPLATE = `
        <form action="https://api.web3forms.com/submit" method="POST" id="contactForm">
            <input type="hidden" name="subject" value="New Message from ReframingHate.com!">
            <input type="hidden" name="access_key" value="ce4d34d3-b304-4ecb-b09e-9ebadae5295c">
            <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
            
            <h3 id="succeed">Message Sent Successfully!</h3>
            <h3 id="fail">Message Failed To Send!</h3>
            
            <label>
                Preferred Name:<span class="required" title="required asterisk">*</span> 
                <input required type="text" name="from_name">
            </label>
            <label>
                Email Address:<span class="required" title="required asterisk">*</span> 
                <input required type="email" name="email">
            </label>
            <label>
                Phone Number: 
                <input type="tel" name="phone">
            </label>
            <label>
                What can we help you with today?<span class="required" title="required asterisk">*</span>
                <textarea required placeholder="What's on your mind?" rows="10" name="message"></textarea>
            </label>
            <input type="submit">
        </form>
    `;

    public postRender() {
        (this.shadowSelector('#contactForm') as HTMLFormElement)
            .addEventListener('submit', this.contactSubmit.bind(this));
    }

    private async contactSubmit(event : SubmitEvent) {
        event.preventDefault();

        fetch(CONTACT_FORM_URL, MessageForm.generateFormParameters(event.target as HTMLFormElement))
            .then(this.formSendSuccess.bind(this))
            .catch(this.formSendFail.bind(this));
    }

    private static generateFormParameters(form : HTMLFormElement) {
        return {
            method: CONTACT_FORM_METHOD,
            headers: CONTACT_FORM_HEADERS,
            body: JSON.stringify(Object.fromEntries(new FormData(form)))
        };
    }

    public formSendSuccess() {
        (this.shadowSelector('#contactForm') as HTMLFormElement).reset();
        (this.shadowSelector('#succeed') as HTMLHeadingElement).style.display = 'initial';
    }

    public formSendFail() {
        (this.shadowSelector('#fail') as HTMLHeadingElement).style.display = 'initial';
    }
}