import CustomElement from "../../lib/customElement";

export default class PageFooter extends CustomElement {
    protected readonly STYLE = `
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

    protected readonly TEMPLATE = `
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
                    <li><a href="https://discord.gg/SmTRvTGFVX">Discord</a></li>
                    <li><a href="https://github.com/samuraiseoul/periodic_table">Github</a></li>
                    <li><a href="https://aefronarts.com/">Amy</a></li>
                    <li><a href="https://sophielionhart.com/">Sophie</a></li>
                    <li>Email Us! <a href="mailto:contactus@reframinghate.com">contactus@reframinghate.com</a></li>
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