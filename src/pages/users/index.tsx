import {
    Box,
    Button,
    Flex,
    Icon,
    Table,
    Thead,
    Tr,
    Th,
    Checkbox,
    Tbody,
    Td,
    Text
} from "@chakra-ui/react";

import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Heading } from "../../components/Heading";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius='8' bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>

                        <Heading head='Usuários'/> 

                        <Button
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='pink'
                            _hover={{ cursor: 'pointer' }}
                            leftIcon={<Icon fontSize='20' as={RiAddLine} />}>
                            Adicionar
                        </Button>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th ph='6' color='gray.300' w='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>
                                    Usuário
                                </Th>
                                <Th>
                                    Data de cadastro
                                </Th>
                                <Th>
                                    Ações
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Rogério Marques</Text>
                                        <Text fontWeight='normal' fontSize='sm' color='gray.300'>
                                            rogerrm@teste.com
                                            </Text>
                                    </Box>
                                </Td>
                                <Td>
                                    04 de Abril de 2021
                                </Td>
                                <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='16'
                                        colorScheme='yellow'
                                        _hover={{ cursor: 'pointer' }}
                                    >
                                        <Icon as={RiPencilLine} />
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px='6'>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Fernanda Espolleto</Text>
                                        <Text fontWeight='normal' fontSize='sm' color='gray.300'>
                                            fernandaspm@teste.com
                                            </Text>
                                    </Box>
                                </Td>
                                <Td>
                                    12 de Novembro de 2020
                                </Td>
                                <Td>
                                    <Button
                                        as='a'
                                        size='sm'
                                        fontSize='16'
                                        colorScheme='yellow'
                                        _hover={{ cursor: 'pointer' }}
                                    >
                                        <Icon as={RiPencilLine} />
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}