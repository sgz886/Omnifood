import classNames from 'classnames';
import Section from '../Section';
import CenterLayout from '../CenterLayout';
import H2 from '../H2';

const inputAndButtonStyle = [
  'w-full p-3 text-lg leading-none bg-background-tint rounded-lg',
  'focus:ring-8 focus:ring-orange-300',
];

const buttonTextStyle = [
  'text-xl font-semibold leading-tight text-background-tint bg-amber-950',
  'transition duration-300 hover:text-grey-darker hover:bg-background-normal',
];

function Subscription() {
  return (
    <Section className='pt-12 pb-32'>
      <CenterLayout>
        <div className='grid grid-cols-[2fr_1fr] rounded-xl overflow-hidden'>
          <div className='pt-12 pb-16 px-16 bg-gradient-to-br from-[#eb984e] to-main-normal text-[#45260a]'>
            <H2 className='mb-8'>Get your first meal for free!</H2>
            <p className='mb-12 text-lg leading-8'>
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <form
              className='grid grid-cols-2 gap-x-8 gap-y-6 items-end'
              name='sign up'
            >
              <div>
                <label
                  className='block text-base font-medium mb-3'
                  htmlFor='name'
                >
                  Full Name
                </label>
                <input
                  className={classNames(inputAndButtonStyle)}
                  type='text'
                  id='name'
                  placeholder='John Smith'
                />
              </div>
              <div>
                <label
                  className='block text-base font-medium mb-3'
                  htmlFor='email'
                >
                  Email address
                </label>
                <input
                  className={classNames(inputAndButtonStyle)}
                  type='email'
                  id='email'
                  placeholder='me@example.com'
                />
              </div>
              <div>
                <label
                  className='block text-base font-medium mb-3 '
                  htmlFor='hear-source'
                >
                  Where did you hear from us?
                </label>
                <select
                  className={classNames(inputAndButtonStyle)}
                  id='hear-source'
                >
                  <option value='0' selected>
                    Please choose one option:
                  </option>
                  <option value='friend'>Friends and Family</option>
                  <option value='youtube'>Youtube Video</option>
                  <option value='podcast'>podcast</option>
                  <option value='facebook'>Facebook add</option>
                  <option value='others'>others</option>
                </select>
              </div>
              <button
                className={classNames(inputAndButtonStyle, buttonTextStyle)}
                type='submit'
              >
                Sign up now
              </button>
            </form>
          </div>
          {/* <img src='' alt='' /> */}
          <div className='bg-signupImage bg-cover bg-center' />
        </div>
      </CenterLayout>
    </Section>
  );
}

export default Subscription;
