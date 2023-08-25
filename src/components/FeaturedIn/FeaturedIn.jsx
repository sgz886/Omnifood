import CenterLayout from '../CenterLayout';
import Section from '../Section';
import PartnerContainer from './components/PartnerContainer';

function FeaturedIn() {
  return (
    <Section className='pt-12 pb-8'>
      <CenterLayout className='overflow-hidden'>
        <div
          className='mb-6 text-center
                     text-[0.875rem] uppercase tracking-wider font-medium text-grey-shade'
        >
          as featured in
        </div>
        <div className='flex max-lg:w-max max-lg:animate-scroll hover:pause'>
          <PartnerContainer />
          <PartnerContainer scrollCopy />
        </div>
      </CenterLayout>
    </Section>
  );
}

export default FeaturedIn;
