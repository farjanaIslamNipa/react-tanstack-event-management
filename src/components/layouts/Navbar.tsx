import {NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo.svg'
import menuIcon from '../../assets/images/hamburger.svg'
import close from '../../assets/images/close.svg'
import {useState} from 'react';
import cn from '../../utils/cn';


const Navbar = () => {
  const [expand, setExpand] = useState(false)
  return (
    <div className='bg-black md:bg-white'>
      <div className='custom-container py-6 bg-white'>
        <div className=''>
          <nav className="flex justify-between items-center">
            <div>
              <NavLink to="/">
                <img src={logo} alt="Logo" />
              </NavLink>
            </div>
            <div className={cn('w-0 md:w-auto small-device-collapse-nav', {'w-full' : expand})}>
              <div className='flex flex-col md:flex-row items-start md:items-center gap-2 pt-4 md:pt-0'>
              {
                expand && <div className='absolute right-3 top-6'>
                <button onClick={() => setExpand(!expand)}>
                  <img src={close} alt="Close" />
                </button>
              </div>
              }
                <NavLink to="/" className="text-base font-medium px-6 md:px-2 py-3">Home</NavLink>
                <NavLink to="/" className="text-base font-medium px-6 md:px-2 py-3">About</NavLink>
                <NavLink to="/" className="text-base font-medium px-6 md:px-2 py-3">Contact</NavLink>
              </div>
            </div>
            <div className='block md:hidden'>
              <button onClick={() => setExpand(!expand)}>
                <img src={menuIcon} alt="Menu" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;