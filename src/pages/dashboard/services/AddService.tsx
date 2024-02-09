import {FieldValues, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import {ServiceSchema} from "../zodValidation";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createService} from "../../../api/services";
import {ChangeEvent, useState} from "react";
import addIcon from '../../../assets/images/add.svg'
import removeIcon from '../../../assets/images/remove.svg'


const AddService = () => {
   // For dynamic input add and remove
   const [inputs, setInputs] = useState<string[]>(['']);

   const handleAddInput = () => {
     setInputs([...inputs, '']);
   };
 
   
   const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
     const { value } = event.target;
     const onChangeValue = [...inputs];
     onChangeValue[index] = value;
     setInputs(onChangeValue);
   };
 
   const handleDeleteInput = (index : number) => {
     const newArray = [...inputs];
     console.log(newArray, index)
     newArray.splice(index, 1);
     setInputs(newArray);
   };


  //  Handling add service section
  const navigate = useNavigate()
  const {register, reset, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(ServiceSchema)})

  const queryClient = useQueryClient();

  const createEventMutation = useMutation({
    mutationFn: createService,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['services']})
    }
  })

  const onSubmit = (data : FieldValues) => {
    const serviceData = {...data, facilities: [...inputs]}

    createEventMutation.mutate(serviceData)
    reset()
    navigate('/dashboard/services')
  }


 
  return (
    <div className="px-4 sm:px-10 mt-10">
      <div className="bg-white w-full max-w-[100%] lg:max-w-[80%] border border-gray-200 shadow-md rounded-lg py-5 sm:py-10 px-4 sm:px-14">
        <h5 className="text-lg font-medium mb-4">Add new service</h5>
        <div className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="text-sm">Service Name</label><br />
              <input id="title" {...register('title')} type="text" className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm" placeholder="Enter Service Name" />
              {errors?.title && (
                <span className="text-xs text-red-500">{errors.title.message as string}</span>
              )}
            </div>
            <div>
              <label className="text-sm">Service Details</label><br />
              <textarea id="description" {...register('description')} cols={30} rows={3} className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm" placeholder="Enter Service details"></textarea>
              {errors?.description && (
                <span className="text-xs text-red-500">{errors.description.message as string}</span>
              )}
            </div>
            <div className="relative">
              <label className="text-sm">Enter image URL</label><br />
              <input id="img" {...register('img')} type="text" className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm" placeholder="ex: https://i.ibb.co/T2fgj6m/event-item-1.png" />
            </div>
            <div className="max-w-[90%] lg:max-w-[70%]">
                <label className="text-sm block">Add facilities</label>
                {inputs.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 mb-3">
                    <input
                      type="text"
                      value={item}
                      id={String(index)} 
                      onChange={(event) => handleChange(event, index)}
                      className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm"
                    />
                     
                    {inputs.length > 1 && (
                      <button onClick={() => handleDeleteInput(index)}>
                        <img src={removeIcon} alt="Delete" className="h-11 w-11" />
                      </button>
                    )}
                    {index === inputs.length - 1 && (
                      <button onClick={() => handleAddInput()} className="-ml-2">
                        <img src={addIcon} alt="Add" className="h-11 w-11" />
                      </button>
                    )}
                  </div>
                ))}
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

export default AddService;