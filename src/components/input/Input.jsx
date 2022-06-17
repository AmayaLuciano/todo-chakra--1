import { Button, FormControl, HStack, Input } from "@chakra-ui/react"

export const  Form = ({onSubmit}) => {
    return(
        <form onSubmit={onSubmit}>
            <HStack mb='8'>
                <Input name="input" variant='filled' placeholder='Escribe tu tarea'/>
                <Button type="submit" px='10'>Agregar</Button>
            </HStack>
        </form>
    )
}

