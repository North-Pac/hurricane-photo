import { Button, Stack, Box, ButtonGroup } from "@chakra-ui/react"


export default function Header()
{
    return (
        <header>
            <h1>Iro Iro</h1>
            <Stack spacing={4} direction='row' align='right'>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    width='100%'
                    py={12}
                    // bgImage="url('https://bit.ly/2Z4KKcF')"
                    bgPosition='center'
                    bgRepeat='no-repeat'
                    mb={2}
                >
                    <ButtonGroup gap='4'>
                        {/* <Button colorScheme='whiteAlpha'>Image Upload</Button>
                        <Button colorScheme='blackAlpha'>BlackAlpha</Button> */}
                    </ButtonGroup>
                </Box>
                <Button colorScheme='teal' size='xs'>
                    Gallery
                </Button>
                <Button colorScheme='teal' size='xs'>
                    My Page
                </Button>
                <Button colorScheme='teal' size='xs'>
                    Log out
                </Button>
            </Stack>
        </header>
    )
}