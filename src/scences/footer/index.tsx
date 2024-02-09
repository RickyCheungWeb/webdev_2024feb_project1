import Logo from '@/assets/Logo.png';
import { SocialIcon } from 'react-social-icons/component';

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className='mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <button>
            <a href='/'>
              <img src={Logo} alt='logo' />
            </a>
          </button>
          <p className='my-10'>Copyright © 2024 West Ryde Anglican Church</p>
          <p className='text-red-500'>
            This website serves as a preliminary representation of West Ryde
            Anglican Church and is currently in the process of being developed.
            For comprehensive details, please refer to the official website.
          </p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold text-xl'>Links</h4>
          <SocialIcon
            className='hover:opacity-50'
            target='_blank'
            url='https://www.facebook.com/westryde/'
          />
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold text-xl'>Contact Us</h4>

          <p className='my-2'>Corner of Bellevue & Dickson Avenues </p>
          <p className='my-2'>(Entry via Dickson Avenue)</p>
          <p className='my-2'>West Ryde, New South Wales, 2114</p>
          <p className='my-2'>Telephone: (02) 9874-1926 </p>
          <p className='my-2'> Fax: (02) 9874-1635</p>
          <p className='my-2'>Office Hours: Weekdays 9:00 am – 4:00 pm</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
