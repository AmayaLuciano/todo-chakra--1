import { Button, HStack, IconButton, Spacer, Text } from '@chakra-ui/react';
import style from './styles/TodoItem.module.css'
import {FaTrash, FaCheck} from 'react-icons/fa'

 function TodoItem  ({todos, id, value, setTodos, completed}) {

    function deleteTask(){
        setTodos(todos.filter(item => item.id !== id))
    }

    function completeTask(){
        setTodos(todos.map(todo => todo.id == id ? {...todo, completed: !todo.completed} : todo))
    }

    return(
        <HStack >
            <Text className={completed ? style.completed : ''}>{value}</Text>
            <Spacer/>
            <IconButton onClick={deleteTask} size='sm' icon={<FaTrash/>} isRound='true'/>
            <IconButton onClick={completeTask} icon={<FaCheck/>} size='sm' isRound='true'/>

        </HStack>
    )
}

export default TodoItem;