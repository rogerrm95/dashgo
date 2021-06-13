import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from './paginationItem'

interface PaginationProps {
    totalCountOfRegisters: number,
    registerPerPage?: number,
    currentPage?: number,
    onChangePage: (page: number) => void
}

export function Pagination({
    totalCountOfRegisters,
    registerPerPage = 10,
    currentPage = 1,
    onChangePage }: PaginationProps) {

    const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage)

    const siblingsCount = 2; // Paginas irmãs //

    function generatePagesArray(from: number, to: number) {
        return [...new Array(to - from)]
            .map((_, index) => {
                return from + index + 1
            })
            .filter(page => page > 0)
    }

    const previousPages = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : []


    const nextPage = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        : []

    return (
        <Stack direction={['column', 'row']} mt='8' justify='space-between' align='center' spacing='6'>

            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction='row' spacing='2'>

                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem page={1} onChangePage={onChangePage} />
                        {currentPage > (2 + siblingsCount) && (
                            <Text color='gray.300' width='8' textAlign='center'>...</Text>
                        )}
                    </>
                )}


                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem page={page} key={page} onChangePage={onChangePage}/>
                })}

                <PaginationItem isActive page={currentPage} onChangePage={onChangePage}/>

                {nextPage.length > 0 && nextPage.map(page => {
                    return <PaginationItem page={page} key={page} onChangePage={onChangePage}/>
                })}


                {(currentPage + 1) < lastPage && (
                    <>
                        {(currentPage + 1 + siblingsCount) < lastPage && (
                            <Text color='gray.300' width='8' textAlign='center'>...</Text>
                        )}
                        <PaginationItem page={lastPage} onChangePage={onChangePage}/>
                    </>
                )}



            </Stack>
        </Stack>
    )
}