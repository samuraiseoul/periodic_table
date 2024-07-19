class FrequentlyAskedQuestions extends CustomElement {
    constructor() {
        super();
        this.STYLE = `
            <style>
                details summary h3 {
                    display: inline;
                }
            </style>
        `;

        this.TEMPLATE = `
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
        `;
    }
}

defineCustomElement(FrequentlyAskedQuestions);