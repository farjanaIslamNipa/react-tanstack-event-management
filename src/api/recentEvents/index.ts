import axios from "axios"
import {FieldValues} from "react-hook-form"

export const getRecentEvents = async() => {
  return await axios.get('http://localhost:5000/api/recent-events')
}

export const getSingleRecentEvents = async(id: string) => {
  return await axios.get(`http://localhost:5000/api/recent-events/${id}`)
}

export const createRecentEvent = async (payload : FieldValues) => {
  return await axios.post('http://localhost:5000/api/recent-events/add-recent-event', payload)
}

export const updateRecentEvent = async (payload : FieldValues) => {
  return await axios.put(`http://localhost:5000/api/recent-events/update-recent-event/${payload.id}`, payload)
}


export const deleteRecentEvent = async (id : string) => {
  return await axios.delete(`http://localhost:5000/api/recent-events/delete-recent-event/${id}`)
}