import CustomElement from "../../lib/customElement";

export default class TriggerWarning extends CustomElement {
    protected readonly STYLE = `
        <style>
            :host {
                z-index: 2;
                position: absolute;
                width: 95%;
                left: 50%;
                transform: translate(-50%, 0);
            }
        
        
            h1, h2, h3, p, ul, li {
                margin: 0;
                padding: 0;
                text-align: center;
            }
            
            #container {
                margin: auto;
                width: 100%;
                height: calc(var(--increment-amount) * (var(--element-size) + (var(--border-size) * 2)) * (var(--number-of-rows) + 0.5));
                display: flex;
                justify-content: space-around;
                background-color: rgba(0,0,0, 0.25);
                backdrop-filter: blur(.35em);
            }
            
            #modal {
                width: 40%;
                margin: auto;
                background-color: white;
                padding: 2em;
                display: flex;
                flex-direction: column;
                border-radius: .5em;
                border: solid black .10em;
                box-shadow: .5em .5em .5em rgba(1, 1, 1, .4);
            }
            
            article p {
                padding: 2em;
            }
            
            button {
                background-color: limegreen;
                margin: auto;
                padding: 1em 2em;
                font-weight: bold;
                border-radius: 0.35em;
                box-shadow: .25em .25em .25em rgba(1, 1, 1, .2);
                cursor: pointer;
                transition: 250ms;
            }
            
            button:hover {
                transform: scale(1.05);
                background-color: lawngreen;
                box-shadow: .4em .4em .4em rgba(1, 1, 1, .5);
            }
        </style>
    `;

    protected readonly TEMPLATE = `
        <div id="container">
            <div id="modal">
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
                <button>I understand and wish to proceed</button>
            </div>
        </div>
    `;

    public registerListeners() {
        (this.shadowSelector('button') as HTMLButtonElement)
            .addEventListener('click', (event : Event) => {
                this.style.visibility = 'hidden';
            });
    }
}