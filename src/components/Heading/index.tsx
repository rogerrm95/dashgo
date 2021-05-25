import { Heading as ChakraHeading, HeadingProps as ChakraHeadingProps } from '@chakra-ui/react'

interface HeadingProps extends ChakraHeadingProps {
    head: string
}

export function Heading({ head, ...rest }: HeadingProps) {
    return (
        <ChakraHeading size='lg' fontWeight='normal' {...rest}>
            {head}
        </ChakraHeading>
    )
}