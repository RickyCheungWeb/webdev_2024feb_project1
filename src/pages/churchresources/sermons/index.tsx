import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import image1 from '@/assets/listen-01-600x330.png';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Sermons = ({ setSelectedPage }: Props) => {
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
          <HText>Sermons</HText>
        </div>
        <img className='rounded-xl' src={image1} alt='' />
        <p className=' mt-12 mb-12'>
          At West Ryde Anglican church, all our preaching is based on the Bible.
          We have four preaching series per year, which are aligned with the
          school terms, plus a summer series in January. They form the basis for
          the Sunday sermons, as well as the more in-depth studies done within
          our Community Groups.
          <p className=' mt-12 mb-12'>
            If you are a regular member and would like a written transcript of
            the sermon, please email the office. We welcome questions, comments
            and feedback from regular church members.
          </p>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Sermons;
