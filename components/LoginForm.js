import { useState } from 'react'
import { Box, Flex, FormControl, FormLabel, Heading, Input, Button } from "@chakra-ui/react"
import { useAuth } from '../contexts/auth'

export default function LoginForm({ onSubmit })
{
    const { user, login, logout } = useAuth();
    const initialValues = {
        username: '',
        password: '',
    }

    const [values, setValues] = useState(initialValues);

    function submitHandler(event)
    {
        event.preventDefault();
        onSubmit(values.username, values.password);
        setValues(initialValues)
        // alert(`Email: ${values.email} & Password: ${values.password}`)
    }

    function inputChangeHandler(event)
    {

        let { name, value } = event.target;

        setValues({ ...values, [name]: value });
    }

    function loginHandler(event)
    {
        event.preventDefault();
        var name = document.getElementById('emailInput').value;
        var pw = document.getElementById('pwInput').value;
        user.login(name, pw);

        //note: figure out how this should actually be done with AuthProvider
    }

    
    return (
        <Flex width="full" align="center" justifyContent="center" margin="2rem 0rem">

            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg"
                backgroundColor="rgb(51 65 85)" border>

                <Box textAlign="center">

                    <Heading color="darkgrey">Login</Heading>

                </Box>
                <Box my={4} textAlign="left">

                    <form>
                        <FormControl>

                            <FormLabel color="darkgrey">Email</FormLabel>

                            <Input id="emailInput" type="email" placeholder="email@email.com" backgroundColor="white" color="darkgrey" />
                        </FormControl>

                        <FormControl mt={6}>

                            <FormLabel color="darkgrey">Password</FormLabel>
                            <Input id="pwInput" type="password" placeholder="**********" backgroundColor="white" color="darkgrey" />
                        </FormControl>
                        
                        <Button width="full" mt={4} type="submit" backgroundColor="rgb(148 163 184)"
                            onClick={loginHandler}>
                            Sign In
                        </Button>
                        
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}
