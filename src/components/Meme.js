import React from "react"
import '../App.css'
import memesData from '../memesData'

export default function Meme() {
  const [meme, setMeme] = React.useState({topText: "", bottomText: "", image: ""})

  function getMeme() {
    const allMemeImages = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    setMeme(meme => ({
      ...meme, image: allMemeImages[randomNumber].url
    }))
  }
  return (
    <>
      <main>
        <div className="form">
          <input type="text" placeholder="Top text"></input>
          <input type="text" placeholder="Bottom text"></input>
          <button onClick={getMeme}>Get a new meme image  🖼</button>
        </div>
        <img src={meme.image} alt="" />
      </main>
    </>
  )
}
