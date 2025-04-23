export interface ElementLink {
    url: string;
    display_name: string;
}

interface AdditionalInformation {
    extended_description: string;
    examples: string[];
    organizations_fighting: ElementLink[];
    organizations_exhibiting: ElementLink[];
    learn_more: ElementLink[];
}

export interface TableElement {
    type: string;
    number: string;
    abbreviation: string;
    full_name: string;
    additional_information: AdditionalInformation;
}

const periodicTableElements: TableElement[] = [
    {
        type: 'emotions',
        number: '1',
        abbreviation: 'A',
        full_name: 'Anger',
        additional_information: {
            extended_description: `
                <h3>What it is</h3>
                <p>Anger is a human emotion. It can feel strong and affect thoughts, body, and actions. Understanding it helps us respond better.</p>
                <h3>Why we feel it</h3>
                <p>We feel anger because of situations, thoughts, or memories. It is part of how we deal with life and other people.</p>
                <p>Sometimes, it comes from past events or our environment.</p>
                <h3>What it feels like in the body</h3>
                <p>Anger can cause body changes like faster heartbeats or tension. You may feel hot, cold, heavy, or restless.</p>
                <p>These reactions help you respond but can also feel uncomfortable.</p>
                <h3>How it helps</h3>
                <p>Anger can guide decisions and protect you. It tells you what matters and what needs attention.</p>
                <p>It can also build connection when shared with others.</p>
                <h3>How it harms</h3>
                <p>When too strong or ignored, anger can cause harm. It might lead to poor decisions or hurt relationships.</p>
                <p>It can also block growth and learning.</p>
                <h3>Common action urges</h3>
                <p>These are actions people often feel compelled to take when experiencing this emotion, along with their possible benefits and risks.</p>
                <h4>Healthy Action Urges:</h4><ul><li><strong>Taking deep breaths and walking away</strong><ul><li><strong>Pros:</strong><ul><li>Prevents escalation of conflict</li><li>Allows time to cool down and think</li></ul></li><li><strong>Cons:</strong><ul><li>Might avoid necessary confrontation</li><li>Can leave issues unresolved if not revisited</li></ul></li></ul></li><li><strong>Talking calmly to express frustration</strong><ul><li><strong>Pros:</strong><ul><li>Improves communication and understanding</li><li>Builds stronger relationships</li></ul></li><li><strong>Cons:</strong><ul><li>Requires emotional control</li><li>Might not be reciprocated by others</li></ul></li></ul></li></ul><h4>Unhealthy Action Urges:</h4><ul><li><strong>Yelling or shouting at someone</strong><ul><li><strong>Pros:</strong><ul><li>Releases immediate tension</li><li>Can assert boundaries if controlled</li></ul></li><li><strong>Cons:</strong><ul><li>Can damage relationships</li><li>May escalate conflict</li></ul></li></ul></li><li><strong>Punching a wall or object</strong><ul><li><strong>Pros:</strong><ul><li>Provides a physical outlet</li><li>Might prevent harm to others</li></ul></li><li><strong>Cons:</strong><ul><li>Can cause self-injury</li><li>Doesn't resolve the issue</li></ul></li></ul></li></ul>
                <h3>Ways to handle it</h3>
                <p>Notice the emotion. Breathe slowly. Talk to someone. Move your body gently. Write down your feelings or rest if needed.</p>
                <h3>Related emotions and synonyms</h3>
                <p>Anger can be similar to or mixed with other feelings. Common related emotions may include sadness, fear, or confusion.</p>
          `,
            examples: ["", "", ""],
            organizations_fighting: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }],
            organizations_exhibiting: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }],
            learn_more: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }]
        }
    },
    {
        type: 'emotions',
        number: '2',
        abbreviation: 'H',
        full_name: 'Hate',
        additional_information: {
            extended_description: `
                <h3>What it is</h3>
                <p>Hate is a human emotion. It can feel strong and affect thoughts, body, and actions. Understanding it helps us respond better.</p>
                <h3>Why we feel it</h3>
                <p>We feel hate because of situations, thoughts, or memories. It is part of how we deal with life and other people.</p>
                <p>Sometimes, it comes from past events or our environment.</p>
                <h3>What it feels like in the body</h3>
                <p>Hate can cause body changes like faster heartbeats or tension. You may feel hot, cold, heavy, or restless.</p>
                <p>These reactions help you respond but can also feel uncomfortable.</p>
                <h3>How it helps</h3>
                <p>Hate can guide decisions and protect you. It tells you what matters and what needs attention.</p>
                <p>It can also build connection when shared with others.</p>
                <h3>How it harms</h3>
                <p>When too strong or ignored, hate can cause harm. It might lead to poor decisions or hurt relationships.</p>
                <p>It can also block growth and learning.</p>
                <h3>Common action urges</h3>
                <p>These are actions people often feel compelled to take when experiencing this emotion, along with their possible benefits and risks.</p>
                <h4>Healthy Action Urges:</h4><ul><li><strong>Engaging in self-reflection or journaling</strong><ul><li><strong>Pros:</strong><ul><li>Helps understand the source of hate</li><li>Encourages emotional awareness</li></ul></li><li><strong>Cons:</strong><ul><li>Might be emotionally taxing</li><li>Takes time to process fully</li></ul></li></ul></li><li><strong>Talking to someone with a different perspective</strong><ul><li><strong>Pros:</strong><ul><li>Can reduce bias</li><li>Opens dialogue and builds empathy</li></ul></li><li><strong>Cons:</strong><ul><li>May be uncomfortable</li><li>Could lead to confrontation</li></ul></li></ul></li></ul><h4>Unhealthy Action Urges:</h4><ul><li><strong>Spreading harmful stereotypes or misinformation</strong><ul><li><strong>Pros:</strong><ul><li>Feels like expressing loyalty or strength</li><li>May receive validation from peers</li></ul></li><li><strong>Cons:</strong><ul><li>Promotes division</li><li>Harms others and damages your credibility</li></ul></li></ul></li><li><strong>Cutting off people or communities entirely</strong><ul><li><strong>Pros:</strong><ul><li>Protects personal space</li><li>Limits immediate conflict</li></ul></li><li><strong>Cons:</strong><ul><li>Prevents understanding</li><li>Can lead to loneliness and isolation</li></ul></li></ul></li></ul>
                <h3>Ways to handle it</h3>
                <p>Notice the emotion. Breathe slowly. Talk to someone. Move your body gently. Write down your feelings or rest if needed.</p>
                <h3>Related emotions and synonyms</h3>
                <p>Hate can be similar to or mixed with other feelings. Common related emotions may include sadness, fear, or confusion.</p>
          `,
            examples: ["", "", ""],
            organizations_fighting: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }],
            organizations_exhibiting: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }],
            learn_more: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }]
        }
    },
    {
        type: 'emotions',
        number: '3',
        abbreviation: 'Fe',
        full_name: 'Fear',
        additional_information: {
            extended_description: `
                <h3>What it is</h3>
                <p>Fear is a human emotion. It can feel strong and affect thoughts, body, and actions. Understanding it helps us respond better.</p>
                <h3>Why we feel it</h3>
                <p>We feel fear because of situations, thoughts, or memories. It is part of how we deal with life and other people.</p>
                <p>Sometimes, it comes from past events or our environment.</p>
                <h3>What it feels like in the body</h3>
                <p>Fear can cause body changes like faster heartbeats or tension. You may feel hot, cold, heavy, or restless.</p>
                <p>These reactions help you respond but can also feel uncomfortable.</p>
                <h3>How it helps</h3>
                <p>Fear can guide decisions and protect you. It tells you what matters and what needs attention.</p>
                <p>It can also build connection when shared with others.</p>
                <h3>How it harms</h3>
                <p>When too strong or ignored, fear can cause harm. It might lead to poor decisions or hurt relationships.</p>
                <p>It can also block growth and learning.</p>
                <h3>Common action urges</h3>
                <p>These are actions people often feel compelled to take when experiencing this emotion, along with their possible benefits and risks.</p>
                <h4>Healthy Action Urges:</h4><ul><li><strong>Seeking safety or reassurance</strong><ul><li><strong>Pros:</strong><ul><li>Can calm the nervous system</li><li>Reinforces supportive relationships</li></ul></li><li><strong>Cons:</strong><ul><li>May foster dependence</li><li>Doesn’t address long-term solutions</li></ul></li></ul></li><li><strong>Planning or preparing for worst-case scenarios</strong><ul><li><strong>Pros:</strong><ul><li>Increases feelings of control</li><li>Reduces anxiety about unknowns</li></ul></li><li><strong>Cons:</strong><ul><li>Can become obsessive</li><li>May cause unnecessary stress</li></ul></li></ul></li></ul><h4>Unhealthy Action Urges:</h4><ul><li><strong>Avoiding all risk or new experiences</strong><ul><li><strong>Pros:</strong><ul><li>Reduces exposure to potential harm</li><li>Feels safer in the short term</li></ul></li><li><strong>Cons:</strong><ul><li>Misses opportunities for growth</li><li>Reinforces anxiety</li></ul></li></ul></li><li><strong>Freezing or panicking</strong><ul><li><strong>Pros:</strong><ul><li>Buys time to assess danger</li><li>May be a protective reflex</li></ul></li><li><strong>Cons:</strong><ul><li>Hinders decision-making</li><li>Can intensify emotional distress</li></ul></li></ul></li></ul>
                <h3>Ways to handle it</h3>
                <p>Notice the emotion. Breathe slowly. Talk to someone. Move your body gently. Write down your feelings or rest if needed.</p>
                <h3>Related emotions and synonyms</h3>
                <p>Fear can be similar to or mixed with other feelings. Common related emotions may include sadness, fear, or confusion.</p>
          `,
            examples: ["", "", ""],
            organizations_fighting: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }],
            organizations_exhibiting: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }],
            learn_more: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }]
        }
    },
    {
        type: 'emotions',
        number: '4',
        abbreviation: 'Co',
        full_name: 'Contempt',
        additional_information: {
            extended_description: `
                <h3>What it is</h3>
                <p>Contempt is a human emotion. It can feel strong and affect thoughts, body, and actions. Understanding it helps us respond better.</p>
                <h3>Why we feel it</h3>
                <p>We feel contempt because of situations, thoughts, or memories. It is part of how we deal with life and other people.</p>
                <p>Sometimes, it comes from past events or our environment.</p>
                <h3>What it feels like in the body</h3>
                <p>Contempt can cause body changes like faster heartbeats or tension. You may feel hot, cold, heavy, or restless.</p>
                <p>These reactions help you respond but can also feel uncomfortable.</p>
                <h3>How it helps</h3>
                <p>Contempt can guide decisions and protect you. It tells you what matters and what needs attention.</p>
                <p>It can also build connection when shared with others.</p>
                <h3>How it harms</h3>
                <p>When too strong or ignored, contempt can cause harm. It might lead to poor decisions or hurt relationships.</p>
                <p>It can also block growth and learning.</p>
                <h3>Common action urges</h3>
                <p>These are actions people often feel compelled to take when experiencing this emotion, along with their possible benefits and risks.</p>
                <h4>Healthy Action Urges:</h4><ul><li><strong>Expressing boundaries respectfully</strong><ul><li><strong>Pros:</strong><ul><li>Preserves self-respect</li><li>Promotes assertive communication</li></ul></li><li><strong>Cons:</strong><ul><li>May be perceived as cold</li><li>Takes effort to communicate tactfully</li></ul></li></ul></li><li><strong>Seeking understanding of the other person</strong><ul><li><strong>Pros:</strong><ul><li>Builds empathy</li><li>Can defuse conflict</li></ul></li><li><strong>Cons:</strong><ul><li>Requires vulnerability</li><li>May not always be reciprocated</li></ul></li></ul></li></ul><h4>Unhealthy Action Urges:</h4><ul><li><strong>Mocking or belittling others</strong><ul><li><strong>Pros:</strong><ul><li>Feels powerful or witty</li><li>Establishes dominance in group settings</li></ul></li><li><strong>Cons:</strong><ul><li>Damages relationships</li><li>Creates hostile environments</li></ul></li></ul></li><li><strong>Ignoring or dismissing someone's input</strong><ul><li><strong>Pros:</strong><ul><li>Avoids emotional labor</li><li>Maintains control of the conversation</li></ul></li><li><strong>Cons:</strong><ul><li>Stifles collaboration</li><li>Breeds resentment</li></ul></li></ul></li></ul>
                <h3>Ways to handle it</h3>
                <p>Notice the emotion. Breathe slowly. Talk to someone. Move your body gently. Write down your feelings or rest if needed.</p>
                <h3>Related emotions and synonyms</h3>
                <p>Contempt can be similar to or mixed with other feelings. Common related emotions may include sadness, fear, or confusion.</p>
          `,
            examples: ["", "", ""],
            organizations_fighting: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }],
            organizations_exhibiting: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }],
            learn_more: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }]
        }
    },
    {
        type: 'emotions',
        number: '5',
        abbreviation: 'Dg',
        full_name: 'Disgust',
        additional_information: {
            extended_description: `
                <h3>What it is</h3>
                <p>Disgust is a human emotion. It can feel strong and affect thoughts, body, and actions. Understanding it helps us respond better.</p>
                <h3>Why we feel it</h3>
                <p>We feel disgust because of situations, thoughts, or memories. It is part of how we deal with life and other people.</p>
                <p>Sometimes, it comes from past events or our environment.</p>
                <h3>What it feels like in the body</h3>
                <p>Disgust can cause body changes like faster heartbeats or tension. You may feel hot, cold, heavy, or restless.</p>
                <p>These reactions help you respond but can also feel uncomfortable.</p>
                <h3>How it helps</h3>
                <p>Disgust can guide decisions and protect you. It tells you what matters and what needs attention.</p>
                <p>It can also build connection when shared with others.</p>
                <h3>How it harms</h3>
                <p>When too strong or ignored, disgust can cause harm. It might lead to poor decisions or hurt relationships.</p>
                <p>It can also block growth and learning.</p>
                <h3>Common action urges</h3>
                <p>These are actions people often feel compelled to take when experiencing this emotion, along with their possible benefits and risks.</p>
                <h4>Healthy Action Urges:</h4><ul><li><strong>Distancing from offensive stimuli</strong><ul><li><strong>Pros:</strong><ul><li>Protects from harm or disease</li><li>Respects personal boundaries</li></ul></li><li><strong>Cons:</strong><ul><li>May avoid needed engagement</li><li>Could lead to prejudice if misapplied</li></ul></li></ul></li><li><strong>Cleaning or organizing</strong><ul><li><strong>Pros:</strong><ul><li>Creates a sense of control</li><li>Improves hygiene and comfort</li></ul></li><li><strong>Cons:</strong><ul><li>Can become compulsive</li><li>May reinforce avoidance</li></ul></li></ul></li></ul><h4>Unhealthy Action Urges:</h4><ul><li><strong>Publicly shaming or humiliating others</strong><ul><li><strong>Pros:</strong><ul><li>Draws attention to inappropriate behavior</li><li>Satisfies moral outrage</li></ul></li><li><strong>Cons:</strong><ul><li>Harms others unnecessarily</li><li>Often escalates social tension</li></ul></li></ul></li><li><strong>Complete avoidance of certain groups or topics</strong><ul><li><strong>Pros:</strong><ul><li>Reduces discomfort</li><li>Can feel safe</li></ul></li><li><strong>Cons:</strong><ul><li>Fosters ignorance or bias</li><li>Hinders learning and connection</li></ul></li></ul></li></ul>
                <h3>Ways to handle it</h3>
                <p>Notice the emotion. Breathe slowly. Talk to someone. Move your body gently. Write down your feelings or rest if needed.</p>
                <h3>Related emotions and synonyms</h3>
                <p>Disgust can be similar to or mixed with other feelings. Common related emotions may include sadness, fear, or confusion.</p>
          `,
            examples: ["", "", ""],
            organizations_fighting: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }],
            organizations_exhibiting: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }],
            learn_more: [{ "url": "", "display_name": "" }, { "url": "", "display_name": "" }]
        }
    },
    {
        type: 'killing',
        number: '6',
        abbreviation: 'Su',
        full_name: 'Suicide',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'killing',
        number: '7',
        abbreviation: 'Ge',
        full_name: 'Genocide',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'killing',
        number: '8',
        abbreviation: 'In',
        full_name: 'Infanticide',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'killing',
        number: '9',
        abbreviation: 'Ly',
        full_name: 'Lynching',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'killing',
        number: '10',
        abbreviation: 'Wa',
        full_name: 'War',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'isms',
        number: '11',
        abbreviation: 'Se',
        full_name: 'Anti-Semitism',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'isms',
        number: '12',
        abbreviation: 'Ra',
        full_name: 'Racism',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'isms',
        number: '13',
        abbreviation: 'Sx',
        full_name: 'Sexism',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'isms',
        number: '14',
        abbreviation: 'Cl',
        full_name: 'Classism',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'isms',
        number: '15',
        abbreviation: 'Ag',
        full_name: 'Ageism',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'isms',
        number: '16',
        abbreviation: 'Ab',
        full_name: 'Ableism',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'isms',
        number: '17',
        abbreviation: 'Au',
        full_name: 'Audism',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'phobias',
        number: '18',
        abbreviation: 'Xe',
        full_name: 'Xenophobia',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'phobias',
        number: '19',
        abbreviation: 'Ho',
        full_name: 'Homophobia',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'phobias',
        number: '20',
        abbreviation: 'Is',
        full_name: 'Islamophobia',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'phobias',
        number: '21',
        abbreviation: 'Ws',
        full_name: 'White Supremacy',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'phobias',
        number: '22',
        abbreviation: 'Nz',
        full_name: 'Neo-Nazism',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'phobias',
        number: '23',
        abbreviation: 'Hd',
        full_name: 'Holocaust Denial',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'cycles',
        number: '24',
        abbreviation: 'St',
        full_name: 'Stereotype',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'cycles',
        number: '25',
        abbreviation: 'Pj',
        full_name: 'Prejudice',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'cycles',
        number: '26',
        abbreviation: 'Di',
        full_name: 'Discrimination',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'cycles',
        number: '27',
        abbreviation: 'Op',
        full_name: 'Oppression',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'cycles',
        number: '28',
        abbreviation: 'Io',
        full_name: 'Internalized Oppression',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'cycles',
        number: '29',
        abbreviation: 'Rg',
        full_name: 'Repressive Government',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'governments',
        number: '30',
        abbreviation: 'Fm',
        full_name: 'Fascism',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'governments',
        number: '31',
        abbreviation: 'Nm',
        full_name: 'Nazism',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'governments',
        number: '32',
        abbreviation: 'Cm',
        full_name: 'Communism',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'governments',
        number: '33',
        abbreviation: 'Nl',
        full_name: 'Nationalism',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'governments',
        number: '34',
        abbreviation: 'Tm',
        full_name: 'Totalitarianism',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'governments',
        number: '35',
        abbreviation: 'Ay',
        full_name: 'Autocracy',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'governments',
        number: '36',
        abbreviation: 'Oy',
        full_name: 'Oligarchy',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'dictators',
        number: '37',
        abbreviation: 'AH',
        full_name: 'Adolf Hitler',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'dictators',
        number: '38',
        abbreviation: 'JS',
        full_name: 'Joseph Stalin',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'dictators',
        number: '39',
        abbreviation: 'BM',
        full_name: 'Benito Mussolini',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'dictators',
        number: '40',
        abbreviation: 'MZ',
        full_name: 'Mao Zedong',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'dictators',
        number: '41',
        abbreviation: 'KJi',
        full_name: 'Kim Jong-il',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'dictators',
        number: '42',
        abbreviation: 'PP',
        full_name: 'Pol Pot',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'dictators',
        number: '43',
        abbreviation: 'SH',
        full_name: 'Saddam Hussein',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'dictators',
        number: '44',
        abbreviation: 'RM',
        full_name: 'Robert Mugabe',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'practices',
        number: '45',
        abbreviation: 'To',
        full_name: 'Torture',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'practices',
        number: '46',
        abbreviation: 'Sl',
        full_name: 'Slavery',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'practices',
        number: '47',
        abbreviation: 'Pg',
        full_name: 'Propaganda',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'practices',
        number: '48',
        abbreviation: 'Pe',
        full_name: 'Persecution',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'practices',
        number: '49',
        abbreviation: 'Pl',
        full_name: 'Plundering',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'practices',
        number: '50',
        abbreviation: 'Te',
        full_name: 'Terror',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'practices',
        number: '51',
        abbreviation: 'Pb',
        full_name: 'Police Brutality',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'practices',
        number: '52',
        abbreviation: 'Hr',
        full_name: 'Human Rights Violations',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'practices',
        number: '53',
        abbreviation: 'Im',
        full_name: 'Imprisonment',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'practices',
        number: '54',
        abbreviation: 'Si',
        full_name: 'Spanish Inquisition',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'practices',
        number: '55',
        abbreviation: 'Po',
        full_name: 'Pogrom',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'practices',
        number: '56',
        abbreviation: 'Ht',
        full_name: 'Holocaust',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'practices',
        number: '57',
        abbreviation: 'Op',
        full_name: 'Occupation',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'practices',
        number: '58',
        abbreviation: 'Ap',
        full_name: 'Apartheid',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'groups',
        number: '59',
        abbreviation: 'KKK',
        full_name: 'Ku Klux Klan',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'groups',
        number: '60',
        abbreviation: 'WAR',
        full_name: 'White Aryan Resistance',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'groups',
        number: '61',
        abbreviation: 'WN',
        full_name: 'White Nationalist',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'groups',
        number: '62',
        abbreviation: 'RS',
        full_name: 'Racist Skinhead',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'groups',
        number: '63',
        abbreviation: 'NC',
        full_name: 'Neo-Confederate',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'groups',
        number: '64',
        abbreviation: 'BS',
        full_name: 'Black Separatist',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'groups',
        number: '65',
        abbreviation: 'WBC',
        full_name: 'Westboro Baptist Church',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'groups',
        number: '66',
        abbreviation: 'FWI',
        full_name: 'Family Watch International',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '67',
        abbreviation: 'Ck',
        full_name: 'Chink',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '68',
        abbreviation: 'Dy',
        full_name: 'Dummy',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '69',
        abbreviation: 'Fg',
        full_name: 'Faggot',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '70',
        abbreviation: 'Gp',
        full_name: 'Gimp',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '71',
        abbreviation: 'Go',
        full_name: 'Gringo',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '72',
        abbreviation: 'Ki',
        full_name: 'Kike',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '73',
        abbreviation: 'Mu',
        full_name: 'Mulatto',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '74',
        abbreviation: 'Ng',
        full_name: 'Nigger',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '75',
        abbreviation: 'Rn',
        full_name: 'Redneck',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '76',
        abbreviation: 'Rd',
        full_name: 'Retard',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '77',
        abbreviation: 'Sv',
        full_name: 'Savage',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '78',
        abbreviation: 'Tr',
        full_name: 'Terrorist',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '79',
        abbreviation: 'Tg',
        full_name: 'Thug',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '80',
        abbreviation: 'Tw',
        full_name: 'Towel Head',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '81',
        abbreviation: 'Tt',
        full_name: 'Trailer Trash',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'slurs',
        number: '82',
        abbreviation: 'Wb',
        full_name: 'Wetback',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'people',
        number: '83',
        abbreviation: 'AlQ',
        full_name: 'Al-Qaeda',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'people',
        number: '84',
        abbreviation: 'BA',
        full_name: 'Bashar al-Assad',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'people',
        number: '85',
        abbreviation: 'KJu',
        full_name: 'Kim Jong-un',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'people',
        number: '86',
        abbreviation: 'DT',
        full_name: 'Donald Trump',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'people',
        number: '87',
        abbreviation: 'VP',
        full_name: 'Vladimir Putin',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'people',
        number: '88',
        abbreviation: 'BH',
        full_name: 'Boko Haram',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'people',
        number: '89',
        abbreviation: 'ISIS',
        full_name: 'Islamic State of Iraq and the Levant',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '90',
        abbreviation: 'Hp',
        full_name: 'Hope',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '91',
        abbreviation: 'Lv',
        full_name: 'Love',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '92',
        abbreviation: 'Ju',
        full_name: 'Justice',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '93',
        abbreviation: 'Ac',
        full_name: 'Acceptance',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '94',
        abbreviation: 'Ci',
        full_name: 'Civility',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '95',
        abbreviation: 'Ch',
        full_name: 'Charity',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '96',
        abbreviation: 'Cm',
        full_name: 'Communication',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '97',
        abbreviation: 'Ed',
        full_name: 'Education',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '98',
        abbreviation: 'Eq',
        full_name: 'Equality',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '99',
        abbreviation: 'RH',
        full_name: 'Remembering History',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '100',
        abbreviation: 'Fa',
        full_name: 'Faith',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '101',
        abbreviation: 'Fo',
        full_name: 'Fortitude',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '102',
        abbreviation: 'Pd',
        full_name: 'Prudence',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '103',
        abbreviation: 'Re',
        full_name: 'Respect',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '104',
        abbreviation: 'Tp',
        full_name: 'Temperance',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    },
    {
        type: 'strategies',
        number: '105',
        abbreviation: 'Un',
        full_name: 'Understanding',
        additional_information: {
            extended_description: '',
            examples: ['', '', ''],
            organizations_fighting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            organizations_exhibiting: [{ url: '', display_name: '' }, { url: '', display_name: '' }],
            learn_more: [{ url: '', display_name: '' }, { url: '', display_name: '' }]
        }
    }
];

export default function findPeriodicElementByNumber(number: string): TableElement {
    return periodicTableElements[Number(number) - 1];
}