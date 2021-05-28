import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldErrors } from "react-hook-form";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input as ChackraInput,
    InputProps as ChackraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChackraInputProps {
    name: string,
    label?: string,
    error?: FieldErrors
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> =
    ({ name, label, error = null, ...rest }, ref) => {
        return (
            <FormControl isInvalid={!!error}>

                { label && <FormLabel htmlFor='email'>{label}</FormLabel>}

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
                    ref={ref}
                    {...rest}
                />

                {!!error && (
                    <FormErrorMessage>
                        {error.message}
                    </FormErrorMessage>
                )}
            </FormControl>
        )
    }

export const Input = forwardRef(InputBase)