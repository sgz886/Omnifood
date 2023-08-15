import classNames from 'classnames';
import Section from '../Section';
import CenterLayout from '../CenterLayout';
import H2 from '../H2';
import SubHeading from '../SubHeading';
import PriceCard from './components/PriceCard';
import infinite from '../../assets/img/price/infinite-outline.svg';
import leaf from '../../assets/img/price/leaf-outline.svg';
import nutrition from '../../assets/img/price/nutrition-outline.svg';
import pause from '../../assets/img/price/pause-outline.svg';
import PriceFeature from './components/PriceFeature';

import { anchors } from '../Header/components/RegularNavBar/RegularNavBar';

const priceInfo = [
  {
    price: 399,
    description: "per month. That's just $13 per meal!",
    details: [
      {
        detail: '1 meal per day',
        icon: 'checkmark',
      },
      {
        detail: 'Order from 11am to 9pm',
        icon: 'checkmark',
      },
      {
        detail: 'Delivery is free',
        icon: 'checkmark',
      },
    ],
  },
  {
    price: 649,
    description: "per month. That's just $11 per meal!",
    details: [
      {
        detail: '2 meals per day',
        icon: 'checkmark',
      },
      {
        detail: 'Order 24/7',
        icon: 'checkmark',
      },
      {
        detail: 'Delivery is free',
        icon: 'checkmark',
      },
      {
        detail: 'Get access to latest recipes',
        icon: 'checkmark',
      },
    ],
  },
];

const priceFeatures = [
  {
    picture: infinite,
    title: 'Never cook again!',
    content:
      'Our subscriptions cover 365 days per year, even including major holidays.',
  },
  {
    picture: nutrition,
    title: 'Local and organic',
    content:
      'Our cooks only use local, fresh, and organic products to prepare your meals.',
  },
  {
    picture: leaf,
    title: 'No waste',
    content:
      'All our partners only use reusable containers to package all your meals.',
  },
  {
    picture: pause,
    title: 'Pause anytime',
    content:
      'Going on vacation? Just pause your subscription, and we refund unused days.',
  },
];

const bestValueTagStyle = [
  'after:bg-main-tint after:px-20 after:py-2',
  'after:content-["best_value"] after:text-grey-normal',
  'after:uppercase after:text-sm after:leading-none after:font-bold',
  'after:absolute after:rotate-45 after:top-[30px] after:right-[-80px]',
  'max-lg:after:top-[30px] max-lg:after:right-[-60px]',
];

function Price() {
  return (
    <Section>
      <CenterLayout>
        <SubHeading id={anchors.price} className='mb-4'>pricing</SubHeading>
        <H2 className='mb-24 max-lg:mb-16'>Eating well without breaking the bank</H2>
        <div className='flex gap-x-16 gap-y-8 mb-12 justify-center items-center max-md:gap-x-8 max-sm:flex-col'>
          <PriceCard className='border-2' data={priceInfo[0]} />
          <PriceCard
            className={classNames(
              'bg-background-tint relative overflow-hidden',
              bestValueTagStyle,
            )}
            data={priceInfo[1]}
          />
        </div>
        <div className='mb-24 text-center text-base leading-relaxed'>
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </div>
        <div className='grid grid-cols-4 gap-x-16 gap-y-12 max-xl:gap-x-12 max-md:grid-cols-2 max-sm:grid-cols-1'>
          {priceFeatures.map((feature) => <PriceFeature key={feature.title} data={feature} />)}
        </div>
      </CenterLayout>
    </Section>
  );
}

export default Price;
