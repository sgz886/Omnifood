import hero from '../../assets/img/hero.png';
import c1 from '../../assets/img/customers/customer-1.jpg';
import c2 from '../../assets/img/customers/customer-2.jpg';
import c3 from '../../assets/img/customers/customer-3.jpg';
import c4 from '../../assets/img/customers/customer-4.jpg';
import c5 from '../../assets/img/customers/customer-5.jpg';
import c6 from '../../assets/img/customers/customer-6.jpg';
import Section from '../Section';
import CenterLayout from '../CenterLayout';
import H1 from '../H1';
import ButtonLink from '../ButtonLink';
import AvatarImage from './components/AvatarImage';

function Hero() {
  return (
    <Section className='pt-12 bg-background-tint max-sm:px-2'>
      <CenterLayout className='max-w-[77.25rem]
        grid gap-x-24 grid-cols-2 items-center gap-y-12 justify-items-center
        max-xl:max-w-[71rem] max-xl:gap-x-[6vw] max-xl:grid-cols-[5fr_4fr]
        max-lg:gap-x-[calc(15vw-114px)]
        max-md:grid-cols-1'
      >
        <div className='max-md:text-center'>
          <H1 className='mb-8'>
            A healthy meal delivered to your door, every single day
          </H1>
          <p className='text-xl leading-8 mb-12 max-lg:mb-8'>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <ButtonLink to='/' className='mr-4'>
            Start eating well
          </ButtonLink>
          <ButtonLink to='/' color='white'>
            Learn more &darr;
          </ButtonLink>
          <div className='flex items-center gap-4 mt-20
                          max-lg:mt-10
                          max-[820px]:flex-col max-[820px]:items-start
                          max-md:flex-row max-md:justify-center max-md:items-center max-md:mt-6'
          >
            <div className='flex shrink-0'>
              <AvatarImage src={c1} alt='customer' className='-mr-4 last:mr-0' />
              <AvatarImage src={c2} alt='customer' className='-mr-4 last:mr-0' />
              <AvatarImage src={c3} alt='customer' className='-mr-4 last:mr-0' />
              <AvatarImage src={c4} alt='customer' className='-mr-4 last:mr-0' />
              <AvatarImage src={c5} alt='customer' className='-mr-4 last:mr-0' />
              <AvatarImage src={c6} alt='customer' className='-mr-4 last:mr-0' />
            </div>
            <p className='text-lg font-semibold max-xl:text-base'>
              <span className='font-bold text-orange-500'>250,000+</span>
              &nbsp;meals delivered last year!
            </p>
          </div>
        </div>
        <img src={hero} alt='' width='100%' className='max-md:w-3/5 max-sm:w-4/5' />
      </CenterLayout>
    </Section>
  );
}

export default Hero;
