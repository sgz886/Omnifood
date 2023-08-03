import DescriptionWithIcon from '../../../DescriptionWithIcon';
import Tag from './components/Tag';
import IconType from '../../../DescriptionWithIcon/components/IconType';

function MealCard({ data }) {
  const {
    picture, tags, name, calories, nutriScore, rating, ratingNumber,
  } = data;
  return (
    <>
      <img src={picture} alt='' />
      <div className='pt-8 pb-12 px-12'>
        <div className='flex gap-1'>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div key='margin-after-tag' className='h-3' />
        <p className='text-2xl text-grey-normal font-semibold'>{name}</p>
        <div key='margin-after-name' className='h-8' />
        <div className='flex flex-col gap-5'>
          <DescriptionWithIcon img={IconType[calories.icon]}>
            <strong className='font-medium'>{calories.detail}</strong> calories
          </DescriptionWithIcon>
          <DescriptionWithIcon img={IconType[nutriScore.icon]}>
            NutriScore® <strong className='font-medium'>{nutriScore.detail}</strong>
          </DescriptionWithIcon>
          <DescriptionWithIcon img={IconType[rating.icon]}>
            <strong className='font-medium'>{rating.detail}</strong>
            {' rating ('}
            {ratingNumber})
          </DescriptionWithIcon>
        </div>
      </div>
    </>
  );
}

export default MealCard;
