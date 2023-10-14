"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Flex, Heading, Input, Button } from '@chakra-ui/react'

export const Login = () => {
    const [useremail, setUseremail] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const [userinfo, setUserinfo] = useState(null);
    const Router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ useremail, userpassword }),
        });
        const json = await res.json();
        if (!res.ok) throw Error(json.message);
        setUserinfo(json.userinfo);
        Router.push('/todo');
    };

    return (
    <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
        <Flex direction={'column'} background="gray.100" padding={12} rounded={6}>
            <Flex align={"center"} justify={"center"}>
                <Heading mb={6}> Log In</Heading>
            </Flex>
            <form onSubmit={handleSubmit}>
                <Input placeholder="sample@sample.com" variant="filled" mb={3} type="email" onChange={(e) => setUseremail(e.target.value)} />
                <Input placeholder="*********" variant="filled" mb={6} type="password" onChange={(e) => setUserpassword(e.target.value)} />
                <Button mb={6} colorScheme="teal" type="submit">
                    Log In
                </Button>
            </form>
            <Button mb={6} colorScheme="teal" onClick={() => Router.push('/create_account')}>
                Sign Up
            </Button>
        </Flex>
    </Flex>
    )
}

