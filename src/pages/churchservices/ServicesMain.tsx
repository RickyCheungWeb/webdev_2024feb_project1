import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import image1 from '@/assets/10am-church.jpg';


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ServicesMain = ({ setSelectedPage }: Props) => {
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
          <HText>Services</HText>
        </div>

        <p className=' mt-12 mb-12'>
          We have three services on Sunday at 8am, 10am and 6pm. Each meeting
          lasts up to 90 minutes. During this time, we read from the Bible and
          listen to the passage explained by one of our ministers or other
          speakers. We sing praises to God and pray for our church, our
          community and the world. We meet together to encourage one another in
          the faith, to remind each other of our salvation in Jesus Christ and
          to bring glory to God by publicly proclaiming His Name. We would love
          to see you in person. We also have a Zoom option for those unable to
          attend on-site.
        </p>
        <img className='rounded-xl' src={image1} alt='' />
      </motion.div>
    </motion.div>
  );
};

export default ServicesMain;
