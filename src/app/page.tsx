"use client"
import { Flex, Heading, Input, Button } from '@chakra-ui/react'
import Image from 'next/image'
import { useColorMode } from '@chakra-ui/react'

export default function Home() {

  return (
    <Flex height={'100vh'} alignItems={'center'} justifyContent={'center'}>
      <Flex direction={'column'} background="gray.100" padding={12} rounded={6}>
        <Flex align={"center"} justify={"center"}>
          <Heading mb={6}> Log In</Heading>
        </Flex>
        <Input placeholder="sample@sample.com" variant="filled" mb={3} type="email" />
        <Input placeholder="*********" variant="filled" mb={6} type="password" />
        <Button mb={6} colorScheme="teal" type="submit">Log In</Button>
        <Button mb={6} colorScheme="teal" type="submit">Sign Up</Button>
      </Flex>
    </Flex>
  )
}
