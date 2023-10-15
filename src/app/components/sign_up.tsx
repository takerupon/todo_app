"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Flex, Heading, Input, Button, Text, Stack } from '@chakra-ui/react'

export const SignUp = () => {
    const [useremail, setUseremail] = useState<string>('');
    const [userpassword, setUserpassword] = useState<string>('');
    const [repassword, setRepassword] = useState<string>(''); // set initial value to empty string
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
        } else if (userpassword !== repassword) {
            alert("Passwords do not match");
            return;
        } else {
            const olduserinfo = JSON.parse(localStorage.getItem("userinfo") || "[]"); // use empty array as default value if userinfo is null
            const newuserinfo = [...olduserinfo, userinfo];
            localStorage.setItem("userinfo", JSON.stringify(newuserinfo));
            alert("Account created");
            Router.push("/todo");
        }
    }
    return (
        <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
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
