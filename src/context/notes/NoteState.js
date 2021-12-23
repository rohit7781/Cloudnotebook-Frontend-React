import NoteContext from "./noteContext";
import { useState } from "react";

const Notestate = (props) => {
  const host = "http://localhost:5000";
  let notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

    // Get all Notes
    // eslint-disable-next-line
    const getNotes = async () => {
      // API Call 
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZGZmYWYzN2ViYzdmOTMzMmZkYWJiIn0sImlhdCI6MTYzOTg0NTU5NH0.mpmdL7DsGBArWPNaiYB-sh-T6PH95JwCyPMhxaGrHUI"
        }
      });
      const json = await response.json() 
      setNotes(json)
    }
  
    // Add a Note
    const addNote = async (title, description, tag) => {

      // API Call 
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZGZmYWYzN2ViYzdmOTMzMmZkYWJiIn0sImlhdCI6MTYzOTg0NTU5NH0.mpmdL7DsGBArWPNaiYB-sh-T6PH95JwCyPMhxaGrHUI"
        },
        body: JSON.stringify({title, description, tag})
      });
  
      const note = await response.json();
      setNotes(notes.concat(note))
    }
  
    // Delete a Note
    const deleteNote = async (id) => {
      // API Call
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZGZmYWYzN2ViYzdmOTMzMmZkYWJiIn0sImlhdCI6MTYzOTg0NTU5NH0.mpmdL7DsGBArWPNaiYB-sh-T6PH95JwCyPMhxaGrHUI"
        }
      });
      // eslint-disable-next-line
      const json = response.json(); 
      const newNotes = notes.filter((note) => { return note._id !== id })
      setNotes(newNotes)
    }
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZGZmYWYzN2ViYzdmOTMzMmZkYWJiIn0sImlhdCI6MTYzOTg0NTU5NH0.mpmdL7DsGBArWPNaiYB-sh-T6PH95JwCyPMhxaGrHUI"
      },
      body: JSON.stringify({title, description, tag})
    });
    // eslint-disable-next-line
    const json = await response.json(); 

     let newNotes = JSON.parse(JSON.stringify(notes))
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }  
    setNotes(newNotes);
  }



  return (
    <NoteContext.Provider value={{ notes, addNote , deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default Notestate;