import React from 'react'
import { useLocation } from 'react-router-dom';
import { NoteData } from '../../App';
import Nav_bar from '../navBar/Nav_bar';
import backgrdImage from '../../Image/tewo.jpg'


const ViewNote = () => {

    const location = useLocation() as { state: { readValue: NoteData } };
    const { readValue } = location.state;

    return (
        <>
            <Nav_bar />
            <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgrdImage})` }}>

                <div>
                    <div className='flex  flex-col'>
                        <div className='flex justify-center'>
                            <label htmlFor="" className='block text-lg mt-5 font-bold underline leading-6 text-gray-900'>Title</label>
                        </div>
                        <div className='m-2 flex justify-center'>
                            <h3 className='m-2 p-3 bg-white'>{readValue.title}</h3>
                        </div>
                    </div>

                </div>
                <div className="col-span-full">
                    <div className='flex flex-col'>
                        <div className='m-2 flex justify-center'>
                            <label form="about" className="block text-lg font-bold underline leading-6 text-gray-900">Notes</label>
                        </div>
                        <div className="mt-2 flex justify-center">
                            <p className="block h-48 w-2/3  bg-white rounded-md border border-black py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " >{readValue.content}</p>
                        </div>

                    </div>
                </div>

            </div>
        </>

    )
}

export default ViewNote