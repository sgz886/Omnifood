import logo from '../../assets/img/omnifood-logo.png';
import RegularNavBar from './components/RegularNavBar';
import VerticalNavBar from './components/VerticalNavBar';

function Header() {
  return (
    <header
      className='flex justify-between items-center
                 bg-background-tint h-24 px-12'
    >
      <img className='h-[1.375rem]' src={logo} alt='logo' />
      <RegularNavBar className='max-lg:hidden' />
      <VerticalNavBar className='lg:hidden' />
    </header>
  );
}

export default Header;
