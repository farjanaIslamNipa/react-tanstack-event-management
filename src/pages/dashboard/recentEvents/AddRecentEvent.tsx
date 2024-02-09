import {zodResolver} from "@hookform/resolvers/zod";
import {FieldValues, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {RecentEventSchema, TRecentEventFormData} from "../zodValidation";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createRecentEvent} from "../../../api/recentEvents";

const AddRecentEvent = () => {

  const navigate = useNavigate()
  const {register, reset, handleSubmit, formState: {errors}} = useForm<TRecentEventFormData>({resolver: zodResolver(RecentEventSchema)})

  const queryClient = useQueryClient();

  const createRecentEventMutation = useMutation({
    mutationFn: createRecentEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['recentEvents']})
    }
  })

  const onSubmit = (data : FieldValues) => {
    createRecentEventMutation.mutate(data)
    reset()
    navigate('/dashboard/recent-events')
  }
  return (
    <div className="px-4 sm:px-10 mt-10">
      <div className="bg-white w-full max-w-[100%] lg:max-w-[80%] border border-gray-200 shadow-md rounded-lg py-5 sm:py-10 px-4 sm:px-14">
        <h5 className="text-lg font-medium mb-4">Add new recent event</h5>
        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="text-sm">Event Name</label><br />
              <input type="text" id="title" {...register('title')} className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm" placeholder="Enter event name" />
              {errors?.title && (
                <span className="text-xs text-red-500">{errors.title.message as string}</span>
              )}
            </div>
            <div>
              <label className="text-sm">Event owner name</label><br />
              <input type="text" id="owner" {...register('owner')} className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm" placeholder="Enter owner name" />
              {errors?.owner && (
                <span className="text-xs text-red-500">{errors.owner.message as string}</span>
              )}
            </div>
            <div className="relative">
              <label className="text-sm">Enter image URL</label><br />
              <input type="text" id="img" {...register('img')} className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm" placeholder="ex: https://i.ibb.co/T2fgj6m/event-item-1.png" />
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

export default AddRecentEvent;