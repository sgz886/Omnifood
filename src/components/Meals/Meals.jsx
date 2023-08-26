import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import Section from '../Section';
import CenterLayout from '../CenterLayout';
import SubHeading from '../SubHeading';
import H2 from '../H2';
import meal1 from '../../assets/img/meals/meal-1.jpg';
import meal2 from '../../assets/img/meals/meal-2.jpg';
import MealCard from './components/MealCard';
import H3 from '../H3';
import DescriptionWithIcon from '../DescriptionWithIcon';
import IconType from '../DescriptionWithIcon/components/IconType';

import { anchors } from '../Header/components/RegularNavBar/RegularNavBar';

const MealsData = [
  {
    picture: meal1,
    tags: ['vegetarian'],
    name: 'Jananese Gyozas',
    calories: {
      detail: 650,
      icon: 'flame',
    },
    nutriScore: {
      detail: 74,
      icon: 'restaurant',
    },
    rating: {
      detail: 4.9,
      icon: 'star',
    },
    ratingNumber: 537,
  },
  {
    picture: meal2,
    tags: ['vegan', 'paleo'],
    name: 'Avocado Salad',
    calories: {
      detail: 400,
      icon: 'flame',
    },
    nutriScore: {
      detail: 92,
      icon: 'restaurant',
    },
    rating: {
      detail: 4.8,
      icon: 'star',
    },
    ratingNumber: 441,
  },
];

const DietTypes = [
  {
    detail: 'Vegetarian',
    icon: 'checkmark',
  },
  {
    detail: 'Vegan',
    icon: 'checkmark',
  },
  {
    detail: 'Pescatarian',
    icon: 'checkmark',
  },
  {
    detail: 'Gluten-free',
    icon: 'checkmark',
  },
  {
    detail: 'Lactose-free',
    icon: 'checkmark',
  },
  {
    detail: 'Keto',
    icon: 'checkmark',
  },
  {
    detail: 'Paleo',
    icon: 'checkmark',
  },
  {
    detail: 'Low FODMAP',
    icon: 'checkmark',
  },
  {
    detail: 'Kid-friendly',
    icon: 'checkmark',
  },
];

function Meals() {
  const [mealsFocus, setMealsFocus] = useState(false);
  const refMeals = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setMealsFocus(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );
    observer.observe(refMeals.current);
    return () => observer.disconnect();
  }, []);

  const howItWorksStyle = [
    'sm:max-md:col-span-2 max-md:justify-self-center duration-700',
    { 'translate-x-20 opacity-0': !mealsFocus },
    { 'translate-x-0 opacity-100': mealsFocus },
  ];

  return (
    <Section>
      <CenterLayout className='overflow-hidden'>
        <div id={anchors.meals} className='pb-24'>
          <SubHeading className='mb-4 text-center'>meals</SubHeading>
          <H2 className='text-center'>
            Omnifood AI chooses from 5,000+ recipes
          </H2>
        </div>
        <div className='grid grid-cols-3 gap-x-16 gap-y-16
                        max-lg:gap-x-10
                        max-md:grid-cols-2
                        max-sm:grid-cols-1'
        >
          {MealsData.map((meal) => (
            <div
              key={meal.name}
              className='rounded-xl overflow-hidden shadow-2xl duration-300
                              hover:shadow-[0_32px_64px_rgba(0,0,0,0.1)] hover:-translate-y-3'
            >
              <MealCard key={meal.name} data={meal} />
            </div>
          ))}
          <div ref={refMeals} className={classNames(howItWorksStyle)}>
            <H3>Works with any diet:</H3>
            <div key='margin' className='h-8' />
            <div className='flex flex-col gap-6'>
              {DietTypes.map(({ detail, icon }) => (
                <DescriptionWithIcon img={IconType[icon]} key={detail}>
                  {detail}
                </DescriptionWithIcon>
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
          >
            See all recipes &rarr;
          </a>
        </div>
      </CenterLayout>
    </Section>
  );
}

export default Meals;
