import {useNavigate, useParams} from "react-router-dom";
import {useGetSingleRecentEvent} from "../../../api/recentEvents/useGetSingleRecentEvent";
import {zodResolver} from "@hookform/resolvers/zod";
import {FieldValues, useForm} from "react-hook-form";
import {RecentEventSchema} from "../zodValidation";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateRecentEvent} from "../../../api/recentEvents";


const EditRecentEvent = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {data : event, isLoading} = useGetSingleRecentEvent(id as string)


  const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(RecentEventSchema)})

  const queryClient = useQueryClient();

  const updateRecentEventMutation = useMutation({
    mutationFn: updateRecentEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['recentEvents']})
    }
  })

  const onSubmit = (data : FieldValues) => {
    updateRecentEventMutation.mutate({id, ...data})
    navigate('/dashboard/recent-events')
  }

  if(isLoading){
    return <p className='text-center text-lg font-semibold text-gray-700'>Loading ....</p>
  }

  return (
    <div className="px-10 mt-10">
      <div className="bg-white max-w-[80%] border border-gray-200 shadow-md rounded-lg py-10 px-14">
        <h5 className="text-lg font-medium mb-4">Update recent event</h5>
        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="text-sm">Event Name</label><br />
              <input 
              type="text" 
              id="title" {...register('title')} 
              defaultValue={event?.title}
              className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm" 
              placeholder="Enter event name" 
              />
              {errors?.title && (
                <span className="text-xs text-red-500">{(errors?.title?.message) as string}</span>
              )}
            </div>
            <div>
              <label className="text-sm">Owner Name</label><br />
              <input 
              type="text" 
              id="owner" 
              defaultValue={event?.owner || ''}
              {...register('owner')} 
              className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm" 
              placeholder="Enter owner name" 
              />
             {errors?.owner && (
                <span className="text-xs text-red-500">{errors.owner.message as string}</span>
              )}
            </div>
            <div className="relative">
              <label className="text-sm">Enter image URL</label><br />
              <input 
              type="text" 
              id="img" 
              defaultValue={event?.img || ''}
              {...register('img')} 
              className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm" 
              placeholder="ex: https://i.ibb.co/T2fgj6m/event-item-1.png" 
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-[#922F86] text-white py-2 px-5 rounded-md text-base">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditRecentEvent;