import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiGitMergeLine, RiInputMethodLine, RiUserSearchLine } from "react-icons/ri";

// Componentes //
import { NavItem } from "./navItem";
import { NavSection } from "./navSection";

export function SidebarNav() {
    return (
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
    )
}