import { Badge, HStack, StackDivider, VStack } from '@chakra-ui/react';
import TodoItem from './TodoItem';

 function TodoList  ({todos, setTodos})  {

   /*  if(!size){
        return(
            <Badge colorScheme='green' p='4' borderRadius='lg' m='4'>
                No tienes tareas!
            </Badge>
        )
    } */

    return (
        <VStack 
            alignItems='stretch'
            divider={<StackDivider/>}
            borderColor='gray.500' 
            borderWidth='2px' 
            p='4' 
            borderRadius='lg' 
            w='100%' 
            maxW={{base:'90vw', sm:'80vw', lg:'50vw', xl:'40vw'}}>
                {todos.map(todo => (
                <TodoItem todos={todos} key={todo.id} id={todo.id} value={todo.value} setTodos={setTodos} completed={todo.completed}/>))}

        </VStack>
    )
}

export default TodoList;