import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/provider'
import { Image } from '@chakra-ui/image'
export default function Bio(props)
{
    return (
        <ChakraProvider>
            <Flex padding="1em" margin="1em" borderRadius="2em" backgroundColor="darkgrey" width="300px" flexDirection="column" alignItems="center">
                <Image src={props.member.PictureUrl} alt={props.member.Name} maxWidth="200px"
                    borderRadius="100px" />
                <Heading fontSize="3xl">
                    {props.member.Name}<br></br>
                </Heading>
                <Flex flexDirection="row" columnGap="1em">
                    <Link href={props.member.LinkedIn} fontSize="x-small">LinkedIn</Link>
                    <Text fontSize="x-small">|</Text>
                    <Link href={props.member.GitHub} fontSize="x-small">GitHub</Link>
                </Flex>
                <Text noOfLines={5} fontSize='x-small'>
                    {props.member.Quote}
                </Text>
            </Flex>
        </ChakraProvider>
    )
}

