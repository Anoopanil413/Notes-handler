import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home'
import Notes from './Pages/Notes'
import { useLocalStorage } from './customHooks/useLocalStorage'

export type NoteData = {
  title: String,
  content: String,
  date?: Date
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
      const date = data.date ? data.date.toDateString() : 'No Date';
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

    if (jsonData === null || jsonData === 'undefined') {
      alert("Lets start creating jotes")
    } else {
      const parsedData: NoteDataByDate = JSON.parse(jsonData);
      if (!parsedData || Object.keys(parsedData).length === 0) {
        alert('No notes created for today');
      } else if (parsedData[todaysDateString]) {
        const todaysNotes = parsedData[todaysDateString];
        setMyExistingNotes(todaysNotes)
      }
    }

  }


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Notes noteHandler={onCreate} />} />
      </Routes>


    </>
  )
}




export default App
