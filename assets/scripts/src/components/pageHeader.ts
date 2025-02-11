import CustomElement from "../../lib/customElement";

export default class PageHeader extends CustomElement {
    protected readonly STYLE = `
        <style>
            header {
                border-bottom: black solid 1px;
                display: flex;
                justify-content: space-around;
            }
            
            #branding {
                width: 40%;
            }
            
            #nav {
                width: 50%;
            }
            
            ul {
                list-style: none;
                display: flex;
                justify-content: space-around;
            }
            
            ul li a {
                text-decoration: none;
                color: black;
            } 
            
            ul li a:visited {
                text-decoration: none;
                color: black;
            } 
            
            @media (max-width: 500px) {
                header {
                    flex-direction: column;
                }
                #nav, #branding {
                    width: 95%;
                }
            }
        </style>
    `;

    protected readonly TEMPLATE = `
        <header>
            <section id="branding">
                <h1>Reframing Hate</h1>
            </section>
            <section id="nav">
                <ul>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#getInvolved">Get Involved</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </section>
        </header>
    `;
}