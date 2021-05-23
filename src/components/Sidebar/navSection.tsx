import { ReactNode } from "react";
import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavSectionProps {
    label: string,
    children: ReactNode
}

export function NavSection({ label, children }: NavSectionProps) {
    return (
        <Box>
            <Text fontWeight='bold' fontSize='small' color='gray.400'>{label}</Text>

            <Stack spacing='4' mt='8' align='stretch' >{children}</Stack>
        </Box>
    )
}