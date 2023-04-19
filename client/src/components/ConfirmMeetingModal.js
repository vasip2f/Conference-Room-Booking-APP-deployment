import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import Datetime from 'react-datetime';

export default function ({ isOpen, onClose, onEventAdded }) {
    const [title, setTitle] = useState("");
    const [roomName, setroomName] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [username, setUsername] = useState("");
    const [availability, setAvailability] = useState(true);

    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title,
            roomName,
            start,
            end,
            availability
        })

        onClose();
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <form onSubmit={onSubmit}>
                <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                <input placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
                <select placeholder="Select Room" value={roomName} onChange={e => setroomName(e.target.value)} required='Please Select your Room'>
                    <option>Big Room</option>
                    <option>Small Room</option>
                    <option>Booth One</option>
                    <option>Booth Two</option>
                </select>

                <div>
                    <label>Start Date</label>
                    <Datetime value={start} onChange={date => setStart(date)} />
                </div>
                <div>
                    <label>end Date</label>
                    <Datetime value={end} onChange={date => setEnd(date)} />
                </div>
                <button>Add Booking</button>
            </form>

        </Modal>
    )
}