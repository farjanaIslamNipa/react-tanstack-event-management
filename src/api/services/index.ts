import axios from "axios"
import {FieldValues} from "react-hook-form"

export const getServices = async () => {
  return await axios.get('https://event-360-rho.vercel.app/api/services')
}

export const getSingleService = async (id: string) => {
  return await axios.get(`https://event-360-rho.vercel.app/api/services/${id}`)
}

export const createService = async (payload : FieldValues) => {
  return await axios.post('https://event-360-rho.vercel.app/api/services/add-service', payload)
}

export const updateService = async (payload : FieldValues) => {
  return await axios.put(`https://event-360-rho.vercel.app/api/services/update-service/${payload.id}`, payload)
}

export const deleteService = async (id: string) => {
  return await axios.delete(`https://event-360-rho.vercel.app/api/services/delete-service/${id}`)
}