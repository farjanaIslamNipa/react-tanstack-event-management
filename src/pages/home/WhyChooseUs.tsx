import whyChooseImg from '../../assets/images/why-coose-bg.jpg'
import research from '../../assets/images/re-search.svg'
import support from '../../assets/images/24-seven.svg'
import expert from '../../assets/images/expert.svg'
import reWork from '../../assets/images/re-work.svg'

const WhyChooseUs = () => {
  return (
    <div className="why-choose-bg mt-8 md:mt-16 lg:mt-24">
    <div className="custom-container">
      <div className="pt-md-5 pt-sm-4 pt-0 xl:pb-8 lg:pb-3 pb-0">
        <div className="hidden lg:flex justify-end">
          <img src={whyChooseImg} alt="" className="why-choose-img h-[600px]" />
        </div>
        <div className="why-choose-box bg-white py-6 sm:py-14 mb-4 px-5 sm:px-10 rounded-3xl w-full lg:w-[700px] xl:w-[800px]">
          <div className="why-choose-title ml-3 md:ml-6 mb-4 md:mb-6"><h1 className="pt-3 section-title">Why choose us?</h1></div>
          <div className="sm:px-5 px-2">
            <p className="text-base md:text-lg">Your satisfaction is our goal. If you’re not happy. Please let us know, we will work with you to make it right. </p>
            <div className="grid grid-cols-2 gap-0 sm:gap-6 mt-5 md:mt-8">
              <div className="bg-white light-box-shadow h-full py-5 px-1 md:px-4">
                <div className="flex items-center">
                  <div>
                    <img src={research} alt="" className="h-10 md:h-12" />
                  </div>
                  <p className="mb-0 ml-2 md:ml-3 font-bold text-sm md:text-base">Resource <br />Research</p>
                </div>
              </div>
              <div className="bg-white light-box-shadow h-full py-4 px-1 md:px-4">
                <div className="flex items-center">
                  <div>
                  <img src={support} alt="" className="h-10 md:h-12" />
                  </div>
                  <p className="mb-0 ml-2 md:ml-3 font-bold text-sm md:text-base">24/7 <br />Support</p>
                </div>
              </div>
              <div className="bg-white light-box-shadow h-full py-4 px-1 md:px-4">
                <div className="flex items-center">
                  <div>
                  <img src={expert} alt="" className="h-10 md:h-12" />
                  </div>
                  <p className="mb-0 ml-2 md:ml-3 font-bold text-sm md:text-base">Expert  <br />Professional</p>
                </div>
              </div>
              <div className="bg-white light-box-shadow h-full py-4 px-1 md:px-4">
                <div className="flex items-center">
                  <div>
                  <img src={reWork} alt="" className="h-10 md:h-12" />
                  </div>
                  <p className="mb-0 ml-2 md:ml-3 font-bold text-sm md:text-base">Rework  <br />Assurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default WhyChooseUs;