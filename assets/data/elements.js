const periodicTableElements = [
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
    }
];

function findPeriodicElementByNumber(number) {
    return periodicTableElements.find(
        element => element.number === number
    );
}