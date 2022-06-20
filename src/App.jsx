import { Button, IconButton, VStack, useColorMode } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import './App.css'
import { Form } from './components/input/Input'
import TodoList from './components/list/TodoList'
import {FaSun, FaMoon} from 'react-icons/fa'

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])


  useEffect(() => {
    if(todos.length){
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos])

    function addTask (e){
      e.preventDefault()
      const inputValue = e.target.input.value

      if(inputValue !== ''){
        console.log(e.target.input.value)
        
        setTodos(prevState => [...prevState, {id:Math.random(), value:inputValue, completed: false}])
        e.target.input.value = ''
      } 
    }

    const {colorMode, toggleColorMode} = useColorMode()

  return (
    <VStack p={4}>
      <IconButton icon={ colorMode === 'light' ? <FaSun/> : <FaMoon/>} isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode}/>
      <Form onSubmit={addTask}/>
      <TodoList todos={todos} setTodos={setTodos}/>
      <Button p='6' colorScheme='gray' size='md' onClick={() => setTodos([])}>Vaciar Lista</Button>
    </VStack>
  )
}

export default App
