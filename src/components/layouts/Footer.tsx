import {NavLink} from 'react-router-dom';
import footerLogo from '../../assets/images/footer-logo.svg'
import whiteArrow from '../../assets/images/white-arrow.svg'
import language from '../../assets/images/lang.svg'
import EUR from '../../assets/images/eur.svg'
import human from '../../assets/images/human.svg'

const Footer = () => {
  return (
    <div className="bg-[#111617] pt-[50px] pb-[40px] text-white">
      <div className="custom-container">
        <div className="grid grid-cols-3 lg:grid-cols-6 pb-[60px] border-b border-gray-700 gap-y-3 lg:gap-y-0">
          <div>
            <NavLink to="/"><img src={footerLogo} alt="Logo" /></NavLink>
          </div>
          <div className='space-y-[30px]'>
            <div className='font-medium'>Product</div>
            <NavLink className="block font-light" to="/product">Pricing</NavLink>
            <NavLink className="block font-light" to="/product">Overview</NavLink>
            <NavLink className="block font-light" to="/product">Browse</NavLink>
            <NavLink className="block font-light" to="/product">Accessibility</NavLink>
          </div>
          <div className='space-y-[30px]'>
            <div className='font-medium'>Solutions</div>
            <NavLink className="block font-light" to="/product">Brainstorming</NavLink>
            <NavLink className="block font-light" to="/product">Ideation</NavLink>
            <NavLink className="block font-light" to="/product">Wireframing</NavLink>
            <NavLink className="block font-light" to="/product">Research</NavLink>
          </div>
          <div className='space-y-[30px]'>
            <div className='font-medium'>Resources</div>
            <NavLink className="block font-light" to="/product">Help Center</NavLink>
            <NavLink className="block font-light" to="/product">Blog</NavLink>
            <NavLink className="block font-light" to="/product">Tutorials</NavLink>
            <NavLink className="block font-light" to="/product">FAQs</NavLink>
          </div>
          <div className='space-y-[30px]'>
            <div className='font-medium'>Support</div>
            <NavLink className="block font-light" to="/product">Contact Us</NavLink>
            <NavLink className="block font-light" to="/product">Developers</NavLink>
            <NavLink className="block font-light" to="/product">Documentation</NavLink>
            <NavLink className="block font-light" to="/product">Integrations</NavLink>
          </div>
          <div className='space-y-[30px]'>
            <div className='font-medium'>Company</div>
            <NavLink className="block font-light" to="/product">About</NavLink>
            <NavLink className="block font-light" to="/product">Press</NavLink>
            <NavLink className="block font-light" to="/product">Events</NavLink>
            <NavLink className="block font-light" to="/product">
              <div className="flex items-center gap-2">
                <p>Request Demo</p>
                <img src={whiteArrow} alt="Request Demo" className='hidden sm:block' />
              </div>
            </NavLink>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 md:pt-10 text-sm">
          <div className='font-light'>@{new Date().getFullYear()}. All rights reserved.</div>
          <div className="flex sm:flex-row items-center gap-2 sm:gap-4 md:gap-8">
              <NavLink className="block font-light" to="">Terms</NavLink>
              <NavLink className="block font-light" to="">Privacy</NavLink>
              <NavLink className="block font-light" to="">Contact</NavLink>
              <button className="flex items-center gap-1 md:gap-2">
                <img src={language} alt="" />
                <span>EN</span>
              </button>
              <button className="flex items-center gap-1 md:gap-2">
                <img src={EUR} alt="" />
                <span>EUR</span>
              </button>
              <img src={human} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;