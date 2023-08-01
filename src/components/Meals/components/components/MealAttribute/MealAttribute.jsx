function MealAttribute({ img, children }) {
  return (
    <div className='flex items-center gap-4'>
      <div className='bg-main-normal w-6 h-6' style={{ maskImage: `url(${img})`, WebkitMaskImage: `url(${img})` }} />
      <span className='text-lg'>{children}</span>
    </div>
  );
}

export default MealAttribute;
