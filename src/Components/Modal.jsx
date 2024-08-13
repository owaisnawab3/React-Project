import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Modal() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(true)

useEffect(() => {
    
}, [show])


  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className='main-container'>
        <div>
          <div className='modal-box'
        onClick={()=>{
          setShow(!show)
        }}>
              <h4>Accordion 1</h4>
              <FontAwesomeIcon className='icon' icon={faArrowDown} />
          </div>
          {show &&<div className='para'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt facere sunt velit <br/> repudiandae amet laudantium sit doloribus aperiam in, ipsam animi. <br/> Nihil magnam nostrum quam non alias et sunt?</p>
          </div>}
          </div>

          <div>
          <div className='modal-box'
          onClick={()=>{
            setShow1(!show1)
          }}>
              <h4>Accordion 2</h4>
              <FontAwesomeIcon className='icon' icon={faArrowDown} />
          </div>
          {show1 &&<div className='para'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt facere sunt velit <br/> repudiandae amet laudantium sit doloribus aperiam in, ipsam animi. <br/> Nihil magnam nostrum quam non alias et sunt?</p>
          </div>}
          </div>
          <div>
          <div className='modal-box'
          onClick={()=>{
            setShow2(!show2)
          }}>
              <h4>Accordion Actions</h4>
              <FontAwesomeIcon className='icon' icon={faArrowDown} />
          </div>
          {show2 &&<div className='para last'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt facere sunt velit <br/> repudiandae amet laudantium sit doloribus aperiam in, ipsam animi. <br/> Nihil magnam nostrum quam non alias et sunt?</p>
          </div>}
          </div>
      </div>
    </>
  )
}

export default Modal

