import axios from "axios"

export const getServices = async () => {
  return await axios.get('https://event-360-rho.vercel.app/api/services')
}