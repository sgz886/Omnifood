import logo from '../../assets/img/omnifood-logo.png';
import NavItem from './components/NavItem';

const fillStyle = `px-6 py-3 rounded-lg
                    bg-main-normal text-background-normal
                    hover:bg-main-shade hover:text-background-normal`;
function Header() {
  return (
    <header
      className='flex justify-between items-center
                 bg-background-tint h-24 px-12'
    >
      <img className='h-[1.375rem]' src={logo} alt='logo' />
      <nav className='flex gap-12 items-center'>
        <NavItem className='text-grey-normal'>How it works</NavItem>
        <NavItem className='text-grey-normal'>Meals</NavItem>
        <NavItem className='text-grey-normal'>Testimonials</NavItem>
        <NavItem className='text-grey-normal'>Pricing</NavItem>
        <NavItem className={fillStyle}>Try for free</NavItem>
      </nav>
    </header>
  );
}

export default Header;
