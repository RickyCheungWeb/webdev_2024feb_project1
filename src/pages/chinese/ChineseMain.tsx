import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import image1 from '@/assets/DSC00013.jpg';
import image2 from '@/assets/CNY-kenny.jpg';
import image3 from '@/assets/11021519_10153129425703872_2873839529286879251_n.jpg';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ChineseMain = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      className='text-xl md:flex-row flex flex-col mx-auto w-5/6 items-center justify-center md:h-5/6 mb-40'
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
        <div className='mt-64'>
          <HText>中文 (Chinese)</HText>
        </div>

        <p className=' mt-6 mb-12'>
          Many people of Chinese background call West Ryde Anglican their home.
          For those who are not confident in English, there are various events,
          introductory courses and study groups throughout the year which are
          conducted in Mandarin or Cantonese. On special occasions, our
          Chinese-speaking brothers and sisters contribute to the 10am service
          with prayers, testimonies and songs in Mandarin.
        </p>
        <div className='md:flex  md:gap-5 space-y-5 md:space-y-0 justify-between  mt-12 '>
          <img
            className=' object-cover  rounded-xl  md:w-2/6 w-5/6 mx-auto h-[550px]'
            src={image1}
            alt='Three women standing under a tent with a table.'
          />
          <img
            className=' object-cover  rounded-xl  md:w-2/6 w-5/6 mx-auto h-[550px]'
            src={image2}
            alt='A diverse group of individuals joyfully singing together in a room filled with music.'
          />

          <img
            className=' object-cover  rounded-xl  md:w-2/6 w-5/6 mx-auto h-[550px]'
            src={image3}
            alt='A man delivering a speech to a large audience, captivating their attention with his words and presence.'
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChineseMain;
