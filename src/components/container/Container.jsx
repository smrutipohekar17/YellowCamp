import React from 'react'
import "./container.css"

export default function Container() {
  return (
  
<div className="conatiner">
    <div className="section first">
         <div className="subsection data">
            <div className="subsub enter">
                Enter your app name
            </div>
            <div className="subsub upload">Upload Game Files:</div>
           <div className="subsub buttons">
             <div className="bluebuttons">CSV for Story</div>
             <div className="bluebuttons">Game Assests</div>
             <div className="bluebuttons">App Icon</div>
           </div>
           <div className="subsub line">Click here to download sample files</div>
           <div className="subsub colorbutton">Click to build the game</div>
           <div className="subsub marker"><progress max="100" value="20" /></div>
           
           <div className="subsub minutes">02:00 minutes remaining</div>
         </div>
         <div className="subsection video">
                  <div className="actualvid">
                  <iframe width="450" height="300"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY">
                  </iframe>
                  </div>
                  <div className="demo">Check out the demo to get started</div>
         </div>
    </div>
    
    <div className="devision"></div>

    <div className="section second">
          <p>Games created using Wuri</p>
          <div className="games">
          <img src="./photo1.png" alt="Image 1" style={{ marginTop: '10px', width: '160px', height: '60px' }}/>
          <img src="./photo.png" alt="Image 1" style={{ marginTop: '10px', width: '160px', height: '60px' }}/>
          </div>
    </div>
</div>
    
  )
}
