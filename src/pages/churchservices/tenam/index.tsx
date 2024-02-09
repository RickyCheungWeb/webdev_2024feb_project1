import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import image1 from '@/assets/564460_10154078343258872_2972362128660932194_n-300x225.jpg';
import image2 from '@/assets/WRAC_May2016-045-768x510.jpg';
import image3 from '@/assets/Dundas-water-park-picnic-Jan-2021.jpeg';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const TenAm = ({ setSelectedPage }: Props) => {
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
          <HText>10am Church with Kids’ Church</HText>
        </div>
      </motion.div>
      {/* Content */}
      <div className='gap-10 md:mt-6'>
        <p className='text-xl mt-5'>
          10am church is a warm, contemporary and international gathering, where
          all ages and nationalities are welcome. We believe in explaining God’s
          word in the Bible in a way that everyone can understand.
        </p>
        <p className='text-xl mt-6 '>
          The service starts with everyone together in the church, joining in
          singing and hearing a kids’ talk. Children then go out to ‘kids’
          church’, where they are taught according to age-group (pre-school to
          year 5). A bible study group is run for Years 6 to 8 at that time. A
          crèche operates for younger children. Parents with infants too young
          for creche are welcome to use a sound-proof room at the back of the
          church, where they can see and hear the service and use the sofas and
          toys provided.
        </p>
        <p className='text-xl mt-6'>
          Written copies of the sermon are provided during this service, so you
          can follow along if English is not your first language, or if you have
          hearing impairment.
        </p>
        <p className='text-xl mt-6'>
          We share morning tea after the service, and have regular lunches and
          activities together throughout the year.
        </p>
      </div>
      <div className='md:flex-row flex flex-col gap-5 mt-6'>
        {' '}
        <img
          className=' object-cover  rounded-xl  md:w-2/6 mx-auto h-[340px] '
          src={image1}
          alt=''
        />
        <img
          className=' object-cover  rounded-xl  md:w-2/6 mx-auto h-[300px] md:h-[340px]'
          src={image2}
          alt=''
        />
        <img
          className=' object-cover  rounded-xl  md:w-2/6 mx-auto h-[300px] md:h-[340px]'
          src={image3}
          alt=''
        />
      </div>
    </motion.div>
  );
};

export default TenAm;
