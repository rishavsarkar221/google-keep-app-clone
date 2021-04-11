import React, { useState } from 'react';
import NoteData from './Notes';
import data from './NoteData';

const App = () => {
    const [noteDisplay, setNoteDisplay] = useState('block');
    const [nameDisplay, setNameDisplay] = useState('none');

    const [noteTitle, setTitle] = useState('');
    const [noteName, setNoteName] = useState('');

    const addNote = () => {
        setNoteDisplay('none');
        setNameDisplay('block');
    }

    const title = (event) => {
        setTitle(event.target.value);
    }

    const notes = (event) => {
        setNoteName(event.target.value);
    }

    const onClick = () => {
        if(noteTitle === '' ||noteName === '') {
            alert("Pls enter data");
            data.push();
        }
        else {    
            data.push({title: noteTitle, noteContent: noteName});
            setTitle('');
            setNoteName('');
        }
    }

    return(
        <React.Fragment>
            <div className="addNote">
                <input type="text" name="addNote" id="addNote" style={{display: noteDisplay}} onClick={addNote} onChange={addNote} placeholder="Add Note" />

                <div className="notesContent" style={{display: nameDisplay}}>
                    <br/><br/>
                    <input type="text" onChange={title} name="title" id="noteTitle" value={noteTitle}  placeholder="Note Title" />
                    <br/><br/>
                    <textarea name="note" id="noteName" cols="30" rows="10" value={noteName} placeholder="Enter your Note" onChange={notes}></textarea>
                    <br/><br/>
                    <button onClick={onClick} className="btn btn-info">Add Note</button>
                    <br/><br/>
                </div>
            </div>
            
            <div className="allNotes">
                {data.map(val => {
                    return <NoteData title={val.title} noteContent={val.noteContent} />
                })}
            </div>
        </React.Fragment>
    );
}

export default App;