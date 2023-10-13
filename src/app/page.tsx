"use client"
import { Flex, Heading, Input, Button } from '@chakra-ui/react'
import Image from 'next/image'
import { useColorMode } from '@chakra-ui/react'

export default function Home() {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
      <Flex direction={'column'} background="gray.100" padding={12} rounded={6}>
        <Heading mb={6}> Log In</Heading>
        <Input placeholder="sample@sample.com" variant="filled" mb={3} type="email" />
        <Input placeholder="*********" variant="filled" mb={6} type="password" />
        <Button mb={6} colorScheme="teal" type="submit">Log In</Button>
        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  )
}
