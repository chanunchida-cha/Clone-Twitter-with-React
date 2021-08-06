import React, { useState } from 'react';
import './App.css'

const startNote ={
    content: ""
};

export default function App() {
    // state
    const [noteContent, setNoteContent] = useState(startNote);
    const [editNote, setEditNote] = useState(null);
    const [allNotes, setAllNotes] = useState([]);


    // function input
    function onNoteValueChange(event) {
        const {name, value} = event.target;
        setNoteContent((prevNoteContent) => {
            return {
                ...prevNoteContent,
                [name]: value,
            };
        });
    }

    function onEditNoteValueChange(event) {
        const {name, value} = event.target;
        setEditNote((prevNoteContent) => {
            return {
                ...prevNoteContent,
                [name]: value,
            };
        });
    }

    function onNoteSubmit(event){
        event.preventDefault();

        setAllNotes((prevAllNotes) => {
            const newNote = { ...noteContent };
            newNote.id = allNotes.length+1;
            return [newNote, ...prevAllNotes];
        });

        setNoteContent(startNote);
    }

    function onEditNoteSubmit(event){
        event.preventDefault();

        setAllNotes((prevAllNotes) => {
            return prevAllNotes.map((theNote) =>{
                if(theNote.id !== editNote.id) return theNote;
                return editNote;
            });
        });

        setEditNote(null);
    }


    function onNoteDelete(noteId) {
        setAllNotes((prevAllNotes) => {
            return prevAllNotes.filter((theNote) => theNote.id !== noteId);
        });
    }

    const allNotesElements = allNotes.map((theNote) => {
        return (
      <div key={theNote.id} className="app-newcontent">
        {theNote.content}
        <div  className="app-newcontent-button">
        <button  className="btn-like" >
          <i className="fas fa-heart"></i>Like
          </button>
          <button className="btn-edite">
            <i className="fas fa-edit" onClick={() => {setEditNote(theNote)}}></i>
          </button>
          <button className="btn-delete" onClick={()=>{onNoteDelete(theNote.id)}}>
            <i className="fas fa-trash"></i>
          </button>

        </div>
      </div>
        );
    });

    let editNoteElement = null;
    if (!!editNote){
      editNoteElement = (
        <div className="app-edit-note">
          <form onSubmit={onEditNoteSubmit}>
            
              <textarea
              rows="3"
              placeholder="what happen"
              name="content"
              value={editNote.content}
              className="input-edit"
              onChange={onEditNoteValueChange}
    
              />
            </form>
            <button typ="submit" >Update</button>
        </div>
      )
    }

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
                name="content"
                value={noteContent.content}
                onChange={onNoteValueChange}
              ></textarea>
            </div>
            <div className="app-button">
              <button className="tweet-button" type="submit">
                Tweet
              </button>
            </div>
          </form>
          <div className="app-notes" >
            {allNotesElements}
            {editNoteElement}
          </div>
        </div>
      </center>
    </div>

    );
}

