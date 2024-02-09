import axios from "axios"
import {FieldValues} from "react-hook-form"

export const getServices = async () => {
  return await axios.get('http://localhost:5000/api/services')
}

export const getSingleService = async (id: string) => {
  return await axios.get(`http://localhost:5000/api/services/${id}`)
}

export const createService = async (payload : FieldValues) => {
  return await axios.post('http://localhost:5000/api/services/add-service', payload)
}

export const updateService = async (payload : FieldValues) => {
  return await axios.put(`http://localhost:5000/api/services/update-service/${payload.id}`, payload)
}

export const deleteService = async (id: string) => {
  return await axios.delete(`http://localhost:5000/api/services/delete-service/${id}`)
}