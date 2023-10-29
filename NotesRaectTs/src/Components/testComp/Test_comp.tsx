import React from 'react'
import Meteor from '../mymeteor/Meteor'

const Test_comp = () => {
    return (
        <div>
            <div className=" h-auto m-3">
                <div className=" h-1/2 md:h-1/2 w-3/4  relative max-w-sm">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                    <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">


                        <h1 className="font-bold text-xl text-white mb-0 mt-1 relative z-40">
                            Meteors because they're cool
                        </h1>
                        <h4 className='text-gray-50 underline'>
                            Created Date: 29/10
                        </h4>

                        <p className="font-normal text-ellipsis overflow-hidden  text-base mr-2 text-slate-300 mb-3 relative z-40">
                            I don't know what to write so I'll just paste something cool here.
                            One more sentence because lorem ipsum is just unacceptable.
                        </p>
                        <div className='flex flex-row gap-3'>
                            <button className="border px-4 py-1 rounded-lg !text-sm  border-gray-500 text-gray-300 hover:border-white">
                                Read
                            </button>
                            <button className="border px-4 py-1 rounded-lg !text-sm  border-gray-500 text-blue-300 hover:border-blue-700">
                                Edit
                            </button>
                            <button className="border px-4 py-1 rounded-lg !text-sm  border-gray-500 text-red-600 hover:border-red-600">
                                Delete
                            </button>
                        </div>
                        <Meteor />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Test_comp