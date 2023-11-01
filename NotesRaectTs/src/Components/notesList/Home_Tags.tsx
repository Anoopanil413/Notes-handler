import React from 'react'
import Search_Bar from '../searchBar/Search_Bar'
import { useNavigate } from 'react-router-dom'

const Home_Tags = () => {
    const navigate = useNavigate()

    const handleCreatenewNotes = () => {
        navigate('/create')
    }

    return (
        <div>
            <div className="w-auto rounded overflow-hidden shadow-lg ">
                <div className="px-6 pt-4 pb-2 flex flex-row">
                    <div>
                        <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Sort by Date</span>

                    </div>
                    {/* <div>

                        <span className="inline-block  bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">travel</span>
                    </div> */}
                    <div className='w-auto hidden lg:block '>
                        <Search_Bar />
                    </div>
                    <div className='w-auto '>
                        <button type="button" onClick={handleCreatenewNotes} className="py-2.5 px-5 lg:ml-28 mr-2 mb-2 flex text-sm font-medium text-white focus:outline-none bg-white rounded-lg border hover:border-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Create Notes
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>

                        </button>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home_Tags