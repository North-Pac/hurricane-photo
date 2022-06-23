import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../contexts/auth'
import Link from 'next/link'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box } from "@chakra-ui/react"
import { ChakraProvider, Heading } from "@chakra-ui/react";
import { Center } from '@chakra-ui/react'

export default function Profile()
{
    const { user, login, logout } = useAuth();
    return (
        <ChakraProvider>
            <Box>
                <>
                    <Header pageName="Profile" />
                    <Center bg="grey" color="white" padding={8} minH="80vh">
                    <Heading fontSize={30}>Coming Soon....</Heading>
                    </Center>
                </>
            </Box>
        </ChakraProvider>
    )
}

