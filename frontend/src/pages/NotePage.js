import React , {useState,useEffect} from 'react'
import { useParams,useNavigate } from "react-router-dom";
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

const NotePage = () => {

    // const { id } = useParams();
    const params = useParams();
    const navigate = useNavigate();

    let [note,setNote] = useState(null)

    useEffect(
        ()=>{
            getNote()
        },[params.id]
    )

    let getNote = async()=>{
        let response = await fetch(`/api/notes/${params.id}`)
        let data  = await response.json()
        setNote(data)
    }

    let updateNode = async() => {
        fetch(
            `/api/notes/${params.id}/`,
            {
                method: "PUT",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(note)
            }
        )
    }

    let deleteNode = async() => {
        fetch(
            `/api/notes/${params.id}/`,
            {
                method: "DELETE",
                headers:{
                    'Content-Type':'application/json'
                },
            }
        )
        navigate(`/`);
    }

    let handleSubmit = ()=>{
        updateNode()
        // history.push('/')
        navigate(`/`);
    }


    return (
        <div className='note'>

            <div className='note-header'>
                <h3>
                    <ArrowLeft onClick={handleSubmit}/> 
                </h3>
                <button onClick={deleteNode}>Delete</button>
            </div>

            <textarea 
                onChange={
                    (e) => {setNote({...note,'body':e.target.value})}
                }
                defaultValue={note?.body}>    
            </textarea>
        </div>
    )
}

export default NotePage