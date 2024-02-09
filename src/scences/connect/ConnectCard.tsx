type Props = {
  title: string;
  description?: string;
  image?: string;
};

const ConnectCard = ({ title, description, image }: Props) => {
  const overlayStyles =
    'p-5 absolute z-30 flex flex-col h-[380px] w-[450px] items-center  whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90';
  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px] '>
      <div className={overlayStyles}>
        <p className='text-2xl'>{title}</p>
        <p className='mt-5 text-xl'>{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  );
};

export default ConnectCard;
