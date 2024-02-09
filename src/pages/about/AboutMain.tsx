import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import image1 from '@/assets/Maundy-thursday-2017-768x576.jpg'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutMain = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      className='text-xl flex flex-col md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 mb-40'
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
          <HText>ABOUT US</HText>
        </div>

        <p className=' mt-12 mb-12'>
          We are a Bible-believing, Jesus-centred church in the Northern
          Districts of Sydney. We are people of all ages, cultures and
          backgrounds, worshipping together as one family under Christ. We
          welcome all followers of Jesus, and visitors wanting to know more
          about the Christian faith. To find out more about who we are and what
          we believe, please use the relevant tabs.
        </p>
        <img className='rounded-xl'src={image1} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default AboutMain;
