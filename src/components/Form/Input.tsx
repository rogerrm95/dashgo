import {
    FormControl,
    FormLabel,
    Input as ChackraInput,
    InputProps as ChackraInputProps
} from "@chakra-ui/react";


interface InputProps extends ChackraInputProps {
    name: string,
    label?: string
}
export function Input({ name, label, ...rest }: InputProps) {
    return (
        <FormControl>

            {
                label && <FormLabel htmlFor='email'>{label}</FormLabel>
            }

            <ChackraInput
                name={name}
                id={name}
                focusBorderColor="pink.500"
                bg="gray.900"
                variant='filled'
                _hover={{
                    bg: 'gray.900'
                }}
                size="lg"
                {...rest}
            />
        </FormControl>
    )
}