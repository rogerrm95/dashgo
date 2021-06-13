import { useState } from "react";
import NextLink from "next/link";
import {
    Box,
    Button,
    Flex,
    Icon,
    Link,
    Heading,
    Spinner,
    Table,
    Thead,
    Tr,
    Th,
    Checkbox,
    Tbody,
    Td,
    Text,
    useBreakpointValue
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri"; // Icons //
import { useUsers } from "../../services/hooks/useUsers"; // Hook //
import { queryClient } from "../../services/QueryClient"; // React Query //

// Componentes //
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";

export default function UserList() {

    const [page, setPage] = useState(1)
    const { data, isLoading, isFetching, error } = useUsers(60, page)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    async function handlePrefetchUser(userId) {
        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`users/${userId}`)

            return response.data
        }, { staleTime: 1000 * 60 })
    }

    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius='8' bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>

                        <Heading>
                            Usuários
                            {!isLoading && isFetching && <Spinner color='pink.500' size='sm' ml='3' />}
                        </Heading>

                        <NextLink href='users/create' passHref>
                            <Button
                                as='a'
                                size='sm'
                                fontSize='sm'
                                colorScheme='pink'
                                _hover={{ cursor: 'pointer' }}
                                leftIcon={<Icon fontSize='20' as={RiAddLine} />}>
                                Adicionar
                            </Button>
                        </NextLink>
                    </Flex>

                    {isLoading ? (
                        <Flex justify='center'>
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify='center'>
                            <Text>
                                Falha ao obter dados
                            </Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme='whiteAlpha'>
                                <Thead>
                                    <Tr>
                                        <Th px={['4', '4', '6']} color='gray.300' w='8'>
                                            <Checkbox colorScheme='pink' />
                                        </Th>
                                        <Th>
                                            Usuário
                                        </Th>

                                        {isWideVersion && <Th>Data de cadastro</Th>}

                                        <Th>
                                            Ações
                                        </Th>
                                    </Tr>
                                </Thead>

                                <Tbody>
                                    {data.users.map(user => (
                                        <Tr key={user.id}>
                                            <Td px={['4', '4', '6']}>
                                                <Checkbox colorScheme='pink' />
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Link
                                                        color='purple.300'
                                                        onMouseEnter={() => handlePrefetchUser(user.id)}>
                                                        <Text fontWeight='bold'>{user.name}</Text>
                                                    </Link>
                                                    <Text fontWeight='normal' fontSize='sm' color='gray.300'>
                                                        {user.email}
                                                    </Text>
                                                </Box>
                                            </Td>

                                            {isWideVersion && <Td>{user.createdAt}</Td>}

                                            <Td>
                                                <Button
                                                    as='a'
                                                    size='sm'
                                                    fontSize='16'
                                                    colorScheme='yellow'
                                                    _hover={{ cursor: 'pointer' }}>
                                                    <Icon as={RiPencilLine} />
                                                </Button>
                                            </Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table >

                            <Pagination
                                totalCountOfRegisters={data.totalCount}
                                currentPage={page}
                                onChangePage={setPage} />
                        </>
                    )
                    }
                </Box >
            </Flex >
        </Box >
    )
}