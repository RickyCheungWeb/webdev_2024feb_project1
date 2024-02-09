import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import churchBuilding from '@/assets/WRAC_May2016-04-300x199.jpg';
import HText from '@/shared/HText';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUsMain = ({ setSelectedPage }: Props) => {
  const inputStyle =
    'mx-auto flex flex-col mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-gray-400 bg-white';

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <motion.div
      className='bg-gray-20  flex flex-col md:flex-row md:gap-6  w-5/6 mx-auto text-xl mb-40'
      onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
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
      >
        <div className='mt-64'>
          <HText>Contact Us</HText>
        </div>
        <p className='my-5 text-xl md:w-96'>
          We welcome opportunities to meet and share with people who want to
          find out more about Jesus Christ and what it means to follow him.
        </p>
        {/* FORM AND IMAGE */}
        <div className=''>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              className='flex flex-col items-center md:items-start'
              target='_blank'
              onSubmit={handleOnSubmit}
              method='POST'
              action='https://formsubmit.co/4396041941d0390f043632cc7022c49c'
            >
              <input
                className={inputStyle}
                type='text'
                placeholder='NAME'
                {...register('name', { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className='mt-1 text-red-500'>
                  {errors.name.type === 'required' && 'This field is required.'}
                  {errors.name.type === 'maxlength' &&
                    'Max length is 100 characters.'}
                </p>
              )}
              <input
                className={inputStyle}
                type='text'
                placeholder='EMAIL'
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, //REGEX!
                })}
              />
              {errors.email && (
                <p className='mt-1 text-red-500'>
                  {errors.email.type === 'required' &&
                    'This field is required.'}
                  {errors.email.type === 'pattern' && 'Invalid email address.'}
                </p>
              )}
              <textarea
                className={inputStyle}
                rows={4}
                cols={50}
                placeholder='MESSAGE'
                {...register('message', { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className='mt-1 text-red-500'>
                  {errors.message.type === 'required' &&
                    'This field is required.'}
                  {errors.message.type === 'maxlength' &&
                    'Max length is 2000 characters.'}
                </p>
              )}
              <button
                type='submit'
                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white font-semibold hover:bg-primary-500 '
              >
                SUMBIT
              </button>
              <p className='text-red-500 text-xl'>
                This website serves as a preliminary representation of West Ryde
                Anglican Church and is currently in the process of being
                developed. For comprehensive details, please refer to the
                official website.
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Address */}
      <div className='w-full md:mt-64'>
        <div className='mt-10 md:mt-0 md:text-xl md:space-y-2'>
          <h2 className='font-bold'>Location:</h2>
          <p>Corner of Bellevue & Dickson Avenues </p>
          <p>(Entry via Dickson Avenue)</p>
          <p>West Ryde, New South Wales, 2114</p>
          <p>Telephone: (02) 9874-1926 </p>
          <p> Fax: (02) 9874-1635</p>
          <p>Office Hours: Weekdays 9:00 am – 4:00 pm</p>
        </div>
      </div>

      {/* Map */}
      <div className='mt-10 md:mt-64 md:w-full'>
        <iframe
          className='overflow-hidden w-full rounded-lg'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.256238005427!2d151.0805420757059!3d-33.80569997325083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a44fe7b2d94b%3A0xe448cbcdea70bd91!2sWest%20Ryde%20Anglican%20Church!5e0!3m2!1sen!2sau!4v1707311869803!5m2!1sen!2sau'
          width='400'
          height='400'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          title='Responsive Google Map'
        ></iframe>
        <div className=' '>
          <img
            className='w-full rounded-lg '
            src={churchBuilding}
            alt='contact us page photo'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUsMain;
