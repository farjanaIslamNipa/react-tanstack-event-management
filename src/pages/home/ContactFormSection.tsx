import mobile from '../../assets/images/phone-3.png'
import email from '../../assets/images/email.svg'
import phone from '../../assets/images/phone.svg'
import map from '../../assets/images/map.svg'

const ContactFormSection = () => {
  return (
    <div className="mt-16 md:mt-20 bg-gray-100 pt-12 pb-16 md:pb-20">
    <div className="custom-container">
      <h1 className="text-center text-[28px] sm:text-[38px] md:text-[45px] font-bold">Have Questions? Contact us</h1>
      <div className="mt-8 md:mt-14 bg-white mx-0 sm:mx-10 md:mx-0 xl:mx-20 2xl:mx-36 rounded-2xl pl-8 lg:pl-10 2xl:pl-20 pr-8 lg:pr-16 2xl:pr-24 py-12">
        <div className="grid grid-cols-12 gap-0 md:gap-8">
          <div className="col-span-5 hidden lg:block">
            <img src={mobile} alt="" className="p-0 xl:p-4" />
          </div>
          <div className="col-span-12 lg:col-span-7 pt-0 md:pt-2 xl:pt-8">
            <div className="">
              <p className="font-semibold text-xl mb-3 ">Fill this form, it's easy</p>
              <div className="mb-3">
                <label>Name</label>
                <input type="text" className="block border w-full mt-1 py-2 px-4 placeholder:text-sm border-gray-400" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label >Email</label>
                <input type="text" className="block border w-full mt-1 py-2 px-4 placeholder:text-sm border-gray-400" placeholder="Enter your email address" />
              </div>
              <div className="mb-3">
                <label>Phone</label>
                <input type="text" className="block border w-full mt-1 py-2 px-4 placeholder:text-sm border-gray-400" placeholder="Enter your phone number" />
              </div>
              <div className="mb-5">
                <label>Message</label>
                <textarea name="" id="" cols={30} rows={3} className="block border w-full mt-1 py-2 px-4 placeholder:text-sm border-gray-400" placeholder="Enter your email address"></textarea>
              </div>
              <button className="brand-outline-button text-appSecondary">Send Message</button>
            </div>
          </div>
        </div>
        <div className="block space-y-4 md:space-y-0 md:flex justify-between items-center pt-14 pb-2">
          <div className="flex items-center gap-2 md:gap-1 lg:gap-2">
            <img src={map} alt="" className="h-8 lg:h-10" />
            <p>Road-9, South Banasree, Dhaka</p>
          </div>
          <div className="flex items-center gap-2 md:gap-1 lg:gap-2">
            <img src={email} alt="" className="h-8 lg:h-10" />
            <a href="mailto:webiizard08@gmail.com">event360@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 md:gap-1 lg:gap-2">
            <img src={phone} alt="" className="h-8 lg:h-10" />
            <a href="tel:01700557663">01700557003</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ContactFormSection;