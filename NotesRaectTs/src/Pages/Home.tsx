import React from 'react'
import Nav_bar from '../Components/navBar/Nav_bar'
import Notes_List from '../Components/notesList/Home_Tags'
import Meteor from '../Components/mymeteor/Meteor'
import backgrdImage from '../Image/tewo.jpg'
import Test_comp from '../Components/testComp/Test_comp'
import Home_Tags from '../Components/notesList/Home_Tags'
import { NoteData } from '../App'

interface homeProps {
    mylistingNotes?: NoteData[]
}

export const Home = ({ mylistingNotes }: homeProps) => {

    return (
        <>
            <Nav_bar />
            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgrdImage})` }}>
                <div>
                    <Home_Tags />
                </div>
                <div className=' grid lg:grid-cols-4 md:first-letter:grid-rows-3 sm:grid-rows-2 '>
                    {mylistingNotes && mylistingNotes.map((notesInListPage, index) => {
                        return (
                            <Test_comp key={index} listingnotes={notesInListPage} />
                        )
                    })

                    }
                </div>
            </div>
        </>

    )
}
