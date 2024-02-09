import axios from "axios"
import {FieldValues} from "react-hook-form"

export const getRecentEvents = async() => {
  return await axios.get('https://event-360-rho.vercel.app/api/recent-events')
}

export const getSingleRecentEvents = async(id: string) => {
  return await axios.get(`https://event-360-rho.vercel.app/api/recent-events/${id}`)
}

export const createRecentEvent = async (payload : FieldValues) => {
  return await axios.post('https://event-360-rho.vercel.app/api/recent-events/add-recent-event', payload)
}

export const updateRecentEvent = async (payload : FieldValues) => {
  return await axios.put(`https://event-360-rho.vercel.app/api/recent-events/update-recent-event/${payload.id}`, payload)
}


export const deleteRecentEvent = async (id : string) => {
  return await axios.delete(`https://event-360-rho.vercel.app/api/recent-events/delete-recent-event/${id}`)
}