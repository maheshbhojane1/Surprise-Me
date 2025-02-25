import React, { useState } from 'react'

function SurpriseMe() {

    const surprise = [
        "🎉 Woohoo! You found a surprise!",
        "😂 Why don’t skeletons fight each other? They don’t have the guts!",
        "🎵 Playing a secret sound!",
        "🌈 Changing colors... Enjoy the magic!",
        "🔥 Boom! You're awesome!"
    ];

    const [message, setMessage] = useState("Click the button for a surprise!");
    const [bgcolor, setBgColor] = useState("#ffffff");

    const handleSurprise = ()=>{
        setMessage(surprise[Math.floor(Math.random() * surprise.length)]);
        setBgColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    };

  return (
    <>
    <div className="container" style={{background: bgcolor}}>
        <h1 className='message'>{message}</h1>
        <button className='surprise-button' onClick={handleSurprise}>Surprise Me</button>
    </div>
    </>
  )
}

export default SurpriseMe