import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { SocialIcon } from 'react-social-icons';
import Logo from '@/assets/Logo.png';

import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';

import FlyoutLink from '@/shared/FlyoutLink';
import { AboutUsContent } from './AboutUsContent';

import { mobileLinks } from './mobileLinks';

import MobileSubmenu from './MobileSubmenu';
import { ServicesContent } from './ServicesContent';

import { Link, NavLink } from 'react-router-dom';
import { ResourcesContent } from './ResourcesContent';
import { ChineseContent } from './ChineseContent';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT */}
            <Link to='/'>
              <img className='max-w-56 md:max-w-96' src={Logo} alt='logo' />
            </Link>

            {/* RIGHT */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* Links */}
                <div className={`${flexBetween} gap-8 text-xl`}>
                  <NavLink
                    to='/'
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-primary-500 text-white rounded-full px-2'
                        : 'px-2'
                    }
                  >
                    Home{' '}
                  </NavLink>

                  <FlyoutLink href='/aboutmain' FlyoutContent={AboutUsContent}>
                    <NavLink
                      to='/aboutmain'
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'bg-primary-500 text-white rounded-full px-2'
                          : 'px-2'
                      }
                    >
                      About
                    </NavLink>
                  </FlyoutLink>

                  <FlyoutLink
                    href='/servicesmain'
                    FlyoutContent={ServicesContent}
                  >
                    <NavLink
                      to='/servicesmain'
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'bg-primary-500 text-white rounded-full px-2'
                          : 'px-2'
                      }
                    >
                      Services
                    </NavLink>
                  </FlyoutLink>

                  <FlyoutLink
                    href='/resourcesmain'
                    FlyoutContent={ResourcesContent}
                  >
                    <NavLink
                      to='/resourcesmain'
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'bg-primary-500 text-white rounded-full px-2'
                          : 'px-2'
                      }
                    >
                      Resources
                    </NavLink>
                  </FlyoutLink>
                  <FlyoutLink
                    href='/chinesemain'
                    FlyoutContent={ChineseContent}
                  >
                    <NavLink
                      to='/chinesemain'
                      onClick={() => {
                        window.scroll(0, 0);
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? 'bg-primary-500 text-white rounded-full px-2'
                          : 'px-2'
                      }
                    >
                      中文(Chinese)
                    </NavLink>
                  </FlyoutLink>
                </div>

                {/* Right */}
                <div className={`${flexBetween} gap-8 text-xl  `}>
                  <SocialIcon
                    className='hover:opacity-50'
                    target='_blank'
                    url='https://www.facebook.com/westryde/'
                  />
                  <NavLink
                    className='text-xl rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
                    to='/contactusmain'
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
            ) : (
              <button
                className='rounded-full bg-secondary-500 p-2'
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className='h-6 w-6 text-white' />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
          {/* CLOSE ICON */}
          <div className='flex justify-end p-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className='h-6 w-6 text-gray-400' />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className='ml-[15%] flex flex-col gap-10 text-2xl'>
            <div>
              <button className='flex justify-start gap-5 items-center p-2'>
                <h1>
                  <NavLink
                    to='/'
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-primary-500 text-white rounded-2xl  hover:bg-secondary-500 px-1'
                        : ' hover:bg-secondary-500 rounded-2xl px-1'
                    }
                  >
                    Home
                  </NavLink>
                </h1>
              </button>
            </div>
            {mobileLinks.map((mobileLink) => (
              <MobileSubmenu
                key={mobileLink.name}
                name={mobileLink.name}
                submenu={mobileLink.submenu}
                sublinks={mobileLink.sublinks}
                mainlink={mobileLink.mainlink}
              />
            ))}
            <div>
              <button className='flex justify-start gap-5 items-center p-2'>
                <h1>
                  <NavLink
                    to='/contactusmain'
                    onClick={() => {
                      window.scroll(0, 0);
                    }}
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-primary-500 text-white rounded-2xl  hover:bg-secondary-500 px-1'
                        : ' hover:bg-secondary-500 rounded-2xl px-1'
                    }
                  >
                    Contact Us
                  </NavLink>
                </h1>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
