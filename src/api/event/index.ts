import axios from "axios"
import {FieldValues} from "react-hook-form"

export const getEvents = async () => {
  return await axios.get('http://localhost:5000/api/events')
}

export const getSingleEvent = async (id: string) => {
  return await axios.get(`http://localhost:5000/api/events/${id}`)
}

export const createEvent = async (payload : FieldValues) => {
  return await axios.post('http://localhost:5000/api/events/add-event', payload)
}


export const updateEvent = async (payload : FieldValues) => {
  return await axios.put(`http://localhost:5000/api/events/update-event/${payload.id}`, payload)
}


export const deleteEvent = async (id : string) => {
  return await axios.delete(`http://localhost:5000/api/events/delete-event/${id}`)
}