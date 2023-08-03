import CenterLayout from '../CenterLayout';
import SubHeading from '../SubHeading';
import H2 from '../H2';
import StepRow from './components/StepRow';
import pic1 from '../../assets/img/app/app-screen-1.png';
import pic2 from '../../assets/img/app/app-screen-2.png';
import pic3 from '../../assets/img/app/app-screen-3.png';
import Section from '../Section';

const howToText = [
  {
    id: '01',
    title: 'Tell us what you like (and what not)',
    content:
      'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!',
    pic: pic1,
  },
  {
    id: '02',
    title: 'Approve your weekly meal plan',
    content:
      'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.',
    pic: pic2,
  },
  {
    id: '03',
    title: 'Receive meals at convenient time',
    content:
      'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!',
    pic: pic3,
  },
];

function How() {
  return (
    <Section>
      <CenterLayout>
        <div className='pb-24'>
          <SubHeading className='mb-4'>How it works</SubHeading>
          <H2>Your daily dose of health in 3 simple steps</H2>
        </div>
        <div className='flex flex-col gap-24'>
          {howToText.map((row) => (
            <StepRow value={row} key={row.id} />
          ))}
        </div>
      </CenterLayout>
    </Section>
  );
}

export default How;
