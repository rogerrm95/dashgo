import { Input } from "@chakra-ui/input";
import { Flex, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";


export function SearchBox() {
    return (
        <Flex
            as='label'
            flex='1'
            py='4'
            px='8'
            ml='8'
            maxWidth={400}
            align='center'
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
    )
}