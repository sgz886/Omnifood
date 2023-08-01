import Section from '../Section';
import CenterLayout from '../CenterLayout';
import SubHeading from '../SubHeading';
import H2 from '../H2';
import meal1 from '../../assets/img/meals/meal-1.jpg';
import meal2 from '../../assets/img/meals/meal-2.jpg';
import Meal from './components';
import H3 from '../H3';
import checkmark from '../../assets/img/meals/checkmark-outline.svg';
import MealAttribute from './components/components/MealAttribute';

const MealsData = [
  {
    picture: meal1,
    tags: ['vegetarian'],
    name: 'Jananese Gyozas',
    calories: 650,
    nutriScore: 74,
    rating: 4.9,
    ratingNumber: 537,
  },
  {
    picture: meal2,
    tags: ['vegan', 'paleo'],
    name: 'Avocado Salad',
    calories: 400,
    nutriScore: 92,
    rating: 4.8,
    ratingNumber: 441,
  },
];

const DietTypes = [
  'Vegetarian',
  'Vegan',
  'Pescatarian',
  'Gluten-free',
  'Lactose-free',
  'Keto',
  'Paleo',
  'Low FODMAP',
  'Kid-friendly',
];

function Meals() {
  return (
    <Section>
      <CenterLayout>
        <div className='pb-24'>
          <SubHeading className='text-center'>meals</SubHeading>
          <H2 className='text-center'>
            Omnifood AI chooses from 5,000+ recipes
          </H2>
        </div>
        <div className='flex justify-between gap-16'>
          {MealsData.map((meal) => (
            <div
              key={meal.name}
              className='flex-1 rounded-xl overflow-hidden shadow-2xl duration-300
                              hover:shadow-[0_32px_64px_rgba(0,0,0,0.1)] hover:-translate-y-3'
            >
              <Meal key={meal.name} data={meal} />
            </div>
          ))}
          <div className='flex-1'>
            <H3>Works with any diet:</H3>
            <div key='margin' className='h-8' />
            <div className='flex flex-col gap-6'>
              {DietTypes.map((diet) => (
                <MealAttribute img={checkmark} key={diet}>
                  <span>{diet}</span>
                </MealAttribute>
              ))}
            </div>
          </div>
        </div>
        <div key='margin-after-meal' className='h-12' />
        <div className='flex justify-center'>
          <a
            href='/'
            className='cursor-pointer text-lg text-main-normal
                     border-current border-b transition duration-300
                     hover:border-transparent'
          >See all recipes &rarr;
          </a>
        </div>
      </CenterLayout>
    </Section>
  );
}

export default Meals;
