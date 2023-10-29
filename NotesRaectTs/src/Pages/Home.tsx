import React from 'react'
import Nav_bar from '../Components/navBar/Nav_bar'
import Notes_List from '../Components/notesList/Home_Tags'
import Meteor from '../Components/mymeteor/Meteor'
import backgrdImage from '../Image/tewo.jpg'
import Test_comp from '../Components/testComp/Test_comp'
import Home_Tags from '../Components/notesList/Home_Tags'

export const Home = () => {
    return (
        <>
            <Nav_bar />
            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgrdImage})` }}>
                <div>
                <Home_Tags />
                </div>
                <div className=' grid lg:grid-cols-4 md:first-letter:grid-rows-3 sm:grid-rows-2 '>
                    <Test_comp />
                    <Test_comp />

                    <Test_comp />

                    <Test_comp />

                    <Test_comp />

                </div>
            </div>
        </>

    )
}
