import CenterLayout from '../CenterLayout';
import logo from '../../assets/img/omnifood-logo.png';
import FooterText from './components/FooterText';
import facebook from '../../assets/img/social-media/facebook.svg';
import twitter from '../../assets/img/social-media/twitter.svg';
import instagram from '../../assets/img/social-media/instagram.svg';
import FooterLink from './components/FooterLink';

function Footer() {
  return (
    <footer className='px-8 py-12'>
      <CenterLayout>
        <div className='grid grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr] gap-x-16 gap-y-24'>
          <div className='flex flex-col'>
            <a href='/' className='mb-8'>
              <img className='h-[1.375rem]' src={logo} alt='logo' />
            </a>
            <div className='flex gap-6 h-full'>
              <a href='/'>
                <img src={instagram} alt='instagram' className='h-6' />
              </a>
              <a href='/'>
                <img src={facebook} alt='facebook' className='h-6' />
              </a>
              <a href='/'>
                <img src={twitter} alt='twitter' className='h-6' />
              </a>
            </div>
            <FooterText className='text-sm leading-relaxed mt-auto'>
              Copyright © 2023 by Omnifood, Inc. All rights reserved.
            </FooterText>
          </div>
          <div>
            <div className='text-lg font-medium mb-10 leading-none'>
              Contact us
            </div>
            <div className='flex flex-col gap-6'>
              <FooterText className='text-grey-darker leading-relaxed'>
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </FooterText>
              <div>
                <FooterLink to='/' className='my-2'>415-201-6370</FooterLink>
                <FooterLink to='/' className='my-2'>hello@omnifood.com</FooterLink>
              </div>
            </div>
          </div>
          <div>
            <div className='text-lg font-medium mb-10 leading-none'>
              Account
            </div>
            <div className='flex flex-col gap-6'>
              <FooterLink to='/'>Create account</FooterLink>
              <FooterLink to='/'>Sign in</FooterLink>
              <FooterLink to='/'>iOS app</FooterLink>
              <FooterLink to='/'>Android app</FooterLink>
            </div>
          </div>
          <div>
            <div className='text-lg font-medium mb-10 leading-none'>
              Company
            </div>
            <div className='flex flex-col gap-6'>
              <FooterLink to='/'>About Omnifood</FooterLink>
              <FooterLink to='/'>For Business</FooterLink>
              <FooterLink to='/'>Cooking partners</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
            </div>
          </div>
          <div>
            <div className='text-lg font-medium mb-10 leading-none'>
              Resources
            </div>
            <div className='flex flex-col gap-6'>
              <FooterLink to='/'>Recipe directory</FooterLink>
              <FooterLink to='/'>Help center</FooterLink>
              <FooterLink to='/'>Cooking partners</FooterLink>
              <FooterLink to='/'>Privacy & terms</FooterLink>
            </div>
          </div>
        </div>
      </CenterLayout>
    </footer>
  );
}

export default Footer;
