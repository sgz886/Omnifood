function DescriptionWithIcon({ img, children }) {
  // console.log('img = ', img);
  return (
    <div className='flex items-center gap-4'>
      {img && (
        // <div
        //   className='bg-main-normal w-6 h-6'
        //   style={{
        //     maskImage: `url(${img})`,
        //     WebkitMaskImage: `url(${img})`,
        //   }}
        // />
        <img src={img} alt={children} className='w-6 h-6' />
      )}
      <span className='text-lg whitespace-pre'>{children}</span>
    </div>
  );
}

export default DescriptionWithIcon;
