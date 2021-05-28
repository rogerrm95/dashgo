import Head from 'next/head'
import { Flex, Button, FormLabel, FormControl, Stack, Text } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

// YUP - Validação de Formulários //
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// Componente //
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string,
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail requerido").email('E-mail inválido'),
  password: yup.string().required("Senha obrigatória").min(3, 'Tamanho mínimo: 3')
})

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values)
  }

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
          flexDir='column'
          onSubmit={handleSubmit(handleSignIn)}>

          <Stack spacing='4'>
            <Input
              name='email'
              label='E-mail'
              type='email'
              error={formState.errors?.email}
              {...register('email')} />

            <Input
              name='password'
              label='Senha'
              type='password'
              error={formState.errors?.password}
              {...register('password')} />
          </Stack>

          <Button type='submit' mt='6' colorScheme='pink' size='lg'>
            Entrar
          </Button>

        </Flex>
      </Flex>
    </>
  )
}
