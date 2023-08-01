import MealAttribute from './components/MealAttribute';
import flame from '../../../assets/img/meals/flame-outline.svg';
import restaurant from '../../../assets/img/meals/restaurant-outline.svg';
import star from '../../../assets/img/meals/star-outline.svg';
import Tag from './components/Tag';

function Meal({ data }) {
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
          <MealAttribute img={flame}>
            <strong className='font-medium'>{calories}</strong> calories
          </MealAttribute>
          <MealAttribute img={restaurant}>
            NutriScore® <strong className='font-medium'>{nutriScore}</strong>
          </MealAttribute>
          <MealAttribute img={star}>
            <strong className='font-medium'>{rating}</strong>
            {' rating ('}
            {ratingNumber})
          </MealAttribute>
        </div>
      </div>
    </>
  );
}

export default Meal;
