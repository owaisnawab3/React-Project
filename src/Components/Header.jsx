import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const Routes = [
        {
            pageName: "Home",
            path:"/",
        },

        {
            pageName: "About",
            path:"/about",
        },

        {
            pageName: "Services",
            path:"/services",
        },

        {
            pageName: "Contact Us",
            path:"/contact",
        }
    ]

  return (
    <>
    <div className='Header'>
       <div className='Logo'>
          <h2>Owais Nawab</h2>
       </div>
       <div className='menu'>
           <ul>
            {Routes.map(({pageName, path} , index) => {
                return(
                    <li><Link to={path}>{pageName}</Link></li>
                )
            })}
           </ul>
       </div>
    </div>

    </>
  )
}

export default Header