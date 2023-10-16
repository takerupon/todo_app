"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
    Flex,
    Heading,
    Input,
    Button,
    Box,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,}
    from '@chakra-ui/react'

export const SignUp = () => {
    const [useremail, setUseremail] = useState<string>('');
    const [userpassword, setUserpassword] = useState<string>('');
    const [repassword, setRepassword] = useState<string>(''); // set initial value to empty string
    const [errorMessage, setErrorMessage] = useState<string>(''); // set initial value to empty string
    const Router = useRouter();

    const userinfo = {
        useremail: useremail,
        userpassword: userpassword,
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        if (useremail === "" || userpassword === "") {
            setErrorMessage('No email address or password entered');
        } else if (userpassword !== repassword) {
            setErrorMessage('Passwords do not match');
        } else {
            const olduserinfo = JSON.parse(localStorage.getItem("userinfo") || "[]");
            const newuserinfo = [...olduserinfo, { useremail, userpassword }];
            localStorage.setItem("userinfo", JSON.stringify(newuserinfo));
            alert("Account created");
            Router.push("/todo");
        }
    }

    return (
        <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
            {errorMessage && (
                <Alert status="error">
                    <AlertIcon />
                    <AlertTitle mr={2}>Error!</AlertTitle>
                    <AlertDescription>{errorMessage}</AlertDescription>
                    <CloseButton position="absolute" right="8px" top="8px" />
                </Alert>
            )}
            <Flex direction={'column'} background="gray.100" padding={12} rounded={6}>
                <Flex align={"center"} justify={"center"}>
                    <Heading mb={6}> Create account</Heading>
                </Flex>
                    <Input borderColor='gray.400' placeholder="email address" variant="filled" mb={3} type="email" value={useremail} onChange={(e) => setUseremail(e.target.value)} />
                    <Input borderColor="gray.400" placeholder="password" variant="filled" mb={3} type="password" value={userpassword} onChange={(e) => setUserpassword(e.target.value)} />
                    <Input borderColor="gray.400" placeholder="re-enter your password" variant="filled" mb={3} type="password" value={repassword} onChange={(e) => setRepassword(e.target.value)} />
                    <Button mt={3} mb={6} colorScheme="teal" onClick={handleSubmit}>
                        Sign Up
                    </Button>
            </Flex>
        </Flex>
    )
}
