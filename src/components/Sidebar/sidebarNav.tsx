import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiGitMergeLine, RiInputMethodLine, RiUserSearchLine } from "react-icons/ri";

// Componentes //
import { NavItem } from "./navItem";
import { NavSection } from "./navSection";

export function SidebarNav() {
    return (
        <Stack spacing='12' align='flex-start'>

            <NavSection label='GERAL'>
                <NavItem iconName={RiDashboardLine} href='/dashboard'>Dashboard</NavItem>
                <NavItem iconName={RiUserSearchLine} href='/users'>Usuários</NavItem>
            </NavSection>

            <NavSection label='AUTOMAÇÃO'>
                <NavItem href='/forms' iconName={RiInputMethodLine}>Formulários</NavItem>
                <NavItem href='automations' iconName={RiGitMergeLine}>Automação</NavItem>
            </NavSection>

        </Stack>
    )
}