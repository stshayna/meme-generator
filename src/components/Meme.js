import React from "react"
import '../App.css'

export default function Meme() {
  const [meme, setMeme] = React.useState({topText: "", bottomText: "", image: ""})

  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function getImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    setMeme(prevMeme => ({
      ...prevMeme, image: allMemes[randomNumber].url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme, [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getImage}>Get a new meme image  🖼</button>
      </div>
      <div className="meme">
        <img src={meme.image} alt="" />
        <h2 className="text top">{meme.topText}</h2>
        <h2 className="text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}
