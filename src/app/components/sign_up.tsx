"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Flex, Heading, Input, Button } from '@chakra-ui/react'

export const SignUp = () => {
    const [useremail, setUseremail] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const [userinfo, setUserinfo] = useState(null);
    const Router = useRouter();

    const userinfo = {
        useremail: useremail,
        userpassword: userpassword,
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        if (useremail === "" || userpassword === "") {
            alert("No username or password entered");
            return;
        }
    }


    return (
    <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
        <Flex direction={'column'} background="gray.100" padding={12} rounded={6}>
            <Flex align={"center"} justify={"center"}>
                <Heading mb={6}> Create account</Heading>
            </Flex>
                <Input placeholder="sample@sample.com" variant="filled" mb={3} type="email"/>
                <Input placeholder="" variant="filled" mb={6} type="password" />
                <Input placeholder="" variant="filled" mb={6} type="password" />
            <Button mb={6} colorScheme="teal" onClick={() => Router.push('/todo')}>
                Sign Up
            </Button>
        </Flex>
    </Flex>
    )
}

