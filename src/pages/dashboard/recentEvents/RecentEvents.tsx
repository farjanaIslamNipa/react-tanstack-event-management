import {NavLink, useNavigate} from "react-router-dom";
import {useGetRecentEvents} from "../../../api/recentEvents/useGetRecentEvents";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {TRecentEvent} from "../../../types";
import editIcon from '../../../assets/images/edit.svg'
import deleteIcon from '../../../assets/images/delete.svg'
import {deleteRecentEvent} from "../../../api/recentEvents";


const RecentEvents = () => {
  const {data: events, isLoading} = useGetRecentEvents()

  const navigate = useNavigate()

  const queryClient = useQueryClient();

  const deleteRecentEventMutation = useMutation({
    mutationFn: deleteRecentEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['recentEvents']})
    }
  })

  const handleDeleteRecentEvent = (id: string) => {
    deleteRecentEventMutation.mutate(id)
  }

  if(isLoading){
    return <p className='text-center text-lg font-semibold text-gray-700'>Loading ....</p>
  }
  return (
    <div className="px-10 pb-14">
      <div className="flex items-center justify-between mt-5">
        <h5 className="font-semibold text-xl text-gray-700">Recent Events List</h5>
        <NavLink to="/dashboard/add-recent-event" className="bg-[#922F86] text-white py-2 px-3 rounded-md text-sm">Add recent Event</NavLink>
      </div>

      <div className="mt-8 overflow-x-auto overflow-y-hidden">
        <table className="min-w-[1000px] lg:min-w-full text-sm">
          <thead className="border-b font-medium">
            <tr>
              <th scope="col" className="px-4 py-4 w-[10%] text-start">#</th>
              <th scope="col" className="px-4 py-4 w-[25%] text-start">Image</th>
              <th scope="col" className="px-4 py-4 w-[25%] text-start">Name</th>
              <th scope="col" className="px-4 py-4 w-[20%] text-start">Owner</th>
              <th scope="col" className="px-4 py-4 w-[20%] text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              events?.data?.length > 0 && 
              events?.data?.map((event : TRecentEvent, index: number) => <tr className="border-b" key={event.title}>
              <td className="px-6 py-4 font-semibold text-base">{index + 1}.</td>
              <td className="px-4 py-2 h-[65px]">
                <div className="rounded-md">
                  <img src={event?.img} alt="" className="h-20 w-24 object-cover rounded-md" />
                </div>
              </td>
              <td className="px-4 py-4 text-sm">{event?.title}</td>
              <td className="px-4 py-4 text-sm">{event?.owner}</td>
              <td className="px-4 py-4">
                <div className="flex gap-3 items-end">
                  <button onClick={() => navigate(`/dashboard/edit-recent-event/${event?._id}`)} className=" py-2">
                    <img src={editIcon} alt="" className="h-5 w-5" />
                  </button>
                  <button onClick={() => handleDeleteRecentEvent(event?._id as string)} className=" py-2">
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

export default RecentEvents;