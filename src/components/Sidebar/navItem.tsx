import { Icon, Link, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavItemProps {
    children: string,
    iconName: IconType,
}

export function NavItem({ children, iconName }: NavItemProps) {
    return (
        <Link display='flex' align='center' py='1'>
            <Icon as={iconName} fontSize='20' />
            <Text ml='4' fontWeight='medium'>{children}</Text>
        </Link>
    )
}