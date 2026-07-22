import { useState } from 'react'

import './App.css'
import CounterApp from './components/CounterApp'
import TodoApp from './components/TodoApp'
import WeatherApp from './components/WeatherApp'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './components/Login'

function App() {

  const routes = createBrowserRouter([
    {
      path:'/',element:(<div><CounterApp/> <TodoApp/> <WeatherApp/></div>)},
     {path:"/login",element:<Login/>},
    ])

  return (
    <>
    <RouterProvider router={routes} />

    </>
  )
}

export default App
