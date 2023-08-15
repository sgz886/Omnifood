import H3 from '../../../H3';

function StepRow({ value }) {
  const {
    id, title, content, pic,
  } = value;
  return (
    <div
      className='flex gap-x-16 items-center
                 even:flex-row-reverse
                 max-xl:gap-[5vw]
                 max-sm:flex-col max-sm:even:flex-col'
    >
      <div className='flex-1 flex flex-col gap-3'>
        <div className='text-[5.375rem] font-semibold text-grey-tint'>{id}</div>
        <H3>{title}</H3>
        <p className='text-lg mt-5'>{content}</p>
      </div>
      <div
        className='flex-1 relative
                     before:absolute before:block before:w-[45%] before:pb-[45%] before:bg-background-shade
                      before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full
                      before:-z-10
                     after:absolute after:block after:w-[60%] after:pb-[60%] after:bg-background-tint
                      after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full
                      after:-z-20
                     '
      >
        <img className='w-[35%] mx-auto' src={pic} alt='' />
      </div>
    </div>
  );
}

export default StepRow;
