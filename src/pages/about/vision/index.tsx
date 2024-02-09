import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import bibleImage from '@/assets/bibles-300x169.jpg';
import image1 from '@/assets/mission-and-vision.jpg';
import image2 from '@/assets/1509081_10152377485068872_2532846506582087511_n-300x199.jpg';
import image3 from '@/assets/WRAC_BDI_2016-042-300x199.jpg';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Vision = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      className=' bg-gray-20  flex flex-col items-start w-5/6 mx-auto text-xl mb-40'
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
        className='mx-auto'
      >
        <div className='mt-64'>
          <HText>Our Vision and Mission</HText>
        </div>
      </motion.div>
      {/* Content */}
      <h2 className='text-2xl font-semibold mt-12'>
        West Ryde Anglican Church Vision for 2024
      </h2>
      <h3 className='text-2xl font-semibold mt-6'>Vision:</h3>
      <p>
        By the grace of God, we pray that West Ryde Anglican Church will see the
        Gospel of Jesus Christ transform our local community, by bringing
        together people of all backgrounds as one family under Christ.
      </p>

      <h3 className='text-2xl font-semibold mt-6'>Mission:</h3>
      <p>
        To make disciples of Jesus Christ (Matthew 28:18-20) Then Jesus came to
        them and said, “All authority in heaven and earth has been given to me.
        Therefore, go and make disciples of all nations, baptising them in the
        name of the Father and of the Son and of the Holy Spirit, and teaching
        them to obey everything I have commanded you. And surely I am with you
        always, to the very end of the age.” Matthew 28:18-20 (NIV)
      </p>
      <div className='mt-20 text-center'>
        <HText>Core Activities:</HText>
      </div>

      <div className='md:flex justify-between gap-10 md:mt-6'>
        <div className='md:w-4/6'>
          <ul>
            <li>1. Sunday Services (including Kids Church and Youth Group),</li>
            <li>2. Community Groups,</li>
            <li>3. 1 to 1 Discipleship.</li>
          </ul>
          <p className='mt-10'>
            At the centre of these activities will be the proclamation of God’s
            word, prayer and serving one another. We plan to multiply
            congregations, community group and 1 to 1 Discipleship units as the
            church continues to the grow, with the possibility of off-site
            congregations as required, as well as a commitment to developing the
            current site for ministry according to need
          </p>
          <p className='mt-10'>
            To facilitate this, the church has the following three strategy
            teams: Outreach, Belonging and Maturity. These teams facilitate
            ministry within the core activities and organise extra activities to
            achieve our mission and vision.
          </p>
        </div>

        <img
          className=' object-cover md:w-2/6 rounded-xl'
          src={bibleImage}
          alt='A cross stands out against a pink sky, creating a striking silhouette.'
        />
      </div>

      <div className='mt-12 flex flex-col  '>
        <div className='flex flex-col gap-6'>
          <p>
            <span className='font-semibold'>Outreach Team:</span> our purpose is
            to help our church work together to connect with people in our local
            area and tell them about Jesus.
          </p>
          <p>
            <span className='font-semibold'>Belonging Team:</span> our purpose
            is to welcome newcomers and build meaningful Christian relationships
            by creating a culture of welcoming through quality follow-up of
            newcomers, hospitality and social events.
          </p>
          <p>
            <span className='font-semibold'>Maturity Team:</span> our purpose is
            to see those who belong to the church become mature disciples of
            Jesus Christ, by encouraging them to participate in activities that
            build them up in their faith. This includes community groups,
            meeting 1 to 1, conferences and training events.
          </p>
        </div>

        <div className='flex h-36 md:h-80 md:gap-32 justify-between  mt-12 '>
          <img
            className=' object-cover w-2/6 rounded-xl'
            src={image1}
            alt='Three women standing under a tent with a table.'
          />
          <img
            className=' object-cover w-2/6 rounded-xl'
            src={image2}
            alt='A diverse group of individuals joyfully singing together in a room filled with music.'
          />

          <img
            className=' object-cover w-2/6 rounded-xl'
            src={image3}
            alt='A man delivering a speech to a large audience, captivating their attention with his words and presence.'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Vision;
