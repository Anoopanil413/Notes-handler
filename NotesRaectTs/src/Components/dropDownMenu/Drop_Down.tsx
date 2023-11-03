import React, { useState } from 'react'

const Drop_Down = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="justify-self-end group relative">
            <button onClick={toggleDropdown}>
                <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            {isOpen && (
                <ul className="absolute max-w-max top-10 right-0 bg-white border shadow-md z-50">
                    <li>
                        <a href="/" className="block sm:w-60 md:w-60 lg:w-72 px-4 py-2 hover:bg-gray-200 z-50">
                            Logout hello
                        </a>
                    </li>
                    <li>
                        <a href="/" className="block sm:w-60 md:w-60 lg:w-72 px-4 py-2 hover:bg-gray-200">
                            My Notes
                        </a>
                    </li>
                    <li>
                        <a href="" className=" block sm:w-60 md:w-60 lg:w-72 px-4 py-2 hover:bg-gray-200 z-50">
                            Option
                        </a>
                    </li>
                </ul>
            )}
        </div>
    )
}

export default Drop_Down