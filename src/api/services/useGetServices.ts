import {useQuery} from "@tanstack/react-query"
import {getServices} from ".";

export const useGetServices = () => {
  const serviceData = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
    select: (data) => {
      const services = data?.data
      return services;
    }
  })

  return serviceData;
}