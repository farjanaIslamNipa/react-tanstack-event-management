import axios from "axios"
import {FieldValues} from "react-hook-form"

export const getEvents = async () => {
  return await axios.get('https://event-360-rho.vercel.app/api/events')
}

export const getSingleEvent = async (id: string) => {
  return await axios.get(`https://event-360-rho.vercel.app/api/events/${id}`)
}

export const createEvent = async (payload : FieldValues) => {
  return await axios.post('https://event-360-rho.vercel.app/api/events/add-event', payload)
}


export const updateEvent = async (payload : FieldValues) => {
  return await axios.put(`https://event-360-rho.vercel.app/api/events/update-event/${payload.id}`, payload)
}


export const deleteEvent = async (id : string) => {
  return await axios.delete(`https://event-360-rho.vercel.app/api/events/delete-event/${id}`)
}