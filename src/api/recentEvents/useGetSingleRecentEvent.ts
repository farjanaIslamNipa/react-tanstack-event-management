import {useQuery} from "@tanstack/react-query";
import {getSingleRecentEvents} from ".";

export const useGetSingleRecentEvent = (id: string) => {
  const eventData = useQuery({
    queryKey: ['recentEvents', id],
    queryFn: () => getSingleRecentEvents(id),
    select: (data) => {
      const events = data?.data?.data
      return events
    }
  })

  return eventData;
}