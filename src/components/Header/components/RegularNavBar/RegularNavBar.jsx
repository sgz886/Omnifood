import classNames from 'classnames';
import NavItem from '../NavItem';

const fillStyle = `px-6 py-3 rounded-lg
                    bg-main-normal text-background-normal
                    hover:bg-main-shade`;

export const anchors = {
  home: '/',
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
        onClick={onNavClick}
      >
        How it works
      </NavItem>
      <NavItem
        to={`#${anchors.meals}`}
        onClick={onNavClick}
      >
        Meals
      </NavItem>
      <NavItem
        to={`#${anchors.testimonial}`}
        onClick={onNavClick}
      >
        Testimonials
      </NavItem>
      <NavItem
        to={`#${anchors.price}`}
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
