import classNames from 'classnames';
import NavItem from '../NavItem';

const fillStyle = `px-6 py-3 rounded-lg
                    bg-main-normal text-background-normal
                    hover:bg-main-shade hover:text-background-normal`;

export const anchors = {
  home: '',
  how: 'how',
  meals: 'meals',
  testimonial: 'testimonial',
  price: 'price',
  try: 'try',
};

function RegularNavBar({ className, children, onNavClick }) {
  const defaultStyle = 'flex gap-12 items-center';
  const finalStyle = classNames(defaultStyle, className);
  return (
    <nav className={finalStyle}>
      {children}
      <NavItem
        to={`#${anchors.how}`}
        className='text-grey-normal'
        onClick={onNavClick}
      >
        How it works
      </NavItem>
      <NavItem
        to={`#${anchors.meals}`}
        className='text-grey-normal'
        onClick={onNavClick}
      >
        Meals
      </NavItem>
      <NavItem
        to={`#${anchors.testimonial}`}
        className='text-grey-normal'
        onClick={onNavClick}
      >
        Testimonials
      </NavItem>
      <NavItem
        to={`#${anchors.price}`}
        className='text-grey-normal'
        onClick={onNavClick}
      >
        Pricing
      </NavItem>
      <NavItem
        to={`#${anchors.try}`}
        className={fillStyle}
        onClick={onNavClick}
      >
        Try for free
      </NavItem>
    </nav>
  );
}

export default RegularNavBar;
