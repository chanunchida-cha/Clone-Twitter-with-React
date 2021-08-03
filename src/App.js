import React from 'react'
import  './App.css'

export default function App() {
  return (
    <center>
    <section className="app-section" >
      <div className ="app-container">
        <header className="app-header">
          Twitty
        </header>
        <div className="input-text">
          <textarea type="text" placeholder="what's happening?" className="input"></textarea>

        </div>
        <div className="app-button">
          <button className="tweet-button">Tweet</button>
        </div>

      </div>

    </section>
    </center>
  )
}

