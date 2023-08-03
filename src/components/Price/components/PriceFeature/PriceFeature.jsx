function PriceFeature({ data }) {
  const { picture, title, content } = data;
  return (
    <div>
      <img src={picture} alt='children' className='w-16 h-16 bg-background-tint p-4 rounded-full mb-8' />
      <p className='text-2xl font-bold text-grey-normal mb-4'>{title}</p>
      <p className='text-lg leading-8'>{content}</p>
    </div>
  );
}

export default PriceFeature;
