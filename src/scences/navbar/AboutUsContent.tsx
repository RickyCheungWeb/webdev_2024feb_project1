export const AboutUsContent = () => {
  return (
    <div className='w-64 bg-white p-6 shadow-xl text-xl'>
      <div className='mb-3 space-y-3'>
        <a
          href='/aboutmain/beliefs'
          className='block hover:bg-secondary-500 p-2 rounded-md'
        >
          Our Beliefs
        </a>
        <a
          href='/aboutmain/vision'
          className='block hover:bg-secondary-500 p-2 rounded-md '
        >
          Our Vision and Mission
        </a>
        {/* <a href='#' className='block hover:bg-secondary-500 p-2 rounded-md '>
          Our Staff
        </a>
        <a href='#' className='block hover:bg-secondary-500 p-2 rounded-md  '>
          Our Safe Ministry Policies
        </a>
        <a href='#' className='block hover:bg-secondary-500 p-2 rounded-md  '>
          Our Mission Partners
        </a> */}
      </div>
    </div>
  );
};
