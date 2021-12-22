import React from 'react'

function Noteitem(props) {
    const { note } = props;
    return (
        <div className='col-md-3 my-3'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <i className="fas fa-trash-alt "></i>
                    <i className="fas fa-edit mx-3"></i>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
