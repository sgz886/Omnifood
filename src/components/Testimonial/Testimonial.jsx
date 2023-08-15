import classNames from 'classnames';
import Section from '../Section';
import SubHeading from '../SubHeading';
import H2 from '../H2';
import TestimonialItem from './components/TestimonialItem';
import imgDave from '../../assets/img/customers/dave.jpg';
import imgBen from '../../assets/img/customers/ben.jpg';
import imgSteve from '../../assets/img/customers/steve.jpg';
import imgHannah from '../../assets/img/customers/hannah.jpg';
import testimonialImg1 from '../../assets/img/gallery/gallery-1.jpg';
import testimonialImg2 from '../../assets/img/gallery/gallery-2.jpg';
import testimonialImg3 from '../../assets/img/gallery/gallery-3.jpg';
import testimonialImg4 from '../../assets/img/gallery/gallery-4.jpg';
import testimonialImg5 from '../../assets/img/gallery/gallery-5.jpg';
import testimonialImg6 from '../../assets/img/gallery/gallery-6.jpg';
import testimonialImg7 from '../../assets/img/gallery/gallery-7.jpg';
import testimonialImg8 from '../../assets/img/gallery/gallery-8.jpg';
import testimonialImg9 from '../../assets/img/gallery/gallery-9.jpg';
import testimonialImg10 from '../../assets/img/gallery/gallery-10.jpg';
import testimonialImg11 from '../../assets/img/gallery/gallery-11.jpg';
import testimonialImg12 from '../../assets/img/gallery/gallery-12.jpg';

import { anchors } from '../Header/components/RegularNavBar/RegularNavBar';

const TestimonialData = [
  {
    picture: imgDave,
    content:
      'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    name: 'Dave Bryson',
  },
  {
    picture: imgBen,
    content:
      "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
    name: 'Ben Hadley',
  },
  {
    picture: imgSteve,
    content:
      "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
    name: 'Steve Miller',
  },
  {
    picture: imgHannah,
    content:
      'I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.',
    name: 'Hannah Smith',
  },
];

const testimonialImages = [
  testimonialImg1,
  testimonialImg2,
  testimonialImg3,
  testimonialImg4,
  testimonialImg5,
  testimonialImg6,
  testimonialImg7,
  testimonialImg8,
  testimonialImg9,
  testimonialImg10,
  testimonialImg11,
  testimonialImg12,
];

function Testimonial() {
  return (
    <Section
      className={classNames(
        'pt-0 pb-0 pr-0 pl-0 bg-background-tint',
        'grid items-center grid-cols-[55fr_45fr]',
        'max-lg:grid-cols-1 max-sm:px-0',
      )}
    >
      <div className='p-16 max-xl:px-12 max-lg:px-8 max-sm:px-4'>
        <SubHeading id={anchors.testimonial} className='mb-4'>Testimonials</SubHeading>
        <H2 className='mb-24 max-xl:text-3xl max-xl:mb-16'>Once you try it, you can&apos;t go back</H2>
        <div className='grid grid-cols-2 gap-x-20 gap-y-12 max-xl:gap-x-16 max-sm:grid-cols-1'>
          {TestimonialData.map((testimonial) => (
            <TestimonialItem data={testimonial} key={testimonial.name} />
          ))}
        </div>
      </div>
      <div className='p-4 grid grid-cols-3 gap-4 max-lg:grid-cols-6 max-md:grid-cols-4'>
        {testimonialImages.map((image) => (
          <img key={image} src={image} alt='gallery' />
        ))}
      </div>
    </Section>
  );
}

export default Testimonial;
