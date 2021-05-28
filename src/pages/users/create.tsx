import { Box, Button, Divider, Flex, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

// Validações //
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// Componentes //
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Heading } from "../../components/Heading";
import { Sidebar } from "../../components/Sidebar";

type CreateUserFormDate = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().min(2, 'Mínimo de 2 caracteres').required('Nome obrigatório'),
    email: yup.string().required("E-mail requerido").email('E-mail inválido'),
    password: yup.string().required("Senha obrigatória").min(6, 'Tamanho mínimo: 6'),
    confirmPassword: yup.string().oneOf([null, yup.ref('password')], 'Senhas não conferem')
})


export default function CreateUser() {

    const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(createUserFormSchema) })

    // Obs: async-await utilizado apenas para visualizar o efeito de loading durante o submit //
    const handleCreateUser: SubmitHandler<CreateUserFormDate> = async (values) => {
        const promisse = await new Promise(resolver => setTimeout(resolver, 5000))
        alert(values)
    }

    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box
                    flex='1'
                    borderRadius={8}
                    bg='gray.800'
                    p={['6', '8']}
                    as='form'
                    onSubmit={handleSubmit(handleCreateUser)}>

                    <Heading head='Novo usuário' />

                    <Divider my='6' borderColor='gray.700' />

                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input
                                name='name'
                                label='Nome Completo'
                                error={formState.errors.name}
                                {...register('name')} />
                            <Input
                                name='email'
                                label='E-mail'
                                type='email'
                                error={formState.errors.email}
                                {...register('email')} />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input
                                name='password'
                                label='Senha'
                                type='password'
                                error={formState.errors.password}
                                {...register('password')} />
                            <Input
                                name='confirmPassword'
                                label='Confirmação de senha'
                                type='password'
                                error={formState.errors.confirmPassword}
                                {...register('confirmPassword')} />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack>
                            <Link href='/users' passHref>
                                <Button colorScheme='whiteAlpha' as='a'>Cancelar</Button>
                            </Link>

                            <Button
                                type='submit'
                                colorScheme='pink'
                                isLoading={formState.isSubmitting}>
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
}