const { model } = require("mongoose");
const Event = require("../models/Event");
const router = require("express").Router();
const userEvent = require('../models/Event');
const moment =require('moment-timezone');



const CreateEvent = async (req, res) => {

    const { username, title, roomName, StartTime, EndTime, availability } = req.body;

       // Convert StartTime and EndTime to IST timezone
       const startTimeIST = moment.tz(StartTime, 'YYYY-MM-DD HH:mm:ss', 'UTC').tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');
       const endTimeIST = moment.tz(EndTime, 'YYYY-MM-DD HH:mm:ss', 'UTC').tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss');

    {
        try {

            // const oldBooking = await userEvent.findOne({roomName})

            const roomExits = await userEvent.findOne({ availability })
            const startTimeAvailble = await userEvent.findOne({ StartTime:startTimeIST })
            const endTimeAvailble = await userEvent.findOne({ EndTime:endTimeIST })

            if (roomExits && startTimeAvailble && endTimeAvailble) {
                return res.status(400).json({ message: "Slot is alread booked" })
            }

            const EventResult = await userEvent.create({
                username,
                title,
                roomName,
                StartTime:startTimeIST,
                EndTime:endTimeIST,
                availability,
            });
           
            res.status(201).json({ EventResult });
        } catch (error) {
            res.status(500).json({ message: "Something went Wrong" })
            console.log(error)

        }
    }

};


const GetEventRoute = async (req, res) => {
    const allevents = await userEvent.find()
    res.send(allevents)

};


const GetUserEvent = async (req, res) => {
    const _id = req.params.id;
    const GetUserEvent = await userEvent.findById(_id)
    res.send(GetUserEvent)
};


const DeleteEvent = async (req, res) => {
    const _id = req.params.id;
    const DeletedEvent = await userEvent.findByIdAndDelete(_id)
    res.send(DeletedEvent)
};


const UpdateEvent = async (req, res) => {
    const _id = req.params.id;
    const UpdateEvent = await userEvent.findByIdAndUpdate(_id, req.body, { new: true })
    res.send(UpdateEvent)
};




module.exports = { CreateEvent, GetEventRoute, GetUserEvent, DeleteEvent, UpdateEvent, };
