import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';

function Noteitem(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note } = props;
    return (
        <div className='col-md-3 my-3'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <i className="fas fa-trash-alt" onClick={()=>{deleteNote(note._id)}} ></i>
                    <i className="fas fa-edit mx-3"></i>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
