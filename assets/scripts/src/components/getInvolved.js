class GetInvolved extends CustomElement {
    constructor() {
        super();
        this.STYLE = `
            <style>
                
            </style>
        `;

        this.TEMPLATE = `
            <h2>Get Involved</h2>
            <p>
                Hate and Intolerance will never pause in its efforts to spread and live on. It is up to us to remain 
                vigilant and fight it in all its forms whenever we see it and can do so safely. Are you ready to do more to 
                eliminate hatred in this world? 
            </p>
            <h3>In the day-to-day</h3>
            <ul>
                <li>The best way to fight hatred and intolerance in the world is to call it out when you see it.</li>
                <li>Go through this site with friends and family and people in your life you care about.</li>
                <li>Share this site on social media!</li>
                <li>Contribute to the organizations found in the elements</li>
                <li>Help those around you with love and copassion!</li>
            </ul>
            <h3>With the Organization</h3>
            <ul>
                <li>Join our Discord to discuss ways to educate your community and meet others who want the same in your area!</li>
                <li>Join us on Github and contribute to the website and work on our roadmap!</li>
                <li>Donate! We'd love to hire translators or be able to work on this full time!</li>
                <li>Do research and compile information to be input into the elements!</li>
            </ul>
        `;
    }
}

defineCustomElement(GetInvolved);