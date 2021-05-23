import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    isActive?: boolean,
    page: number
}

export function PaginationItem({ page, isActive = false }: PaginationItemProps) {
    if (isActive) {
        return (
            <Button size='sm' fontSize='xs' colorScheme='pink' w='4' disabled _disabled={{
                bg: 'pink.500',
                cursor: 'pointer'
            }}>
                {page}
            </Button>
        )
    }

    return (
        <Button size='sm' fontSize='xs' bg='gray.700' w='4' _hover={{ bg: 'gray.500' }}>
            {page}
        </Button>
    )
}