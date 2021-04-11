import React, { useState } from 'react';

const Notes = (props) => {
    const important = "linear-gradient(to bottom, #ffcc29, #fff)";
    const danger = "linear-gradient(to bottom, #e84545, #fff)";
    const favorite = "linear-gradient(to bottom, #9ede73, #fff)";
    
    const [display, setDisplay] = useState('block');

    const removeNote = () => {
        setDisplay('none');
    }

    const [bgColor, setBgColor] = useState('linear-gradient(to bottom, #f8ede3, #fff)');

    const MarkImportant = () => {
        setBgColor(important);
    }

    const MarkDanger = () => {
        setBgColor(danger);
    }

    const MarkFavorite = () => {
        setBgColor(favorite);
    }

    const defaultBg = () => {
        setBgColor('linear-gradient(to bottom, #f8ede3, #fff)');
    }

    return(
        <div className="notes" style={{backgroundImage: bgColor, display: display}}>
            <br/>
            <span className="cross" style={{textAlign: 'right', marginLeft: '5%'}} onClick={removeNote}>x</span>
            
            <div style={{textAlign: 'center'}}>
                <br/><br/>
                <h1 className='title'>{props.title}</h1>
                <br/>
                <h3 className="noteContent">{props.noteContent}</h3>
                <br/>
                <button className="important btn btn-warning" onClick={MarkImportant} onDoubleClick={defaultBg}>Mark as Important</button>
                <br/><br/>
                <button className="danger btn btn-danger" onClick={MarkDanger} onDoubleClick={defaultBg}>Mark as Danger</button>
                <br/><br/>
                <button className="favorite btn btn-success" onClick={MarkFavorite} onDoubleClick={defaultBg}>Mark as Favorite</button>
                <br/><br/>
            </div>
        </div>
    );
}

export default Notes;