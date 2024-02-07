import axios from "axios"

export const getEvents = async () => {
  return await axios.get('https://red-magnificent-anemone.cyclic.app/api/events')
}