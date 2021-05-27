import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from './paginationItem'

export function Pagination() {
    return (
        <Stack direction={['row', 'column']} mt='8' justify='space-between' align='center' spacing='6'>

            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction='row' spacing='2'>
                <PaginationItem isActive page={1} />
                <PaginationItem page={2} />
                <PaginationItem page={3} />
                <PaginationItem page={4} />
                <PaginationItem page={5} />
            </Stack>
        </Stack>
    )
}