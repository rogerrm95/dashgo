import Head from 'next/head'
import Image from 'next/image'

import { Input } from '../components/Form/Input'

import { Flex, Button, FormLabel, FormControl, Stack } from '@chakra-ui/react'

export default function SignIn() {
  return (

    <>
      <Head>
        <title>Login | dashgo</title>
      </Head>

      <Flex
        h='100vh'
        w='100vw'
        align='center'
        justify='center'>

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
