import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Addeed Successfully",'success')

    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><strong><h4>Title</h4></strong></label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange} minLength={3} required /> 
                    <div id="notesHelp" className="form-text">(Title is compulsary , Minimum 5 Character )</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"><strong><h4>Description</h4></strong></label>
                    <textarea type="text" className="form-control" id="description" rows="3" name="description" value={note.description} onChange={onChange} minLength={5} required />
                    <div id="notesHelp" className="form-text">(Description is compulsary , Minimum 5 Character )</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"><strong><h4>Tag</h4></strong></label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>
               
                <button type="submit" className="btn btn-primary btn-lg my-3" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
