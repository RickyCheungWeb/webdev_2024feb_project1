import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

type Props = {
  name: string;
  mainlink: string;
  submenu: boolean;
  sublinks: Array<any>;
};

const MobileSubmenu = ({ submenu, sublinks, mainlink, name }: Props) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div className=''>
      <button
        className='flex justify-start gap-5 items-center p-2'
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <div className='w-[200px] flex items-center justify-between hover:bg-secondary-500 rounded-2xl'>
          <h1>
            <NavLink
              to={mainlink}
              onClick={() => {
                window.scroll(0, 0);
              }}
              className={({ isActive }) =>
                isActive
                  ? 'bg-primary-500 text-white rounded-2xl  hover:bg-secondary-500 px-1'
                  : ' hover:bg-secondary-500 rounded-2xl px-1'
              }
            >
              {name}
            </NavLink>
          </h1>
          {!subMenuOpen ? (
            <ChevronDownIcon className='h-6 w-6' />
          ) : (
            <ChevronUpIcon className='h-6 w-6' />
          )}
        </div>
      </button>

      <li className='flex flex-col'>
        {subMenuOpen &&
          submenu &&
          sublinks.map((sublink, index) => (
            <a
              href={sublink.link}
              className='text-lg hover:bg-secondary-500  p-2 rounded-md'
              key={index}
            >
              {sublink.name}
            </a>
          ))}
      </li>
    </div>
  );
};

export default MobileSubmenu;
