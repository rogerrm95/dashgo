import Head from 'next/head'
import Image from 'next/image'

import { Input } from '../components/Form/Input'

import { Flex, Button, FormLabel, FormControl, Stack, Text } from '@chakra-ui/react'

export default function SignIn() {
  return (

    <>
      <Head>
        <title>Login | dashgo</title>
      </Head>

      <Flex
        h='100vh'
        w='100vw'
        direction='column'
        align='center'
        justify='center'>

        <Text mb='8' fontSize='6xl' fontWeight='bold'>
          dashgo<Text as='span' color='pink.500'>.</Text>
        </Text>

        <Flex
          as='form'
          w='100%'
          maxWidth={360}
          bg='gray.800'
          p="8"
          borderRadius={8}
          flexDir='column'>

          <Stack spacing='4'>
            <Input name='email' label='E-mail' type='email' />
            <Input name='password' label='Senha' type='password' />
          </Stack>


          <Button type='submit' mt='6' colorScheme='pink' size='lg'>
            Entrar
        </Button>
        </Flex>

      </Flex>

    </>
  )
}
