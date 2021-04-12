import React, { useState } from 'react';
import AddNote from './AddNote';
import AllNotes from './AllNotes';
import allNotes from './AllNotesData';
import pinnedNotes from './PinnedData';

const App = () => {

    const [curTitle, setTitle] = useState("");
    const [curNote, setNote] = useState("");

    const title = (event) => {
        setTitle(event.target.value);
    }

    const note = (event) => {
        setNote(event.target.value);
    }

    const addNote = () => {
        if(curNote !== "") {
            allNotes.push({title: curTitle, note: curNote});
            setTitle("");
            setNote("");
        }
        else {
            alert("pls add details to your note");
        }
    }

    const changeValue = () => {
        setNote(curNote + " ");
    }

    return(
        <React.Fragment>
            <AddNote title={title} curTitle={curTitle} note={note} curNote={curNote} addNote={addNote} />

            <div className="notes">
                <div className="pinned" style={{marginTop: '5%'}}>
                    <span>Pinned Notes</span>
                    <br />

                    {pinnedNotes.map((val, id) => {
                        return <AllNotes key={id} title={val.title} note={val.note} changeValue={changeValue} enterClassName={"pinnedNote"} />
                    })}
                </div>

                <div className="allNotes" style={{marginTop: '5%'}}>
                    <span>All Notes</span>
                    <br />

                    {allNotes.map((val, id) => {
                        return <AllNotes key={id} title={val.title} note={val.note} changeValue={changeValue} enterClassName={"oneNote"} />
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;