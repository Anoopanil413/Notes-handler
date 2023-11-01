import React from 'react'
import NotePad from '../Components/notePad/NotePad'
import Nav_bar from '../Components/navBar/Nav_bar'
import backgrdImage from '../Image/tewo.jpg'
import { NoteData } from '../App'

type noteHnadleFunType = {
    noteHandler: (data: NoteData) => void
}


const Notes = ({ noteHandler }: noteHnadleFunType) => {
    function gettingNoteData(data: NoteData) {
        noteHandler(data)
    }


    return (
        <div>
            <Nav_bar />
            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgrdImage})` }}>
                <NotePad submitingNote={gettingNoteData} />
            </div>
        </div>
    )
}

export default Notes