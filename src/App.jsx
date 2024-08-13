import './App.css'
import Header from './Components/Header'
import { Routes, Route } from 'react-router-dom'
import Modal from './Components/Modal'
import Check from './Components/Check'

function App() {

const data = {
  img:"hero.jpg",
  heading:"Our Website Page",
  para:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem recusandae neque in, commodi dolorem libero cum nam excepturi minus, praesentium deleniti est odio odit eos illo, autem consequuntur perferendis laudantium."
}

  return (
    <>
    <Header/>
    <Modal/>
    <Check information = {data} />
    </>
  )
}

export default App
