import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import image1 from '@/assets/WRAC_20141214-028-768x510.jpg';
import { Link } from 'react-router-dom';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ResourcesMain = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      className='text-xl md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 mb-40'
    >
      {/* HEADER */}
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className='md:my-5 md:w-3/5'
      >
        <div className='md:mt-64 mt-32'>
          <HText>Resources</HText>
        </div>

        <p className=' mt-12 mb-12'>
          <span className='text-2xl font-semibold underline hover:text-secondary-500'>
            <Link to='/sermons'>Sermons:</Link>
          </span>{' '}
          details of our current and past teaching program
        </p>
        <p className=' mt-12 mb-12'>
          <span  className=' text-2xl font-semibold underline hover:text-secondary-500'>Church Policies:</span> view or download copies of the following
          guidelines
        </p>
        <ul className='px-10 list-disc space-y-2'>
          <li>Working with Food</li>
          <li> Alcohol</li>
          <li> Kids’ Church </li>
          <li>Privacy </li>
          <i>Occupational Health and Safety </i>
        </ul>
        <p className='text-2xl mt-12 mb-12'>
          <span  className='font-semibold underline hover:text-secondary-500'>Give: </span>how to support the work of ministry at West Ryde
          Anglican Church
        </p>
        <img className='rounded-xl' src={image1} alt='' />
      </motion.div>
    </motion.div>
  );
};

export default ResourcesMain;
