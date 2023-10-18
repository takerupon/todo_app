"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react'
import {
    Flex,
    Heading,
    Input,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription, } from '@chakra-ui/react'

export const Login = () => {
    const [useremail, setUseremail] = useState<string>('');
    const [userpassword, setUserpassword] = useState<string>('');
    const [userinfo, setUserinfo] = useState(null);
    const [alertMessage, setAlertMessage] = useState<string>(''); // set initial value to empty string

    const Router = useRouter();

    useEffect(() => {
        getUserInfo();
        }, []);

    const getUserInfo = async () => {
        const userInfo = await localStorage.getItem("userInfo");
        if (userInfo) {
            setUserinfo(JSON.parse(userInfo));
        }
    };

    const {
        isOpen: isVisible,
        onClose,
        onOpen,
    } = useDisclosure({ defaultIsOpen: false })

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        if (useremail === "" || userpassword === "") {
            setAlertMessage('No email address or password entered');
            return;
        }

        const isAuthenticated = await userinfo.some(
            (user:any) =>
            user.useremail === useremail && user.userpassword === userpassword
        );

        if (isAuthenticated) {
            setAlertMessage('Login successful');
            Router.push("/todo");
        } else {
            setAlertMessage('Login failed');
        }
    };

    return (
    <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
        <Flex direction={'column'} background="gray.100" padding={12} rounded={6}>
            <Flex align={"center"} justify={"center"}>
                <Heading mb={6}> Log In</Heading>
            </Flex>
                <Input placeholder="sample@sample.com" variant="filled" mb={3} type="email" onChange={(e) => setUseremail}/>
                <Input placeholder="*********" variant="filled" mb={6} type="password" onChange={(e) => setUserpassword}/>
                <Button onClick={handleSubmit} mb={6} colorScheme="teal" type="submit">
                    Log In
                </Button>
            <Button mb={6} colorScheme="teal" onClick={() => Router.push('/create_account')}>
                Sign Up
            </Button>
        </Flex>
    </Flex>
    )
}

