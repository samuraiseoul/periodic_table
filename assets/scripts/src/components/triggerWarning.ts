import CustomElement from "../../lib/customElement";

export default class TriggerWarning extends CustomElement {
    protected readonly STYLE = `
        <style>
            h1, h2, h3, p, ul, li {
                margin: 0;
                padding: 0;
                text-align: center;
            }
            
            dialog {
                border: 1px solid black;
                height: 500px;
                width: 750px;
                background-color: white;
            }
        </style>
    `;

    protected readonly TEMPLATE = `
        <dialog open>
            <button>&#10060;</button>
            <div>
                <header>
                    <h1>TRIGGER WARNING</h1>
                    <h2>Disturbing content ahead!</h2>
                </header>
                <article>
                    <p>This table and the information within is completely uncensored. Many topics discuss 
                    violence, denial of rights, and dehumanize people. We recommend still viewing this content if 
                    you are in a mental place to do so. These things are disturbing and you should feel disturbed after 
                    viewing them. Remember those emotions and use them to take action to effect meaningful change in the 
                    world. That is the goal of everyone who has worked on this site. Thank you.</p>
                </article>
            </div>
        </dialog>
    `;

    public registerListeners() {
        (this.shadowSelector('button') as HTMLButtonElement)
            .addEventListener('click', event => (this.shadowSelector('dialog') as HTMLDialogElement)
                .close());
    }
}