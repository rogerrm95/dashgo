import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useBreakpointValue } from "@chakra-ui/react";
import {
    RiDashboardLine,
    RiGitMergeLine,
    RiInputMethodLine,
    RiUserSearchLine
} from "react-icons/ri";

// Componentes //
import { NavSection } from "./navSection";
import { NavItem } from "./navItem";
import { SidebarNav } from "./sidebarNav";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

export function Sidebar() {

    const { isOpen, onClose } = useSidebarDrawer()

    const isFloatingSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    if (isFloatingSidebar) {
        return (
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg='gray.800' p='4'>
                        <DrawerCloseButton />

                        <DrawerHeader>Navegação</DrawerHeader>

                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>

                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }
    return (
        <Box as='aside' w='64' mr='8'>
            <SidebarNav />
        </Box>
    )
}