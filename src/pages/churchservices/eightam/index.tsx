import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import beliefs from '@/assets/beliefs-600x300.png';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const EightAm = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      className='h-full flex flex-col justify-center  w-5/6 mx-auto mb-40'
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
        className=''
      >
        <div className='mt-64'>
          <HText>8am Traditional Church</HText>
        </div>
      </motion.div>
      {/* Content */}
      <div className='md:flex gap-10 md:mt-6'>
       
        <p className='text-xl mt-6 '>
          This is a traditional Anglican Prayer Book service. We sing
          traditional hymns with organ accompaniment, and take the Lord’s Supper
          together most weeks. Join us for morning tea in the foyer after the
          service.
        </p>
        <img
          className=' object-cover mt-6'
          src={beliefs}
          alt='A cross stands out against a pink sky, creating a striking silhouette.'
        />
      </div>
    </motion.div>
  );
};

export default EightAm;
