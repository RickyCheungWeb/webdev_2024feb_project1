export const ServicesContent = () => {
  return (
    <div className='w-64 bg-white p-6 shadow-xl text-xl'>
      <div className='mb-3 space-y-3'>
        <a href='/servicesmain/eightam' className='block hover:bg-secondary-500 p-2 rounded-md'>
          8 am Traditional Church
        </a>
        <a href='/servicesmain/tenam' className='block hover:bg-secondary-500 p-2 rounded-md '>
          10am Church with Kids' Church
        </a>
        <a href='/servicesmain/sixpm' className='block hover:bg-secondary-500 p-2 rounded-md '>
          6pm Synday Night Church
        </a>
      </div>
    </div>
  );
};
