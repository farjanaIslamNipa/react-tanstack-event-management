import axios from "axios"

export const getRecentEvents = async() => {
  return await axios.get('https://red-magnificent-anemone.cyclic.app/api/recent-events')
}