import AvatarImage from '../../../Hero/components/AvatarImage';

function TestimonialItem({ data }) {
  const { name, content, picture } = data;
  return (
    <div>
      <AvatarImage
        src={picture}
        alt={name}
        className='h-16 w-16 border-none mb-3'
      />
      <blockquote className='text-lg leading-8 mb-4'>{content}</blockquote>
      <p className='text-base text-[#6f6f6f]'>— {name}</p>
    </div>
  );
}

export default TestimonialItem;
