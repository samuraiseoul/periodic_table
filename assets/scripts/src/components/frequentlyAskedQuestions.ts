import CustomElement from "../../lib/customElement";

export default class FrequentlyAskedQuestions extends CustomElement {
    protected readonly STYLE = `
        <style>
            article {
                width: var(--view-amount);
                margin: 1em auto;
                padding: 1em;
                border-radius: .5em;
                border: solid black .10em;
                box-shadow: .5em .5em .5em rgba(1, 1, 1, .4);
            }
            
            details {
                border: solid black .1em;
                margin: 1em;
            }
        
            details summary h3 {
                display: inline;
            }
            
            details:nth-child(even) {
                background-color: rgba(1, 1, 1, 0.2);
            }
            
            details:nth-child(odd) {
                background-color: white;
            }
        </style>
    `;

    protected readonly TEMPLATE = `
        <article>
            <h2>Frequently Asked Questions</h2>
            <details>
                <summary><h3>Why Should We Care About This</h3></summary>
                <p>
                    Hate Bad. Duh!
                </p>
            </details>
            <details>
                <summary><h3>Are You Guys Political</h3></summary>
                <p>
                    No. We believe that hate and intolerance is not something unique to any side of the political aisle 
                    and should be fought at all opportunities by everybody on all sides.
                </p>
            </details>
            <details open>
                <summary><h3>What is your agenda?</h3></summary>
                <p>
                    As two individuals from marginalized communities we grew up being victims of hate and intolerance. 
                    Anyone who grew up underprivileged in any aspects of their life or were bullied for any reason understand
                    what it is like to be the victim of the abuse that comes from bigotry. We hope to eliminate that type 
                    of suffering from this world. :) 
                </p>
            </details>
        </article>
    `;
}