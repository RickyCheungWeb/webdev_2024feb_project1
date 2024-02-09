import HText from '@/shared/HText';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import beliefs from '@/assets/beliefs-600x300.png';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Beliefs = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.About)}
      className='h-full flex flex-col  justify-center items-center w-5/6 mx-auto mb-40'
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
          <HText>Our Beliefs</HText>
        </div>
      </motion.div>
      {/* Content */}
      <div className='md:flex gap-10 md:mt-6'>
        <img
          className=' object-cover'
          src={beliefs}
          alt='A cross stands out against a pink sky, creating a striking silhouette.'
        />
        <p className='text-xl '>
          <ul className='mt-10 space-y-5 list-disc'>
            <li>
              We believe in one God, who makes and sustains everything. We
              believe that God exists in 3 persons who have complete
              unity&ndash; the Father, the Son (Jesus Christ), and the Holy
              Spirit.
            </li>
            <li>
              We believe that all humans have by nature rejected God, and that
              the Bible calls this &apos;sin&apos;. God&apos;s punishment for
              sin is eternal death.
            </li>
            <li>
              We believe that Jesus Christ died on the cross, in order to take
              the punishment for our sin and save us from eternal death. Through
              trusting in Jesus Christ alone, we receive God&apos;s free gift of
              eternal salvation and will live in restored relationship with God
              forever.
            </li>
            <li>
              We believe that God commands us in the Bible to encourage all
              people, everywhere, to trust in Jesus Christ as the one who saves.
            </li>
          </ul>
          We share these core beliefs with all the churches in the Sydney region
          who call themselves “Evangelical Anglican churches”. A full statement
          of our beliefs can be found at this link. If you are interested to
          find out more, please talk to one of our ministers.
        </p>
      </div>
    </motion.div>
  );
};

export default Beliefs;
