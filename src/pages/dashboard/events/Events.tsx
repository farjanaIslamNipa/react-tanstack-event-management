/* eslint-disable no-unsafe-optional-chaining */
import editIcon from '../../../assets/images/edit.svg'
import deleteIcon from '../../../assets/images/delete.svg'
import {TEvent} from '../../../types';
import {NavLink, useNavigate} from 'react-router-dom';
import {useGetEvents} from '../../../api/event/useGetEvents';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {deleteEvent} from '../../../api/event';


const Events = () => {
  const {data: events, isLoading} = useGetEvents()

  const navigate = useNavigate()

  const queryClient = useQueryClient();

  const deleteEventMutation = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['events']})
    }
  })

  const handleDeleteEvent = (id: string) => {
    deleteEventMutation.mutate(id)
  }

  if(isLoading){
    return <p className='text-center text-lg font-semibold text-gray-700'>Loading ....</p>
  }
  return (
    <div className="px-10 pb-14">
      <div className="flex items-center justify-between mt-5">
        <h5 className="font-semibold text-xl text-gray-700">Events List</h5>
        <NavLink to="/dashboard/add-event" className="bg-[#922F86] text-white py-2 px-3 rounded-md text-sm">Add Event</NavLink>
      </div>

      <div className="mt-8 overflow-auto">
        <table className="min-w-[1000px] lg:min-w-full text-sm">
          <thead className="border-b font-medium">
            <tr>
              <th scope="col" className="px-4 py-4 w-[10%] text-start">#</th>
              <th scope="col" className="px-4 py-4 w-[35%] text-start">Image</th>
              <th scope="col" className="px-4 py-4 w-[35%] text-start">Name</th>
              <th scope="col" className="px-4 py-4 w-[20%] text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              events?.data?.length > 0 && 
              events?.data?.map((event : TEvent, index: number) => <tr className="border-b" key={event.title}>
              <td className="px-6 py-4 font-semibold text-base">{index + 1}.</td>
              <td className="px-6 py-4">
                <div className="max-h-[100px] max-w-[180px] rounded-md">
                  <img src={event?.img} alt="" className="h-full w-full object-cover rounded-md" />
                </div>
              </td>
              <td className="px-4 py-4 font-medium text-base">{event?.title}</td>
              <td className="px-4 py-4">
                <div className="flex gap-3 items-end">
                  <button onClick={() => navigate(`/dashboard/edit-event/${event?._id}`)} className=" py-2">
                    <img src={editIcon} alt="" className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDeleteEvent(event?._id as string)} className=" py-2">
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

export default Events;