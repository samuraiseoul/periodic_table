class PageFooter extends CustomElement {
    constructor() {
        super();
        this.STYLE = `
            <style>
                footer {
                    border-top: solid black 1px;
                    display: flex;
                    justify-content: space-around;
                }
                
                #table img {
                    width: 20vw;
                }
            </style>
        `;

        this.TEMPLATE = `
            <footer>
                <section id="table">
                    <h4>The Original</h4>
                    <img 
                        src="./assets/imgs/periodic-table-of-hate-and-intolerance.png" 
                        alt="Periodic Table Of Hate And Intolerance original artwork, by Amy Cohen Efron" 
                    />
                </section>
                <section id="contact">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Discord</li>
                        <li>Github</li>
                        <li>Amy</li>
                        <li>Sophie</li>
                        <li>Email Us</li>
                    </ul>
                </section>
                <section id="involvement">
                    <h4>Involvement</h4>
                    <ul>
                        <li>Day To Day Embodiment</li>
                        <li>Ideas and Feedback</li>
                        <li>Donations, Development, and Collaborations</li>
                    </ul>
                </section>
            </footer>
        `;
    }
}

defineCustomElement(PageFooter);