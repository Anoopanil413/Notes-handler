import React, { FormEvent, useRef } from 'react'
import { NoteData } from '../../App'
import { useNavigate } from 'react-router-dom'

type NotesType = {
    submitingNote: (data: NoteData) => void
}

const NotePad = ({ submitingNote }: NotesType) => {

    const navigate = useNavigate()
    const titleRef = useRef<HTMLInputElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    function handleDubmit(e: FormEvent) {
        e.preventDefault()
        let noteTitle = titleRef.current!.value
        let noteContent = textAreaRef.current!.value
        if(noteTitle.trim.length!==0&&noteContent.trim.length!==0){

            submitingNote({
                title: titleRef.current!.value,
                content: textAreaRef.current!.value,
                date: new Date
            })
        }
        navigate('/')
    }
    return (
        <>
            <div>
                <form onSubmit={handleDubmit}>
                    <div>
                        <div className='flex  flex-col'>
                            <div className='flex justify-center'>
                                <label htmlFor="" className='block text-lg mt-5 font-bold underline leading-6 text-gray-900'>Title</label>
                            </div>
                            <div className='flex justify-center'>
                                <input type="text" ref={titleRef} className='w-2/3 h-11 mt-5 font-bold rounded-md border border-slate-950 focus:ring-2 focus:ring-inset focus:ring-indigo-600' />
                            </div>
                        </div>

                    </div>
                    <div className="col-span-full">
                        <div className='flex flex-col'>
                            <div className='m-2 flex justify-center'>
                                <label form="about" className="block text-lg font-bold underline leading-6 text-gray-900">Notes</label>
                            </div>
                            <div className="mt-2 flex justify-center">
                                <textarea id="about" ref={textAreaRef} name="about" className="block h-48 w-2/3 rounded-md border border-black py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                            <div className='m-3 flex justify-center'>

                                <button type='submit' className=' w-20 h-12 text-base text-gray-950 font-bold rounded-lg bg-blue-700 hover:scale-110'>Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default NotePad