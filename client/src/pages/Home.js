import React from 'react';
import Modal from 'react-modal';
import Calendar from '../components/Calendar';
import DisplayEvents from '../components/DisplayEvents';
import { Link } from 'react-router-dom';




Modal.setAppElement('#root');

const Home = () => {
  return (
    <div>
       <Link to="/home/Calendar">
        <button type='submit' style={{color:'blue', marginTop:"10px", background:"lightblue", textSizeAdjust:"inherit"} }  >𝐁𝐨𝐨𝐤 𝐘𝐨𝐮𝐫 𝐑𝐨𝐨𝐦</button> 
        </Link>
      {/* <Calendar/> */}
      <DisplayEvents />
     
     
    </div>
  )
}

export default Home
