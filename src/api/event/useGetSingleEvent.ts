import {useQuery} from "@tanstack/react-query"
import {getSingleEvent} from "."

export const useGetSingleEvent = (id: string) => {
  const eventData = useQuery({
    queryKey: ['events', id],
    queryFn: () => getSingleEvent(id),
    select: (data) => {
      const events = data?.data?.data
      return events
    }
  })

  return eventData;
}