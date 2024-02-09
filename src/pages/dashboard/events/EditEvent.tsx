import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {FieldValues, useForm} from "react-hook-form";
import {EventSchema} from "../zodValidation";
import {useGetSingleEvent} from "../../../api/event/useGetSingleEvent";
import {useNavigate, useParams} from "react-router-dom";
import {updateEvent} from "../../../api/event";


const EditEvent = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {data : event, isLoading} = useGetSingleEvent(id as string)


  const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(EventSchema)})

  const queryClient = useQueryClient();

  const updateEventMutation = useMutation({
    mutationFn: updateEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['events']})
    }
  })

  const onSubmit = (data : FieldValues) => {
    updateEventMutation.mutate({id, ...data})
    navigate('/dashboard/events')
  }

  if(isLoading){
    return <p className='text-center text-lg font-semibold text-[#922F86] py-4'>Loading ....</p>
  }
  return (
    <div className="px-4 sm:px-10 mt-10">
      <div className="bg-white w-full max-w-[100%] lg:max-w-[80%] border border-gray-200 shadow-md rounded-lg py-5 sm:py-10 px-4 sm:px-14">
        <h5 className="text-lg font-medium mb-4">Update Event</h5>
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
              <label className="text-sm">Event background color code</label><br />
              <input 
              type="text" 
              id="bgColor" 
              defaultValue={event?.bgColor || ''}
              {...register('bgColor')} 
              className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm" 
              placeholder="ex:9220F86" 
              />
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

export default EditEvent;