import {useQuery} from "@tanstack/react-query"
import {getEvents} from "."

export const useGetEvents = () => {
  const eventData = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
    select: (data) => {
      const events = data?.data
      return events
    }
  })

  return eventData;
}