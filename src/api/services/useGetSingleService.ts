import {useQuery} from "@tanstack/react-query"
import {getSingleService} from ".";

export const useGetSingleServices = (id: string) => {
  const serviceData = useQuery({
    queryKey: ['services', id],
    queryFn: () => getSingleService(id),
    select: (data) => {
      const services = data?.data?.data
      return services;
    }
  })

  return serviceData;
}