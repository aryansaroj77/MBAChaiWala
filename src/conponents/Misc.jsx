import React from 'react'
import logo from "../assests/logo.png"
import {BsMouse} from "react-icons/bs"

const Misc = () => {
  return (
    <>
    <div className="cursor"></div>
    <a href="/" className="logo">
        <img src={logo}   data-cursorpointer=
   {true}alt="logo" />
    </a>
    <a href="/franchise" className="franchiseBtn" data-cursorpointer=
   {true} >
       GET A FRANCHISE
    </a>

    <BsMouse className="scrollbtn"   data-cursorpointer=
   {true}/>
    </>
  )
}

export default Misc