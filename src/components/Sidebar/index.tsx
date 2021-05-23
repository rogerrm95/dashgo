import { Box, Stack } from "@chakra-ui/react";
import {
    RiDashboardLine,
    RiGitMergeLine,
    RiInputMethodLine,
    RiUserSearchLine
} from "react-icons/ri";

// Componentes //
import { NavSection } from "./navSection";
import { NavItem } from "./navItem";

export function Sidebar() {
    return (
        <Box as='aside' w='64' mr='8'>
            <Stack spacing='12' align='flex-start'>

                <NavSection label='GERAL'>
                    <NavItem iconName={RiDashboardLine}>Dashboard</NavItem>
                    <NavItem iconName={RiUserSearchLine}>Usuários</NavItem>
                </NavSection>

                <NavSection label='AUTOMAÇÃO'>
                    <NavItem iconName={RiInputMethodLine}>Formulários</NavItem>
                    <NavItem iconName={RiGitMergeLine}>Automação</NavItem>
                </NavSection>

            </Stack>
        </Box>
    )
}