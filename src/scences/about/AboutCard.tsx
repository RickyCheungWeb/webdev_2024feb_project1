import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

// StaggerAnimation#3
const childrenVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  image: ReactElement;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
  link: string;
};

const AboutCard = ({
  image,
  title,
  description,

  link,
}: Props) => {
  return (
    // StaggerAnimation#4
    <motion.div
      variants={childrenVariant}
      className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center bg-white'
    >
      <div className='mb-4 flex flex-col justify-center'>
        <div className=''>{image}</div>

        <h4 className='font-bold'>{title}</h4>
        <p className='my-3'>{description}</p>
        {/* <AnchorLink
          className='text-xl font-bold text-primary-500 underline hover:text-secondary-500'
          onClick={() => setSelectedPage(SelectedPage.About)}
          href={link}
        > */}

        <NavLink
          className='text-xl rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
          to={`${link}`}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          Learn More
        </NavLink>
        {/* </AnchorLink> */}
      </div>
    </motion.div>
  );
};

export default AboutCard;
