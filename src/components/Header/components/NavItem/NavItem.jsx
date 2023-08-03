import classNames from 'classnames';

function NavItem({ children, className }) {
  const defaultStyle = [
    'font-medium text-lg leading-none',
    'transition duration-300 hover:text-main-shade',
  ];
  const finalStyle = classNames(defaultStyle, className);
  return (
    <a href='/' className={finalStyle}>
      {children}
    </a>
  );
}

export default NavItem;
