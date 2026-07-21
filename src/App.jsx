import { useState } from 'react'

import './App.css'
import CounterApp from './components/CounterApp'
import TodoApp from './components/TodoApp'
import WeatherApp from './components/WeatherApp'

function App() {


  return (
    <>
    <div>Hello, World!</div>
    <CounterApp/>
    <TodoApp/>
    <WeatherApp/>
    </>
  )
}

export default App
