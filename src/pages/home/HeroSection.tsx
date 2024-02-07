import bannerImg from '../../assets/images/header-banner.jpg'
const HeroSection = () => {
  return (
    <header className="custom-container text-center mt-8 md:mt-14">
      <h1 className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[64px] font-extrabold uppercase tracking-tight leading-[35px] sm:leading-[45px] md:leading-[62px] lg:leading-[68px]">Brand New event Packages</h1>
      <h3 className="gradient-text mb-1 text-[30px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-extrabold bg-gradient-to-r from-[#FE8900] to-[#0122CB] inline-block text-transparent bg-clip-text">For Winter</h3>
      <p className="text-sm sm:text-base md:text-lg max-w-[38ch] sm:max-w-[68ch] mx-auto">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
      <div className="mt-5 md:mt-8 max-w-[1095px] mx-auto">
        <img src={bannerImg} alt="Event" className='w-full h-auto' />
      </div>
    </header>
  );
};

export default HeroSection;