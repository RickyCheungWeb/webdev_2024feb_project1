import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import Carousel from '@/shared/Carousel';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

import john from '@/assets/John-Artwork.jpg';
import act from '@/assets/Acts-Artwork-1.jpg';
import play from '@/assets/Play-and-Discover-Image.jpg';

import catalyst from '@/assets/catalyst-logo.jpg';
import kids from '@/assets/wrac-kids-logo.jpg';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const slides = [
    { id: 1, image: john },
    { id: 2, image: act },
    { id: 3, image: play },
  ];
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  return (
    <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0 '>
      {/* HEADINGS */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
      >
        {/* MAIN HEADER */}
        <div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className='z-10 mt-32'
          >
            <div className='relative'>
              <div className=' font-bold text-6xl '>
                <h2>Outreach</h2>
                <h2>Belonging</h2>
                <h2>Maturity</h2>
              </div>
            </div>

            <div>
              <p className='mt-8 text-xl'>
                We are a Bible-believing, Jesus-centred church in the Northern
                Districts of Sydney. We welcome all people to join our services
                at 8am, 10am and 6pm on Sundays.
              </p>
            </div>
          </motion.div>
          {/* ACTION */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className='mt-8 flex items-center gap-8  '
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Getting There
            </ActionButton>
            <AnchorLink
              className='text-xl font-bold text-primary-500 underline hover:text-secondary-500'
              onClick={() => setSelectedPage(SelectedPage.About)}
              href={`#${SelectedPage.About}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* CAROUSEL */}
        <div
          className='flex basis-4/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end 
       '
        >
          <Carousel autoSlide={true} autoSlideInterval={5000}>
            {[
              ...slides.map((slide) => (
                <img key={slide.id} src={slide.image} />
              )),
            ]}
          </Carousel>
        </div>
      </motion.div>
      {/* Programs */}

      {isAboveMediumScreens && (
        <div className='h-[150px] w-full bg-primary-100 py-10'>
          <div className='mx-auto w-5/6 '>
            <div className=' flex w-2/5 items-center justify-between '>
              <AnchorLink
                onClick={() => setSelectedPage(SelectedPage.About)}
                href={`#${SelectedPage.Connect}`}
              >
                <img
                  className='max-w-40 h-[90px] object-cover'
                  src={catalyst}
                  alt='program-logo'
                />
              </AnchorLink>
              <AnchorLink
                onClick={() => setSelectedPage(SelectedPage.About)}
                href={`#${SelectedPage.Connect}`}
              >
                <img
                  className='max-w-40 h-[90px] object-cover'
                  src={kids}
                  alt='program-logo'
                />
              </AnchorLink>
              <AnchorLink
                onClick={() => setSelectedPage(SelectedPage.About)}
                href={`#${SelectedPage.Connect}`}
              >
                <img
                  className='max-w-40 h-[90px] object-cover'
                  src={catalyst}
                  alt='program-logo'
                />
              </AnchorLink>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
