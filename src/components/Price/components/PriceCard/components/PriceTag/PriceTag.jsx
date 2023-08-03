function PriceTag({ children }) {
  return (
    <p className='mb-4 text-center text-6xl font-semibold text-grey-normal'>
      <span className='text-3xl font-medium mr-2'>$</span>
      {children}
    </p>
  );
}

export default PriceTag;
