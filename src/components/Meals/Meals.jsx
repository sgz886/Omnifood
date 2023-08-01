import Section from '../Section';
import CenterLayout from '../CenterLayout';
import SubHeading from '../SubHeading';
import H2 from '../H2';
import StepRow from '../How/components/StepRow';

function Meals() {
  return (
    <Section>
      <CenterLayout>
        <div className='pb-24'>
          <SubHeading className='text-center'>meals</SubHeading>
          <H2 className='text-center'>Omnifood AI chooses from 5,000+ recipes</H2>
        </div>
        <div className='flex justify-between gap-16'>
          <div className='flex-1 bg-amber-700'>1</div>
          <div className='flex-1 bg-amber-700'>2</div>
          <div className='flex-1 bg-amber-700'>3</div>
        </div>
      </CenterLayout>
    </Section>
  );
}

export default Meals;
