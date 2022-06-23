import Header from '../components/Header'
import { Center, ChakraProvider, Flex, Image, Link } from "@chakra-ui/react";
import Bio from '../components/bio'

export default function About_us()
{
    let members = [
        {
            'Name': 'Ben Carter',
            'Quote': 'Loves me a Samosa',
            'PictureUrl': 'https://media-exp1.licdn.com/dms/image/D5635AQG7powsnoue0Q/profile-framedphoto-shrink_400_400/0/1655402640989?e=1656619200&v=beta&t=8dzkfm6D05FNehsBUiNc7JA6uYsBuT9zJxa6lz5dTek',
            'LinkedIn': 'https://www.linkedin.com/in/benjamin-carter-dev/',
            'GitHub': 'https://github.com/MotoBenny'
        },
        {
            'Name': 'Katrina Hill',
            'Quote': 'Universal Afro',
            'PictureUrl': 'https://media-exp1.licdn.com/dms/image/C5603AQED-6CknbDSUQ/profile-displayphoto-shrink_800_800/0/1644105376584?e=1661385600&v=beta&t=3moz5MvL9x-5OdZCu_k4gDofkO3nk1Z4U7-tXxhiE8g',
            'LinkedIn': 'https://www.linkedin.com/in/katrina-l-hill/',
            'GitHub': 'https://github.com/katrina-l-hill'
        },
        {
            'Name': 'Bishal Khanal',
            'Quote': 'Born at the foot of Everest',
            'PictureUrl': 'https://media-exp1.licdn.com/dms/image/C5603AQFpQEqAL__z9A/profile-displayphoto-shrink_400_400/0/1538070916520?e=1661385600&v=beta&t=eXTkUYApfHXfP6FjQ6JMabwl7Z3_-m0IqLOpSXhbPf8',
            'LinkedIn': 'https://www.linkedin.com/in/bishal-khanal/',
            'GitHub': 'https://github.com/bkhanal4351'
        },
        {
            'Name': 'Matt Rangel',
            'Quote': 'Salsa King(the dance and the food)',
            'PictureUrl': 'https://media-exp1.licdn.com/dms/image/D5635AQHsqzHDqiKdcw/profile-framedphoto-shrink_800_800/0/1648244707220?e=1656619200&v=beta&t=_tK-gOCSQ9ZnvolsWdPD7gWPVbvG5oFmBt1riTbhKfk',
            'LinkedIn': 'https://www.linkedin.com/in/matthew-rangel/',
            'GitHub': 'https://github.com/rangelMatt'
        },
        {
            'Name': 'Roger Wells',
            'Quote': 'Astro Traveler',
            'PictureUrl': 'https://media-exp1.licdn.com/dms/image/C4E03AQGFoOgh51xhpA/profile-displayphoto-shrink_800_800/0/1653956079156?e=1661385600&v=beta&t=rBp8qtRGzaeSmtCNkkN6G05CtAi39Xqx7GeyjWMGN68',
            'LinkedIn': 'https://www.linkedin.com/in/roger-s-wells/',
            'GitHub': 'https://github.com/rsw359'
        },
    ];

    return (
        <ChakraProvider>
            <Header pageName="About Us" />
            <Center bg="grey">
                <Flex flexWrap="wrap" justifyContent="center">
                    {members.map((item, index) =>
                    {
                        return <Bio key={index} member={item} />
                    })}
                </Flex>
            </Center>
        </ChakraProvider>
    )
}

