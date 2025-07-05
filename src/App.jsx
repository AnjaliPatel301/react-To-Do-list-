import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './comp/Todo'
import   { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
    <Todo/>
   <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default App
