type Props = {
  title: string;
  description?: string;
  image?: string;
};

const ConnectCard = ({ title, description, image }: Props) => {
  const overlayStyles =
    'p-5 absolute z-30 flex flex-col md:h-[380px] md:w-[450px] h-[300px] w-[325px] items-center  whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90';
  return (
    <li className='relative inline-block md:h-[380px] md:w-[450px] h-[300px] w-[325px] '>
      <div className={overlayStyles}>
        <p className='text-2xl'>{title}</p>
        <p className='mt-5 md:text-xl '>{description}</p>
      </div>
      <img className='object-cover md:h-[380px] md:w-[450px] h-[300px] w-[325px]' src={image} alt={`${image}`} />
    </li>
  );
};

export default ConnectCard;
