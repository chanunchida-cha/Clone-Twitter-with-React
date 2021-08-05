import React, { useState } from "react";
import "./App.css";
import bgImage from "./img/bg.png";

export default function App() {
  //states
  const [noteContent, setNoteContent] = useState("");
  const [allNotes, setAllNotes] = useState([]);


  //Functions
  //function Tweet
  function onNoteSubmit(event) {
    event.preventDefault();
   setAllNotes((prevAllNotes)=>{
     return [...prevAllNotes,noteContent]
   })

  }

  //Elements
  const noteElements = allNotes.map((note,index) => {
    return(
    <div key={index} className="app-newcontent">
      {note}
    </div>
    )
  });


  return (
    <div className="app-bg">
      <center>
        <div className="app-container">
          <form onSubmit={onNoteSubmit}>
            <div className="app-header">Twitty</div>
            <div className="input-text">
              <textarea
                rows="4"
                type="text"
                placeholder="what's happening?"
                className="input"
                value={noteContent}
                onChange={(event) => {
                  setNoteContent(event.target.value);
                }}
              ></textarea>
            </div>
            <div className="app-button">
              <button className="tweet-button" type="submit">
                Tweet
              </button>
            </div>
          </form>
          <div className="app-notes">{noteElements}</div>
        </div>
      </center>
    </div>
  );
}
