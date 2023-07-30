import logo from '../../assets/img/omnifood-logo.png';
import NavItem from './components/NavItem';

function Header() {
  return (
    <header
      className='flex justify-between items-center
     bg-background-tint h-24 px-12'
    >
      <img className='h-6' src={logo} alt='logo' />
      <nav className='flex gap-8 items-center'>
        <NavItem>How it works</NavItem>
        <NavItem>Meals</NavItem>
        <NavItem>Testimonials</NavItem>
        <NavItem>Pricing</NavItem>
        <NavItem likeButton>Try for free</NavItem>
      </nav>
    </header>
  );
}

export default Header;
