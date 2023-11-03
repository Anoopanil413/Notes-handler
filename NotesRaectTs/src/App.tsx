import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import Notes from './Pages/Notes'
import { useLocalStorage } from './customHooks/useLocalStorage'
import ViewNote from './Components/viewNotes/ViewNote'

export type NoteData = {
  title: String,
  content: String,
  date?: Date,
  id:string
}

interface NoteDataByDate {
  [date: string]: NoteData[];
}


function App() {
  let [myNotes, setMyNotes] = useLocalStorage<{ [date: string]: NoteData[] }>("NOTES", {})
  let [mysetNotes, setMyExistingNotes] = useState<NoteData[]>([])

  useEffect(() => {
    notelistingFunction()

  }, [setMyNotes, myNotes])


  function onCreate(data: NoteData) {
    setMyNotes((prevNotes) => {
      const date = data.date ? data.date.toISOString().split('T')[0] : 'No Date';
      return {
        ...prevNotes,
        [date]: [...(prevNotes[date] || []), data],
      };
    });
  }

  function notelistingFunction() {
    const jsonData = localStorage.getItem('NOTES')
    const todayDate: Date = new Date()
    const todaysDateString: string = todayDate.toISOString().split('T')[0];
    console.log(todaysDateString)

    if (jsonData === null || jsonData === 'undefined') {
      alert("Lets start creating jotes")
    } else {
      const parsedData: NoteDataByDate = JSON.parse(jsonData);
      if (!parsedData || Object.keys(parsedData).length === 0) {
        alert('No notes created');
      } else if (parsedData[todaysDateString]) {
        const todaysNotes = parsedData[todaysDateString];
        console.log("This is notes for today", todaysNotes)
        setMyExistingNotes(todaysNotes)
      }
    }

  }


  return (
    <>
      <Routes>
        <Route path='/' element={<Home mylistingNotes={mysetNotes} />} />
        <Route path='/create' element={<Notes noteHandler={onCreate} />} />
        <Route path='/view' element={<ViewNote />} />
      </Routes>


    </>
  )
}




export default App
