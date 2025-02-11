import CustomElement from "../../lib/customElement";

export default class AboutUs extends CustomElement {
    protected readonly STYLE = `<style>
        article {
            width: var(--view-amount);
            margin: 1em auto;
            padding: 1em;
            border-radius: .5em;
            border: solid black .10em;
            box-shadow: .5em .5em .5em rgba(1, 1, 1, .4);
        }
        
        @media (max-width: 500px) {
            article {
                width: auto;
            }
        }
    </style>`;

    protected readonly TEMPLATE = `
        <article>
            <h2>About Us</h2>
            <p>
                Reframing Hate is a website dedicated to eliminating the sources of bigotry and violence worldwide. 
                Our main resource, The Periodic Table of Hate and Intolerance, aims to jumpstart this process by focusing first
                on education of the main sources of hate in the world. You can't identify and fight the hate and injustice in your life
                and the world around you if you don't know what it looks like. By clicking on each element in the table you
                will learn what each element is, examples of thoughts and actions that embody it, the forces fighting 
                for it and against it, and lastly a way to learn even more about it.
            </p>
        </article>
    `;
}