import purpleCheck from '../../assets/images/purple-check.svg'
import whiteCheck from '../../assets/images/white-check.svg'

const PricingSection = () => {

  return (
    <div className='bg-[#F9FCFF] pb-10 md:pb-24'>
      <div className="text-center h-[350px] md:h-[463px] bg-gradient-to-r from-[#CEEDFF] via-[#E4F5FF] to-[#FFFFFF] pt-[50px] md:pt-[110px] px-2">
        <h2 className="text-[32px] sm:text-[38px] md:text-[45px] font-semibold">Ready to get started?</h2>
        <p className="text-base sm:text-lg">14 days unlimited free trial. No contract or credit card required.</p>
      </div>
      <div className="">
        <div className="grid grid-cols-12 gap-6 lg:gap-[35px] custom-container -mt-[180px]">
          <div className="col-span-12 sm:col-span-6 md:col-span-4 px-8 lg:px-[50px] pt-[50px] pb-8 rounded-xl bg-white hover:bg-[#5A01CB] transition-all duration-150 ease-out hover:text-white price-card">
            <p className="text-[24px] font-semibold mb-1">Starter Plan</p>
            <div className="flex items-end gap-1">
              <span className="text-[51px] font-bold leading-none">$11</span>
              <span>/month</span>
            </div>
            <div className="py-[48px] space-y-6 min-h-[306px] price-card-content">
              <div className="flex items-center gap-4">
                <img src={purpleCheck} alt="" className='purple-check' />
                <img src={whiteCheck} alt="" className='hidden white-check' />
                <p className="text-[15px] font-semibold text-[#454545]">20,000 Visitors</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={purpleCheck} alt="" className='purple-check' />
                <img src={whiteCheck} alt="" className='hidden white-check' />
                <p className="text-[15px] font-semibold text-[#454545]">Create Unlimited Widgets</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={purpleCheck} alt="" className='purple-check' />
                <img src={whiteCheck} alt="" className='hidden white-check' />
                <p className="text-[15px] font-semibold text-[#454545]">CMS Integration</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={purpleCheck} alt="" className='purple-check' />
                <img src={whiteCheck} alt="" className='hidden white-check' />
                <p className="text-[15px] font-semibold text-[#454545]">All Widget Types</p>
              </div>
            </div>
            <button className="bg-[#5A01CB] text-white font-semibold text-[15px] rounded-md h-[57px] w-full get-pkg-btn">
              Get this package
            </button>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 px-8 lg:px-[50px] pt-[50px] pb-8 rounded-xl bg-white hover:bg-[#5A01CB] transition-all duration-150 ease-out hover:text-white price-card">
            <p className="text-[24px] font-semibold mb-1">Starter Plan</p>
            <div className="flex items-end gap-1">
              <span className="text-[51px] font-bold leading-none">$36</span>
              <span>/month</span>
            </div>
            <div className="py-[48px] space-y-6 min-h-[306px] price-card-content">
              <div className="flex items-center gap-4">
                <img src={purpleCheck} alt="" className='purple-check' />
                <img src={whiteCheck} alt="" className='hidden white-check' />
                <p className="text-[15px] font-semibold text-[#454545]">20,000 Visitors</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={purpleCheck} alt="" className='purple-check' />
                <img src={whiteCheck} alt="" className='hidden white-check' />
                <p className="text-[15px] font-semibold text-[#454545]">Create Unlimited Widgets</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={purpleCheck} alt="" className='purple-check' />
                <img src={whiteCheck} alt="" className='hidden white-check' />
                <p className="text-[15px] font-semibold text-[#454545]">CMS Integration</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={purpleCheck} alt="" className='purple-check' />
                <img src={whiteCheck} alt="" className='hidden white-check' />
                <p className="text-[15px] font-semibold text-[#454545]">All Widget Types</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={purpleCheck} alt="" className='purple-check' />
                <img src={whiteCheck} alt="" className='hidden white-check' />
                <p className="text-[15px] font-semibold text-[#454545]">Integrations</p>
              </div>
            </div>
            <button className="bg-[#5A01CB] text-white font-semibold text-[15px] rounded-md h-[57px] w-full get-pkg-btn">
              Get this package
            </button>
          </div>
          <div className="col-span-12 md:col-span-4 px-8 lg:px-[50px] pt-[50px] pb-8 rounded-xl bg-white hover:bg-[#5A01CB] transition-all duration-150 ease-out hover:text-white price-card">
            <p className="text-[24px] font-semibold mb-1">Starter Plan</p>
            <div className="flex items-end gap-1">
              <span className="text-[51px] font-bold leading-none">$11</span>
              <span>/month</span>
            </div>
            <div className="py-[48px] space-y-6 min-h-[306px] price-card-content">
              <div className="flex items-center gap-4">
                <img src={purpleCheck} alt="" className='purple-check' />
                <img src={whiteCheck} alt="" className='hidden white-check' />
                <p className="text-[15px] font-semibold text-[#454545]">20,000 Visitors</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={purpleCheck} alt="" className='purple-check' />
                <img src={whiteCheck} alt="" className='hidden white-check' />
                <p className="text-[15px] font-semibold text-[#454545]">Create Unlimited Widgets</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={purpleCheck} alt="" className='purple-check' />
                <img src={whiteCheck} alt="" className='hidden white-check' />
                <p className="text-[15px] font-semibold text-[#454545]">CMS Integration</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={purpleCheck} alt="" className='purple-check' />
                <img src={whiteCheck} alt="" className='hidden white-check' />
                <p className="text-[15px] font-semibold text-[#454545]">All Widget Types</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={purpleCheck} alt="" className='purple-check' />
                <img src={whiteCheck} alt="" className='hidden white-check' />
                <p className="text-[15px] font-semibold text-[#454545]">Dedicated Manager</p>
              </div>
            </div>
            <button className="bg-[#5A01CB] text-white font-semibold text-[15px] rounded-md h-[57px] w-full get-pkg-btn">
              Get this package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;