import CenterLayout from '../CenterLayout';
import Section from '../Section';
import techCrunchImg from '../../assets/img/partners/techcrunch.png';
import forbesImg from '../../assets/img/partners/forbes.png';
import businessInsiderImg from '../../assets/img/partners/business-insider.png';
import usaTodayImg from '../../assets/img/partners/usa-today.png';
import newYorkTimesImg from '../../assets/img/partners/the-new-york-times.png';

function FeaturedIn() {
  return (
    <Section className='pt-12 pb-8'>
      <CenterLayout>
        <div
          className='mb-6 text-center
                     text-[0.875rem] uppercase tracking-wider font-medium text-grey-shade'
        >
          as featured in
        </div>
        <div className='flex justify-around gap-x-2'>
          <img className='max-h-8 opacity-50 brightness-0 min-w-0' src={techCrunchImg} alt='' />
          <img className='max-h-8 opacity-50 brightness-0 min-w-0' src={businessInsiderImg} alt='' />
          <img className='max-h-8 opacity-50 brightness-0 min-w-0' src={newYorkTimesImg} alt='' />
          <img className='max-h-8 opacity-50 brightness-0 min-w-0' src={forbesImg} alt='' />
          <img className='max-h-8 opacity-50 brightness-0 min-w-0' src={usaTodayImg} alt='' />
        </div>
      </CenterLayout>
    </Section>
  );
}

export default FeaturedIn;
