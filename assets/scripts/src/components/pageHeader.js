class PageHeader extends CustomElement {
    constructor() {
        super();
        this.STYLE = `
            <style>
                header {
                    border-bottom: black solid 1px;
                    display: flex;
                }
                
                #branding {
                    width: 70%;
                }
                
                #nav {
                    width: 30%;
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
            </style>
        `;

        this.TEMPLATE = `
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
}

defineCustomElement(PageHeader);