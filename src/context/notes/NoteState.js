import NoteContext from "./noteContext";
import { useState } from "react";

const Notestate = (props) => {
  let notesInitial = [
    {
      "_id": "61beed441b5b3c1cf50eb908",
      "user": "61bdffaf37ebc7f9332fdabb",
      "title": "Physics Notes",
      "description": "Light is source of energy",
      "tag": "Physics",
      "date": "2021-12-19T08:28:52.350Z",
      "__v": 0
    },
    {
      "_id": "61beed451b5b3c1cf50eb90a",
      "user": "61bdffaf37ebc7f9332fdabb",
      "title": "Chemistry Notes new",
      "description": "The  Chemical reaction blow my",
      "tag": "Phy",
      "date": "2021-12-19T08:28:53.469Z",
      "__v": 0
    },
    {
      "_id": "61beedd1c539acf71fec6a7c",
      "user": "61bdffaf37ebc7f9332fdabb",
      "title": "Physics Notes",
      "description": "Light is source of energy",
      "tag": "Physics",
      "date": "2021-12-19T08:31:13.256Z",
      "__v": 0
    },
    {
      "_id": "61beed451b5b3c13cf50eb90a",
      "user": "61bdffaf37ebc7f9332fdabb",
      "title": "Chemistry Notes new",
      "description": "The  Chemical reaction blow my",
      "tag": "Phy",
      "date": "2021-12-19T08:28:53.469Z",
      "__v": 0
    },
    {
      "_id": "61bee3dd1c539acf71fec6a7c",
      "user": "61bdffaf37ebc7f9332fdabb",
      "title": "Physics Notes",
      "description": "Light is source of energy",
      "tag": "Physics",
      "date": "2021-12-19T08:31:13.256Z",
      "__v": 0
    },

  ]

  const [notes, setNotes] = useState(notesInitial)

  // Add a note
  const addNote= (title, description,tag)=>{
    const note =  {
      "_id": "61bee3ddw1c539acf71fec6a7c",
      "user": "61bdffaf37ebc7wf9332fdabb",
      "title": "Physics Notes added",
      "description": "Light is source of  trat energy",
      "tag": "Physics saaaaa",
      "date": "2021-12-19T08:31:13.256Z",
      "__v": 0
    };
    setNotes(notes.push(note))
  }
  // Delete a Note
  const deleteNOte = ()=> {

  }
  // Edit a Note
  const editNote = ()=>{

  }



  return (
    <NoteContext.Provider value={{ notes, addNote , deleteNOte,editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default Notestate;