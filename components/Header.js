import { Grid, Button, Box, ButtonGroup, Heading, Text, Link } from "@chakra-ui/react"
import { useAuth } from '../contexts/auth'


export default function Header(props)
{
    const { user, login, logout } = useAuth();

    function homeClickHandler(event)
    {
        event.preventDefault();
        window.location = "/Upload";
    }
    function profileClickHandler(event)
    {
        event.preventDefault();
        window.location = "/Profile";
    }
    function aboutUsClickHandler(event)
    {
        event.preventDefault();
        window.location = "/About_us";
    }
    function logoutHandler(event)
    {
        event.preventDefault();
        user.logout();

        //note: check if this works once login is working
    }

    return (
        <Grid maxW="104rem" templateColumns="1fr 1fr 1fr" backgroundColor="rgb(51 65 85)"
            alignItems="center">
            <Heading mb={10} justifyContent="left" margin=".5rem 0rem" padding="0rem 1rem"> 
                <Link href="/" textColor="rgb(148 163 184)">
                    Iro Iro
                </Link>
            </Heading>
            <Text textColor="rgb(148 163 184)" fontSize="x-large" fontWeight="bold" align="center" margin=".5rem 0rem" padding="0rem 1rem">{props.pageName}
            </Text>
            <Box display="flex" margin="0rem 0.5rem" justifyContent="right">
                <ButtonGroup spacing="1" alignContent="right">
                    <Button bg="d6ccc2" size='xs' borderRadius="5" margin=".5rem .1rem" padding="6" textColor="rgb(148 163 184)"
                        onClick={homeClickHandler}>Upload</Button>
                    <Button bg="d6ccc2" size='xs' borderRadius="5" margin=".5rem .1rem" padding="6" textColor="rgb(148 163 184)"
                        onClick={profileClickHandler}>
                        Profile</Button>
                    <Button bg="d6ccc2" size='xs' borderRadius="5" margin=".5rem .1rem" padding="6" textColor="rgb(148 163 184)"
                        onClick={aboutUsClickHandler}>About Us</Button>
                    {user && <Button bg="d6ccc2" size='xs' borderRadius="5" margin=".5rem .1rem" padding="6" textColor="rgb(148 163 184)"
                        onClick={logoutHandler}>Logout</Button>}
                </ButtonGroup>
            </Box>
        </Grid>
    )
}