import { Flex, Text, Input, Icon } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export function Header() {
    return (
        <Flex
            w="100%"
            as='header'
            maxWidth={1480}
            h="20"
            mx='auto'
            mt='4'
            align='center'
            px='6'
        >
            <Text
                fontSize='3xl'
                fontWeight='bold'
                letterSpacing='tight'
                w='64'

            >
                dashgo
                <Text as='span' color='pink.500' ml='1'>.</Text>
            </Text>

            <Flex
                as='label'
                flex='1'
                py='4'
                px='8'
                ml='8'
                maxWidth={400}
                alignSelf='center'
                color='gray.200'
                pos='relative'
                backgroundColor='gray.800'
                borderRadius='full'
            >
                <Input
                    color='gray.50'
                    variant='unstyled'
                    placeholder='Buscar na plataforma'
                    _placeholder={{ color: 'gray.400' }}
                    px='4'
                    mr='4'
                />

                <Icon as={RiSearchLine} />

            </Flex>

        </Flex>
    )
}