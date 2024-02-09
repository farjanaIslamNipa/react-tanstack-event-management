import bannerImg from '../../assets/images/header-banner.jpg'
import {motion} from 'framer-motion';

const HeroSection = () => {
  const parent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      duration: 0.1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.5
      }
    }
  }
  
  const children = {
    hidden: { opacity: 0, y: -200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <motion.header variants={parent} initial="hidden" animate="visible" className="custom-container text-center mt-8 md:mt-14">
      <motion.h1 variants={children} className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[64px] font-extrabold uppercase tracking-tight leading-[35px] sm:leading-[45px] md:leading-[62px] lg:leading-[68px]">Brand New event Packages</motion.h1>
      <motion.h3 variants={children} className="gradient-text mb-1 text-[30px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-extrabold bg-gradient-to-r from-[#FE8900] to-[#0122CB] inline-block text-transparent bg-clip-text">For Winter</motion.h3>
      <motion.p variants={children} className="text-sm sm:text-base md:text-lg max-w-[38ch] sm:max-w-[68ch] mx-auto">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</motion.p>
      <motion.div variants={children} className="mt-5 md:mt-8 max-w-[1095px] mx-auto">
        <img src={bannerImg} alt="Event" className='w-full h-auto' />
      </motion.div>
    </motion.header>
  );
};

export default HeroSection;