import CustomElement from "../../lib/customElement";

export default class ContactUs extends CustomElement {
    protected readonly STYLE = `<style>
        article {
            width: var(--view-amount);
            margin: 1em auto;
            padding: 1em;
            border-radius: .5em;
            border: solid black .10em;
            box-shadow: .5em .5em .5em rgba(1, 1, 1, .4);
        }
        
        article > div {
            display: flex;
            justify-content: space-around;
        }
        
        section {
            width: 40%;
            margin: 1em 0;
            padding: 1em;
            border-radius: .5em;
            border: solid black .10em;
            box-shadow: .5em .5em .5em rgba(1, 1, 1, .4);
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
    </style>`;

    protected readonly TEMPLATE = `
        <article>
            <header>
                <h2>Contact Us</h2>
                <p>
                    Please feel free to contact us! We would love to hear from you! We are excited to hear any feedback you
                    may have! Whether its support, criticism, or an idea to progress this even further, we're more than happy 
                    to listen!
                </p>
            </header>
            <div>
                <section>
                    <h3>Social Media</h3>
                    <social-link
                        data-uri="https://discord.gg/SmTRvTGFVX"
                        data-img-src="./assets/imgs/discord.svg"
                        data-img-alt="Reframing Hate's Discord Server Join Link Icon"
                        data-description="Join our Discord server to learn more and get additional help with using the tool or becoming more active in your community!"
                    ></social-link>
                    <social-link
                        data-uri="https://github.com/samuraiseoul/periodic_table"
                        data-img-src="./assets/imgs/github.svg"
                        data-img-alt="Reframing Hate's GitHub Repository Icon"
                        data-description="Reframing Hate is open source! Have an idea or want to contribute? Join us on GitHub!"
                    ></social-link>
                    <p>
                        <a href="https://aefronarts.com/">Amy Cohen Efron</a> is the artist and the visionary behind the original artwork that inspired this website, The Periodic Table of Hate and Intolerance.
                    </p>
                    <p>
                        <a href="https://sophielionhart.com/">Sophie The Lionhart</a> is the software engineer who made this site. 
                    </p>
                </section>
                <section>
                    <h3>Send us a message!</h3>
                    <message-form></message-form>
                </section>
            </div>
        </article>
    `;
}