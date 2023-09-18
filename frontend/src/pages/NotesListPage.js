import React, { useEffect, useState } from 'react'
import ListItem from '../components/ListItem'

const NotesListPage = () => {

  // here notes is current state and setNotes is used to update it
  let [notes,setNotes] = useState([])

  // used to run something when dependency is triggered/changed
  // if no dependency useEffect run once
  useEffect(()=>{
    getNotes()
    },[]
  )

  let getNotes = async () => {
    let response  = await fetch('/api/notes/')
    let data = await response.json()
    // console.log('Data:',data)
    // setting notes to the data
    setNotes(data)
  }

  return (
    <div className='notes'>

      <div className='notes-header'>
        <h3 className='notes-title'>&#9782; Notes</h3>
        <p className='notes-count'>{notes.length}</p>
      </div>

      <div className='notes-list'>  
        {notes.map((note,index)=>(
          <ListItem key={index} note={note}/>
          // <h3 key={index}>{note.body}</h3>
        ))}

      </div>
    </div>
  )
}

export default NotesListPage