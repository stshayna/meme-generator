import React from "react"
import logo from '../images/logo.png'
import '../App.css'

export default function Header() {
  return (
    <header>
      <img src={logo} alt="" />
      <h2>Meme Generator</h2>
    </header>
  )
}
