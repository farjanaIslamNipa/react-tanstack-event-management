import user from '../../assets/images/user-2.svg'

const DashboardNav = () => {
  return (
    <div className="bg-white py-3 flex items-center justify-end shadow-md px-10">
    <div className="flex items-center gap-3">
      <p className='text-sm text-gray-600'>event_360</p>
      <img src={user} alt="" className='h-12 w-12 rounded-full' />
    </div>
  </div>
  );
};

export default DashboardNav;