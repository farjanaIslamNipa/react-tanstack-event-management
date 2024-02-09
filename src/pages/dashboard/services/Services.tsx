/* eslint-disable no-unsafe-optional-chaining */
import editIcon from '../../../assets/images/edit.svg'
import deleteIcon from '../../../assets/images/delete.svg'
import {useGetServices} from "../../../api/services/useGetServices";
import {TService} from '../../../types';
import {NavLink, useNavigate} from 'react-router-dom';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteService} from '../../../api/services';
import defaultImg from '../../../assets/images/default.png'


const Services = () => {
  const navigate = useNavigate()
  const {data: services, isLoading} = useGetServices()

  const queryClient = useQueryClient();

  const deleteEventMutation = useMutation({
    mutationFn: deleteService,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['services']})
    }
  })

  const handleDeleteEvent = (id: string) => {
    deleteEventMutation.mutate(id)
  }


  if(isLoading){
    return <p className='text-center text-lg font-semibold text-[#922F86] py-4'>Loading ....</p>
  }



  return (
    <div className="px-4 sm:px-10 pb-14">
      <div className="flex items-center justify-between mt-5">
        <h5 className="font-semibold text-xl text-gray-700">Services List</h5>
        <NavLink to="/dashboard/add-service" className="bg-[#922F86] text-white py-2 px-3 rounded-md text-sm">Add Service</NavLink>
      </div>

      <div className="mt-8 overflow-auto">
        <table className="min-w-[1000px] lg:min-w-full text-sm">
          <thead className="border-b font-medium">
            <tr>
              <th scope="col" className="px-4 py-4 w-[3%] text-start">#</th>
              <th scope="col" className="px-4 py-4 w-[12%] text-start">Image</th>
              <th scope="col" className="px-4 py-4 w-[20%] text-start">Name</th>
              <th scope="col" className="px-4 py-4 w-[30%] text-start">Details</th>
              <th scope="col" className="px-4 py-4 w-[25%] text-start">Facilities</th>
              <th scope="col" className="px-4 py-4 w-[10%] text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              services?.data?.length > 0 && 
              services?.data?.map((service : TService, index: number) => <tr className="border-b" key={service._id}>
              <td className="px-6 py-4 font-semibold text-base">{index + 1}.</td>
              <td className="px-6 py-4">
                <div className="h-14 w-14 rounded-full">
                  {
                    service?.img ?
                    <img src={service?.img} alt="" className="h-full w-full object-cover rounded-full" />
                    :
                    <img src={defaultImg} alt="" className="h-full w-full object-cover rounded-full" />
                  }
                </div>
              </td>
              <td className="px-4 py-4 font-medium text-base">{service?.title}</td>
              <td className="px-4 py-4">{service?.description.length > 150 ?  `${(service?.description).slice(0, 150)}...` : service?.description}</td>
              <td className="px-4 py-4 space-y-1">{
                service?.facilities?.map((item : string, index: number) => <p className="text-sm" key={index}>{item}</p>)
              }</td>
              <td className="px-4 py-4">
                <div className="flex gap-3 items-end">
                  <button onClick={() => navigate(`/dashboard/edit-service/${service?._id}`)} className=" py-2">
                    <img src={editIcon} alt="" className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDeleteEvent(service?._id as string)} className=" py-2">
                    <img src={deleteIcon} alt="" className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>) 
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;