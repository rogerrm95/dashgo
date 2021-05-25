import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenu2Line, RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

// Componentes //
import { Logo } from '../Header/Logo'
import { NotificationNav } from '../Header/NotificationsNav'
import { Profile } from '../Header/Profile'
import { SearchBox } from '../Header/SearchBox'

export function Header() {

    const { onOpen } = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
            w="100%"
            as='header'
            maxWidth={1480}
            h="20"
            mx='auto'
            mt='4'
            align='center'
            px='6'>

            { !isWideVersion && (
                <IconButton
                    aria-label='Open navigation'
                    icon={<Icon as={RiMenu2Line} />}
                    fontSize='24'
                    variant='unstyled'
                    onClick={onOpen}
                    mr='2'/>
            )}

            <Logo />

            { isWideVersion && <SearchBox />}

            <Flex align='center' ml='auto'>
                <NotificationNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    )
}