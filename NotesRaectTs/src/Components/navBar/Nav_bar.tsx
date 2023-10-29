import React from 'react'
import Drop_Down from '../dropDownMenu/Drop_Down'

const Nav_bar = () => {
    return (
        <div className='h-16 bg-gradient-to-l hover:bg-gradient-to-r from-purple-500 to-pink-500  \'>
            <div className='grid grid-cols-4 grid-rows-1 gap-4 '>
                <div className='m-4  justify-self-start'>
                    <svg className="w-10 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16.5c0-1-8-2.7-9-2V1.8c1-1 9 .707 9 1.706M10 16.5V3.506M10 16.5c0-1 8-2.7 9-2V1.8c-1-1-9 .707-9 1.706" />
                    </svg>
                </div>
                <div className='m-4 col-span-2 justify-self-center'>
                    <p className='w-16 h-6 text-3xl text-white underline decoration-white'>
                        Notes
                    </p>
                </div>
                <div className='m-4 justify-self-end hover:scale-105'>
                    <Drop_Down />
                </div>

            </div>

        </div>
    )
}

export default Nav_bar