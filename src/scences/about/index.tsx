import { AboutType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import services from '@/assets/Services-02-600x330.png';
import sermons from '@/assets/listen-01-600x330.png';
import beliefs from '@/assets/beliefs-600x300.png';
import mission from '@/assets/mission-and-vision.jpg';
import bibleteam from '@/assets/aaron-burden-535Npq1wFG8-unsplash.jpg';
import AboutCard from './AboutCard';

const aboutitems: Array<AboutType> = [
  {
    image: <img className='h-72 w-full object-cover' src={services} alt='' />,
    title: 'Services',
    description:
      'We have three services on Sunday at 8am, 10am and 6pm. Each meeting lasts up to 90 minutes. During this time, we read from the Bible and listen to the passage explained by one of our ministers or other speakers.',
    link: '/servicesmain',
  },
  {
    image: <img className=' h-72 w-full object-cover' src={sermons} alt='' />,
    title: 'Sermons',
    description:
      'At West Ryde Anglican church, all our preaching is based on the Bible. We have four preaching series per year, which are aligned with the school terms, plus a summer series in January. They form the basis for the Sunday.',
    link: '/resourcesmain/sermons',
  },
  {
    image: <img className='h-72 w-full object-cover' src={beliefs} alt='' />,
    title: 'Our Beliefs',
    description:
      'We believe in one God, who makes and sustains everything. We believe that God exists in 3 persons who have complete unity– the Father, the Son (Jesus Christ), and the Holy Spirit. We believe that all humans have by nature.',
    link: '/aboutmain/beliefs',
  },
  {
    image: <img className='h-72 w-full object-cover' src={mission} alt='' />,
    title: 'Our Mission and Vision',
    description:
      'By the grace of God, we pray that West Ryde Anglican Church will see the Gospel of Jesus Christ transform our local community, by bringing together people of all backgrounds as one family under Christ.',
    link: '/aboutmain/vision',
  },
  {
    image: <img className='h-72 w-full object-cover' src={bibleteam} alt='' />,
    title: 'Gospel Teams (Feature Not Ready)',
    description:
      'Gospel Teams are smaller, usually home-based, mid-week meetings that connect people together at West Ryde Anglican Church for encouragement, accountability, Bible study and prayer.',
    link: '/aboutmain/vision',
  },
];

// StaggerAnimation#1
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id='about' className='bg-gray-20 w-full min-h-full  md:py-36 text-xl '>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.About)}
        className=''
      >
        <div className='w-5/6 mx-auto'>
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
            <HText>ABOUT US.</HText>
          </motion.div>

          {/* ABOUT CARDS */}
          {/* // StaggerAnimation#2 */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0 }}
            variants={container}
            className='md:grid md:grid-cols-3 items-center justify-between gap-8 me-5'
          >
            {aboutitems.map((aboutitem: AboutType) => (
              <AboutCard
                key={aboutitem.title}
                image={aboutitem.image}
                title={aboutitem.title}
                description={aboutitem.description}
                setSelectedPage={setSelectedPage}
                link={aboutitem.link}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
