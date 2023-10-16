"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
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
    const [useremail, setUseremail] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const [userinfo, setUserinfo] = useState(null);
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

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        if (useremail === "" || userpassword === "") {
            alert("メールアドレスまたはパスワードが入力されていません");
            return;
        }

        const isAuthenticated = await userinfo.some(
            (user:any) =>
            user.useremail === useremail && user.userpassword === userpassword
        );

        if (isAuthenticated) {
            alert("ログイン成功");
            Router.push("/home");
        } else {
            alert("ユーザーネームとパスワードが一致しません");
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

