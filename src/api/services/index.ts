import axios from "axios"

export const getServices = async () => {
  return await axios.get('https://red-magnificent-anemone.cyclic.app/api/services')
}