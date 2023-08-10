import classNames from 'classnames';
import NavItem from '../NavItem';

const fillStyle = `px-6 py-3 rounded-lg
                    bg-main-normal text-background-normal
                    hover:bg-main-shade hover:text-background-normal`;

function RegularNavBar({ className, children }) {
  const defaultStyle = 'flex gap-12 items-center';
  const finalStyle = classNames(defaultStyle, className);
  return (
    <nav className={finalStyle}>
      {children}
      <NavItem className='text-grey-normal'>How it works</NavItem>
      <NavItem className='text-grey-normal'>Meals</NavItem>
      <NavItem className='text-grey-normal'>Testimonials</NavItem>
      <NavItem className='text-grey-normal'>Pricing</NavItem>
      <NavItem className={fillStyle}>Try for free</NavItem>
    </nav>
  );
}

export default RegularNavBar;
