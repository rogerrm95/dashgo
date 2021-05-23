import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text } from "@chakra-ui/layout";

export function Profile() {
    return (
        <Flex
            align='center'>
            <Box mr='4' textAlign='right'>
                <Text>Rogério Marques</Text>
                <Text color='gray.300' fontSize='small'>rogerrm@live.com</Text>
            </Box>

            <Avatar
                size='md'
                name='Rogério Marques'
                src='https://github.com/rogerrm95.png' />
        </Flex>
    )
}