import { ConnectType, SelectedPage } from '@/shared/types';
import image1 from '@/assets/adult-baptism-768x576.jpg';
import image2 from '@/assets/WRAC_BDI_2016-085-768x510.jpg';
import image3 from '@/assets/catalyst-logo.jpg';
import image4 from '@/assets/Dundas-water-park-picnic-Jan-2021.jpeg';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import ConnectCard from '@/scences/connect/ConnectCard';

const connectItems: Array<ConnectType> = [
  {
    title: 'New to Christianity',
    description:
      ' We rejoice that God has brought new adults, youth and families to our church each year, many of whom have come to faith and been baptised.',
    image: image1,
  },
  {
    title: 'Babies & Pre-schoolers',
    description:
      'At our 10am Sunday gatherings we have dedicated creche and pre-school programmes running every week.',
    image: image2,
  },
  {
    title: 'Kids',
    description:
      'West Ryde Anglican Church Kids (WRAC Kids) – filled with games, craft and music, it is a fun and safe place to spend time with old friends and meet new ones, to be challenged and to learn more about the Bible and what it means to follow Jesus.',
    image: image2,
  },
  {
    title: 'Youth',
    description:
      'Catalyst Youth is an awesome place for students in Years 7-12 to meet up with friends every Friday night, to have fun, eat food and to see what the Bible has to say about Jesus. We meet each Friday during school term from 7-9pm.',
    image: image3,
  },
  {
    title: 'Youth Adults',
    description:
      'Throughout the year there are a number of social events that are organised at both the congregational level and in the community group level.',
    image: image4,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Connect = ({ setSelectedPage }: Props) => {
  return (
    <section id='connect' className='w-full bg-primary-100 py-40 text-xl'>
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Connect)}>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='mx-auto w-5/6'
        >
          <div className='md:w-3/5'>
            <HText>CONNECT</HText>
            <p className='py-5'>
              We welcome opportunities to meet and share with people who want to
              find out more about Jesus Christ and what it means to follow him.
            </p>
          </div>
        </motion.div>
        <div className='mt-10 h-[300px] w-5/6 mx-auto overflow-x-auto overflow-y-hidden'>
          <ul className='w-[2800px] whitespace-nowrap'>
            {connectItems.map((item, index) => (
              <ConnectCard
                key={`${item.title}-${index}`}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
export default Connect;
