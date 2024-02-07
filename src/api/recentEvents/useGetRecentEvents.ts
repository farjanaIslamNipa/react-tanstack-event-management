import {useQuery} from "@tanstack/react-query"
import {getRecentEvents} from "."

export const useGetRecentEvents = () => {
  const recentEventData = useQuery({
    queryKey: ['recentEvents'],
    queryFn: getRecentEvents,
    select: (data) => {
      const recentEvents = data?.data
      return recentEvents;
    }
  })

  return recentEventData;
}