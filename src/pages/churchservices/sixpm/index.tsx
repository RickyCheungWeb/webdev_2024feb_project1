import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import beliefs from '@/assets/beliefs-600x300.png';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const SixPm = ({ setSelectedPage }: Props) => {
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
        <div className='mt-64 '>
          <HText>6pm Sunday Night Church</HText>
        </div>
      </motion.div>
      {/* Content */}
      <div className='gap-10 md:mt-6'>
        <p className='text-xl mt-6'>
          A friendly and vibrant gathering centred on the hearing and
          explanation of God’s word from the Bible. Many youth and young adults
          attend this service, but all ages are welcome. Parents with young
          children who do not wish to sit in the main church can see and hear
          the service from the sound-proof room at the back of the church, which
          has sofas and toys.
        </p>
        <p className='text-xl mt-6'>
          We have supper in the church before the service and have regular
          dinners together throughout the year.
        </p>
      </div>
    </motion.div>
  );
};

export default SixPm;
