import
    {
        Center,
        Text,
        Heading,
        VStack,
        Button,
        Input,
        HStack,
        Container,
        SimpleGrid,
        Box,
        Image,
        Spinner,
    } from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
//   import { upload } from "@testing-library/user-event/dist/upload";
//   import userEvent from '@testing-library/user-event'
import Link from 'next/link'
import LoginForm from '../components/LoginForm'
import { signOut } from "next-auth/react";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Upload()
{
    const [isSelected, setIsSelected] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [allPhotos, setAllPhotos] = useState({});
    const [uploadSuccessful, setUploadSuccessful] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    useEffect(() =>
    {
        fetch("http://127.0.0.1:8000/gallery")
            .then((response) => response.json())
            .then((data) =>
            {
                
                console.log(data);
                setAllPhotos(data);
            });
            
    }, [uploadSuccessful]);

    const onInputChange = (e) =>
    {
        console.log(e.target.files[0]);
        setIsSelected(true);
        setSelectedFile(e.target.files[0]);
    };
    const onButtonClick = (e) =>
    {
        console.log("Button clicked..");
        e.target.value = "";
    };

    const logoutHandler = () =>
    {
        signOut();
    };

    const onFileUpload = (e) =>
    {
        setShowSpinner(true);
        const formData = new FormData();
        formData.append("file", selectedFile, selectedFile.name);
        fetch("http://127.0.0.1:8000/photos", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) =>
            {
                console.log("Success posting!!");
                setUploadSuccessful(!uploadSuccessful);
                setShowSpinner(false);
            });
            console.log(allPhotos)
    };
    return (
        <ChakraProvider>
            <Header pageName="(色色)" color='white'></Header>
            <Center bg="grey" color="white" padding={8}>
                <VStack spacing={7}>
                    <Heading>Upload</Heading>
                    <p>
                        This tool will colorize any photo you upload. See your photos through an AI lens! 
                    </p>
                    {/* <Text>Your Photo Gallery</Text> */}
                    <HStack>
                        <input
                            type="file"
                            onChange={onInputChange}
                            onClick={onButtonClick}
                        ></input>
                        <Button
                            size="sm"
                            colorScheme="blue"
                            isDisabled={!isSelected}
                            onClick={onFileUpload}
                        >Upload Photo
                        </Button>
                        {showSpinner && (
                            <Center>
                                <Spinner size="xl" />
                            </Center>
                        )}
                    </HStack>
                    <Heading fontSize={30}>Photo Gallery</Heading>
                    <SimpleGrid columns={3} spacing={8}>
                        
                        {allPhotos.colorized_set &&
                            allPhotos.colorized_set.map((photo, index) =>
                            {
                                return ( 
                                <>
                                    <a href={photo}>
                                        <Image
                                            alt=""
                                            key={index}
                                            borderRadius={25}
                                            boxSize="300px"
                                            src={photo}
                                            fallbackSrc="https://via.placeholder.com/150"
                                            objectFit="cover"
                                        />
                                    </a>
                                </>
                                );
                            })}
                    </SimpleGrid>
                </VStack>
            </Center>
            <Footer />
        </ChakraProvider>
    );
}

export default Upload;