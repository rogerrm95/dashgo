import Link from 'next/link'
import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";

import { IconType } from "react-icons";

import { ActiveLink } from "../ActiveLink";

interface NavItemProps {
    children: string,
    iconName: IconType,
    href: string
}

export function NavItem({ children, iconName, href }: NavItemProps) {
    return (
        <ActiveLink href={href} passHref>
            <ChakraLink display='flex' align='center' py='1'>
                <Icon as={iconName} fontSize='20' />
                <Text ml='4' fontWeight='medium'>{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}