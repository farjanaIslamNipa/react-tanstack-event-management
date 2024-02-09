import checkMark from '../../assets/images/grey-check.svg'
import galleryIconTop from '../../assets/images/gallery-icon-top.png'
import galleryIconBottom from '../../assets/images/gallery-icon-bottom.svg'
import gallery1 from '../../assets/images/gallery-1.png'
import gallery2 from '../../assets/images/gallery-2.png'
import gallery3 from '../../assets/images/gallery-3.png'
import gallery4 from '../../assets/images/gallery-4.png'
import gallery5 from '../../assets/images/gallery-5.png'
import gallery6 from '../../assets/images/gallery-6.png'
import gallery7 from '../../assets/images/gallery-7.png'
import gallery8 from '../../assets/images/gallery-8.png'
import gallery9 from '../../assets/images/gallery-9.png'
import gallery10 from '../../assets/images/gallery-10.png'
import {motion} from 'framer-motion'
import useScrollGrow from '../../hooks/userScrollGlow'

const GallerySection = () => {
  const {ref, style} = useScrollGrow()
  return (
    <div className="custom-container pt-0 lg:pt-10 pb-16 sm:pb-[100px] lg:pb-[160px] relative z-40">
      <img src={galleryIconTop} alt="" className='h-[100px] lg:h-[175px] absolute left-[2%] sm:left-[15%] md:left-[42%] top-[42%] sm:top-[35%] md:top-[-20px] hidden sm:block' />
      <img src={galleryIconBottom} alt="" className='h-[100px] lg:h-[175px] absolute right-[50px] lg:right-[20px] bottom-[50px] lg:bottom-[30px] hidden sm:block' />
      <div className="grid grid-cols-12 items-center gap-4">
        <div className='col-span-12 md:col-span-6 xl:col-span-5'>
          <h1 className="section-title text-start">Gallery</h1>
          <p className="text-base md:text-lg text-[#566B84] py-[20px] md:py-[35px]">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
          <div className='space-y-4 pt-2'>
            <div className="flex items-center gap-x-2 lg:gap-x-[18px] tracking-wide">
              <img src={checkMark} alt="Check mark" />
              <p className='text-base lg:text-lg'>Lunch and Snack</p>
            </div>
            <div className="flex items-center gap-x-2 lg:gap-x-[18px] tracking-wide">
              <img src={checkMark} alt="Check mark" />
              <p className='text-base lg:text-lg'>Meet Event Speaker</p>
            </div>
            <div className="flex items-center gap-x-2 lg:gap-x-[18px] tracking-wide">
              <img src={checkMark} alt="Check mark" />
              <p className='text-base lg:text-lg'>Front Seat</p>
            </div>
            <div className="flex items-center gap-x-2 lg:gap-x-[18px] tracking-wide">
              <img src={checkMark} alt="Check mark" />
              <p className='text-base lg:text-lg'>One day pas access all lecture</p>
            </div>
          </div>
        </div>
        <motion.div style={style} ref={ref} className='col-span-12 md:col-span-6 xl:col-span-7'>
          {/* <img src={gallery} alt="" /> */}
          <div className="flex gap-2 justify-center md:justify-end mt-8 md:mt-0">
            <div className='flex flex-col justify-middle items-end mt-[100px]'>
              <div className='max-h[160px] md:max-h-[192px] max-w-[110px] md:max-w-[128px]'>
                <img className='h-full w-full object-cover' src={gallery1} alt="" />
              </div>
              <div className='max-h-[220px] md:max-h-[258px] max-w-[130px] md:max-w-[172px]'>
                <img className='h-full w-full object-cover' src={gallery2} alt="" />
              </div>
            </div>
            <div>
              <div className="max-h-[212px] max-w-[128px]">
                <img src={gallery3} alt="" className='h-full w-full object-cover' />
              </div>
              <div className="max-h-[215px] max-w-[128px]">
                <img src={gallery4} alt="" className='h-full w-full object-cover' />
              </div>
              <div className="max-h-[160px] max-w-[128px]">
                <img src={gallery5} alt="" className='h-full w-full object-cover' />
              </div>
            </div>
            <div className='mt-3'>
              <div className="max-h-[172px] max-w-[128px]">
                <img src={gallery6} alt="" className='h-full w-full object-cover' />
              </div>
              <div className="max-h-[172px] max-w-[128px]">
                <img src={gallery7} alt="" className='h-full w-full object-cover' />
              </div>
              <div className="max-h-[192px] max-w-[128px]">
                <img src={gallery8} alt="" className='h-full w-full object-cover' />
              </div>
            </div>
            <div className='mt-[65px]'>
              <div className="max-h-[255px] max-w-[160px]">
                <img src={gallery9} alt="" className='h-full w-full object-cover' />
              </div>
              <div className="max-h-[165px] max-w-[128px]">
                <img src={gallery10} alt="" className='h-full w-full object-cover' />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GallerySection;