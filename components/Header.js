import { Grid, Button, Box, ButtonGroup, Heading, Text } from "@chakra-ui/react"

export default function Header(props)
{
    function homeClickHandler(event)
    {
        event.preventDefault();
        window.location = "/Upload";
    }
    function profileClickHandler(event)
    {
        event.preventDefault();
        window.location = "/profile";
    }
    function aboutUsClickHandler(event)
    {
        event.preventDefault();
        window.location = "/about_us";
    }

    return (
        <Grid maxW="104rem" templateColumns="1fr 1fr 1fr" backgroundColor="white"
            alignItems="center">
            <Heading mb={10} justifyContent="left" margin=".5rem 0rem" padding="0rem 1rem">Iro Iro</Heading>
            <Text fontSize="x-large" fontWeight="bold" align="center" margin=".5rem 0rem" padding="0rem 1rem">{props.pageName}
            </Text>
            <Box display="flex" margin="0rem 0.5rem" justifyContent="right">
                <ButtonGroup spacing="1" alignContent="right">
                    <Button bg="d6ccc2" size='xs' borderRadius="5" margin=".5rem .1rem" padding="6"
                        onClick={homeClickHandler}>Upload</Button>
                    <Button bg="d6ccc2" size='xs' borderRadius="5" margin=".5rem .1rem" padding="6"
                        onClick={profileClickHandler}>
                        Profile</Button>
                    <Button bg="d6ccc2" size='xs' borderRadius="5" margin=".5rem .1rem" padding="6"
                        onClick={aboutUsClickHandler}>About Us</Button>
                </ButtonGroup>
            </Box>
        </Grid>
    )
}