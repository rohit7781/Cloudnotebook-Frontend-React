
import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';


function Notes() {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const { notes , addNote } = context;

    return (
        <div className="container">
            <AddNote/>
        <div className='row my-3'>
            <h2>Your Note</h2>
            {notes.map((note)=>{
                return <Noteitem key={note._id} note = {note} />;
            })

            }
            </div>
        </div>
    )
}
export default Notes;

