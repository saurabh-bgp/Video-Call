import React,{ useState } from 'react'
import './App.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [RoomID, setRoomID] = useState()
    const navigate = useNavigate()
    const handleJoin = () => {
        navigate(`/room/${RoomID}`)
    }
  return (
    <div className='App'>
        <input placeholder='Enter Room ID' type='text' value={RoomID} onChange={(e) => setRoomID(e.target.value)}></input>
        <button onClick={handleJoin}>Join</button>
     
    </div>
  )
}

export default Home
