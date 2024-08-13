import React from 'react'
import Header from '../Components/Header'
import img from '../assets/image/Contact/images (10).jpg'

const Contact = () => {

 const info = {
    heading:"Contact",
    para:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem recusandae neque in, commodi dolorem libero cum nam excepturi minus,praesentium deleniti est odio odit eos illo, autem consequuntur perferendis laudantium."
    }

  return (
    <>
    <Header/>
    <div className='contact'>
    <h1>{info.heading}</h1>
    <p>{info.para}</p>
    </div>

    <div className='image'>
     <img src={img} alt="" />
    </div>
    </>
  )
}

export default Contact