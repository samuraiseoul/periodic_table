class AboutUs extends CustomElement {
    constructor() {
        super();
        this.STYLE = `
            <style>
            </style>
        `;

        this.TEMPLATE = `
            <h2>About Us</h2>
            <p>
                Reframing Hate is a website dedicated to eliminating the sources of bigotry and violence worldwide. 
                Our main resource, The Periodic Table of Hate and Intolerance, aims to star this process by focusing first
                on education of the main sources of hate in the world. You can't identify and fight the hate and injustice in your life
                and the world around you if you don't know what it looks like. By clicking on each element in the table you
                will learn what each element is, examples of thoughts and actions that embody it, the forces fighting 
                for it and against it, and lastly a way to learn even more about it.
            </p>
            <p>
                Amy Cohen Efron is a Deaf artist and the visionary behind the original artwork that inspired this website.
            </p>
            <p>
                Sophie The Lionhart is the software engineer who made this site. 
            </p>
        `;
    }
}

defineCustomElement(AboutUs);