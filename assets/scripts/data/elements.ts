interface ElementLink {
    url : string;
    display_name : string;
}

interface AdditionalInformation {
    extended_description : string;
    examples : string[];
    organizations_fighting : ElementLink[];
    organizations_exhibiting : ElementLink[];
    learn_more : ElementLink[];
}

interface TableElement {
    type : string;
    number : string;
    abbreviation: string;
    full_name : string;
    additional_information : AdditionalInformation;
}

const periodicTableElements : TableElement[] = [
    {
        type : 'emotions',
        number : '1',
        abbreviation : 'A',
        full_name : 'Anger',
        additional_information : {
            extended_description : 'Anger is an emotion that means you are angry!',
            examples : [
                'I hate you!',
                'You underestimate my power!',
                'From my point of view the Jedi are evil!'
            ],
            organizations_fighting : [
                {url : 'https://www.aclu.com', display_name : 'Against Anger'},
                {url : 'https://www.aclu.com', display_name : 'Anger Let Go'}
            ],
            organizations_exhibiting : [
                {url : 'https://www.aclu.com', display_name : 'NRA'},
                {url : 'https://www.aclu.com', display_name : 'Military'}
            ],
            learn_more : [
                {url : 'https://www.aclu.com', display_name : 'Some Psychiatry Site'},
                {url : 'https://www.aclu.com', display_name : 'More stuff'}
            ]
        }
    },
    {
        type : 'emotions',
        number : '2',
        abbreviation : 'H',
        full_name : 'Hate',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'emotions',
        number : '3',
        abbreviation : 'Fe',
        full_name : 'Fear',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'emotions',
        number : '4',
        abbreviation : 'Co',
        full_name : 'Contempt',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'emotions',
        number : '5',
        abbreviation : 'Dg',
        full_name : 'Disgust',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'killing',
        number : '6',
        abbreviation : 'Su',
        full_name : 'Suicide',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'killing',
        number : '7',
        abbreviation : 'Ge',
        full_name : 'Genocide',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'killing',
        number : '8',
        abbreviation : 'In',
        full_name : 'Infanticide',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'killing',
        number : '9',
        abbreviation : 'Ly',
        full_name : 'Lynching',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'killing',
        number : '10',
        abbreviation : 'Wa',
        full_name : 'War',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'isms',
        number : '11',
        abbreviation : 'Se',
        full_name : 'Anti-Semitism',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'isms',
        number : '12',
        abbreviation : 'Ra',
        full_name : 'Racism',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'isms',
        number : '13',
        abbreviation : 'Se',
        full_name : 'Sexism',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'isms',
        number : '14',
        abbreviation : 'Cl',
        full_name : 'Classism',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'isms',
        number : '15',
        abbreviation : 'Ag',
        full_name : 'Ageism',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'isms',
        number : '16',
        abbreviation : 'Ab',
        full_name : 'Ableism',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'isms',
        number : '17',
        abbreviation : 'Au',
        full_name : 'Audism',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'phobias',
        number : '18',
        abbreviation : 'Xe',
        full_name : 'Xenophobia',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'phobias',
        number : '19',
        abbreviation : 'Ho',
        full_name : 'Homophobia',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'phobias',
        number : '20',
        abbreviation : 'Is',
        full_name : 'Islamophobia',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'phobias',
        number : '21',
        abbreviation : 'Ws',
        full_name : 'White Supremacy',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'phobias',
        number : '22',
        abbreviation : 'Nz',
        full_name : 'Neo-Nazism',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'phobias',
        number : '23',
        abbreviation : 'Hd',
        full_name : 'Holocaust Denial',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'cycles',
        number : '24',
        abbreviation : 'St',
        full_name : 'Stereotype',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'cycles',
        number : '25',
        abbreviation : 'Pj',
        full_name : 'Prejudice',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'cycles',
        number : '26',
        abbreviation : 'Di',
        full_name : 'Discrimination',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'cycles',
        number : '27',
        abbreviation : 'Op',
        full_name : 'Oppression',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'cycles',
        number : '28',
        abbreviation : 'Io',
        full_name : 'Internalized Oppression',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'cycles',
        number : '29',
        abbreviation : 'Rg',
        full_name : 'Repressive Government',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'governments',
        number : '30',
        abbreviation : 'Fm',
        full_name : 'Fascism',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'governments',
        number : '31',
        abbreviation : 'Nm',
        full_name : 'Nazism',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'governments',
        number : '32',
        abbreviation : 'Cm',
        full_name : 'Communism',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'governments',
        number : '33',
        abbreviation : 'Nl',
        full_name : 'Nationalism',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'governments',
        number : '34',
        abbreviation : 'Tm',
        full_name : 'Totalitarianism',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'governments',
        number : '35',
        abbreviation : 'Ay',
        full_name : 'Autocracy',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'governments',
        number : '36',
        abbreviation : 'Oy',
        full_name : 'Oligarchy',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'dictators',
        number : '37',
        abbreviation : 'AH',
        full_name : 'Adolf Hitler',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'dictators',
        number : '38',
        abbreviation : 'JS',
        full_name : 'Joseph Stalin',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'dictators',
        number : '39',
        abbreviation : 'BM',
        full_name : 'Benito Mussolini',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'dictators',
        number : '40',
        abbreviation : 'MZ',
        full_name : 'Mao Zedong',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'dictators',
        number : '41',
        abbreviation : 'KJi',
        full_name : 'Kim Jong-il',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'dictators',
        number : '42',
        abbreviation : 'PP',
        full_name : 'Pol Pot',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'dictators',
        number : '43',
        abbreviation : 'SH',
        full_name : 'Saddam Hussein',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'dictators',
        number : '44',
        abbreviation : 'RM',
        full_name : 'Robert Mugabe',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'practices',
        number : '45',
        abbreviation : 'To',
        full_name : 'Torture',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'practices',
        number : '46',
        abbreviation : 'Sl',
        full_name : 'Slavery',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'practices',
        number : '47',
        abbreviation : 'Pg',
        full_name : 'Propaganda',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'practices',
        number : '48',
        abbreviation : 'Pe',
        full_name : 'Persecution',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'practices',
        number : '49',
        abbreviation : 'Pl',
        full_name : 'Plundering',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'practices',
        number : '50',
        abbreviation : 'Te',
        full_name : 'Terror',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'practices',
        number : '51',
        abbreviation : 'Pb',
        full_name : 'Police Brutality',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'practices',
        number : '52',
        abbreviation : 'Hr',
        full_name : 'Human Rights Violations',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'practices',
        number : '53',
        abbreviation : 'Im',
        full_name : 'Imprisonment',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'practices',
        number : '54',
        abbreviation : 'Si',
        full_name : 'Spanish Inquisition',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'practices',
        number : '55',
        abbreviation : 'Po',
        full_name : 'Pogrom',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'practices',
        number : '56',
        abbreviation : 'Ht',
        full_name : 'Holocaust',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'practices',
        number : '57',
        abbreviation : 'Op',
        full_name : 'Occupation',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'practices',
        number : '58',
        abbreviation : 'Ap',
        full_name : 'Apartheid',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'groups',
        number : '59',
        abbreviation : 'KKK',
        full_name : 'Ku Klux Klan',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'groups',
        number : '60',
        abbreviation : 'WAR',
        full_name : 'White Aryan Resistance',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'groups',
        number : '61',
        abbreviation : 'WN',
        full_name : 'White Nationalist',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'groups',
        number : '62',
        abbreviation : 'RS',
        full_name : 'Racist Skinhead',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'groups',
        number : '63',
        abbreviation : 'NC',
        full_name : 'Neo-Confederate',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'groups',
        number : '64',
        abbreviation : 'BS',
        full_name : 'Black Separatist',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'groups',
        number : '65',
        abbreviation : 'WBC',
        full_name : 'Westboro Baptist Church',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'groups',
        number : '66',
        abbreviation : 'FWI',
        full_name : 'Family Watch International',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '67',
        abbreviation : 'Ck',
        full_name : 'Chink',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '68',
        abbreviation : 'Dy',
        full_name : 'Dummy',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '69',
        abbreviation : 'Fg',
        full_name : 'Faggot',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '70',
        abbreviation : 'Gp',
        full_name : 'Gimp',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '71',
        abbreviation : 'Go',
        full_name : 'Gringo',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '72',
        abbreviation : 'Ki',
        full_name : 'Kike',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '73',
        abbreviation : 'Mu',
        full_name : 'Mulatto',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '74',
        abbreviation : 'Ng',
        full_name : 'Nigger',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '75',
        abbreviation : 'Rn',
        full_name : 'Redneck',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '76',
        abbreviation : 'Rd',
        full_name : 'Retard',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '77',
        abbreviation : 'Sv',
        full_name : 'Savage',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '78',
        abbreviation : 'Tr',
        full_name : 'Terrorist',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '79',
        abbreviation : 'Tg',
        full_name : 'Thug',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '80',
        abbreviation : 'Tw',
        full_name : 'Towel Head',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '81',
        abbreviation : 'Tt',
        full_name : 'Trailer Trash',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'slurs',
        number : '82',
        abbreviation : 'Wb',
        full_name : 'Wetback',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'people',
        number : '83',
        abbreviation : 'AlQ',
        full_name : 'Al-Qaeda',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'people',
        number : '84',
        abbreviation : 'BA',
        full_name : 'Bashar al-Assad',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'people',
        number : '85',
        abbreviation : 'KJu',
        full_name : 'Kim Jong-un',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'people',
        number : '86',
        abbreviation : 'DT',
        full_name : 'Donald Trump',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'people',
        number : '87',
        abbreviation : 'VP',
        full_name : 'Vladimir Putin',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'people',
        number : '88',
        abbreviation : 'BH',
        full_name : 'Boko Haram',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'people',
        number : '89',
        abbreviation : 'ISIS',
        full_name : 'Islamic State of Iraq and the Levant',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '90',
        abbreviation : 'Hp',
        full_name : 'Hope',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '91',
        abbreviation : 'Lv',
        full_name : 'Love',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '92',
        abbreviation : 'Ju',
        full_name : 'Justice',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '93',
        abbreviation : 'Ac',
        full_name : 'Acceptance',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '94',
        abbreviation : 'Ci',
        full_name : 'Civility',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '95',
        abbreviation : 'Ch',
        full_name : 'Charity',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '96',
        abbreviation : 'Cm',
        full_name : 'Communication',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '97',
        abbreviation : 'Ed',
        full_name : 'Education',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '98',
        abbreviation : 'Eq',
        full_name : 'Equality',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '99',
        abbreviation : 'RH',
        full_name : 'Remembering History',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '100',
        abbreviation : 'Fa',
        full_name : 'Faith',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '101',
        abbreviation : 'Fo',
        full_name : 'Fortitude',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '102',
        abbreviation : 'Pd',
        full_name : 'Prudence',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '103',
        abbreviation : 'Re',
        full_name : 'Respect',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '104',
        abbreviation : 'Tp',
        full_name : 'Temperance',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    },
    {
        type : 'strategies',
        number : '105',
        abbreviation : 'Un',
        full_name : 'Understanding',
        additional_information : {
            extended_description : '',
            examples : ['', '', ''],
            organizations_fighting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            organizations_exhibiting : [{url : '', display_name : ''}, {url : '', display_name : ''}],
            learn_more : [{url : '', display_name : ''}, {url : '', display_name : ''}]
        }
    }
];

export default function findPeriodicElementByNumber(number : string): TableElement {
    return periodicTableElements.find(
        element => element.number === number
    );
}