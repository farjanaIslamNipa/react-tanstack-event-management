

const AddService = () => {
  return (
    <div className="px-10 mt-10">
      <div className="bg-white max-w-[80%] border border-gray-200 shadow-md rounded-lg py-10 px-14">
        <h5 className="text-lg font-medium mb-4">Add new service</h5>
        <div className="mt-6">
          <form className="space-y-5">
            <div>
              <label className="text-sm">Service Name</label><br />
              <input type="text" className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm" placeholder="Enter Service Name" />
            </div>
            <div>
              <label className="text-sm">Service Details</label><br />
              <textarea name="" id="" cols={30} rows={3} className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm" placeholder="Enter Service details"></textarea>
            </div>
            <div className="relative">
              <label className="text-sm">Enter image URL</label><br />
              <input type="text" className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm" placeholder="ex: https://i.ibb.co/T2fgj6m/event-item-1.png" />
            </div>
            <div className="flex items-center gap-3">
                <label className="text-sm">Add facilities</label><br />

               <div>
                <input type="text" className="border border-gray-300 w-full py-2 px-4 rounded-md focus:outline-none focus:border-[#922F86] placeholder:text-sm" placeholder="Enter facilities" />
              </div>
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