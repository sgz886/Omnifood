import classNames from 'classnames';

function NavItem({
  children, className, to, onClick,
}) {
  const defaultStyle = [
    'font-medium text-lg leading-none',
    'transition duration-300 hover:text-main-shade',
  ];
  const finalStyle = classNames(defaultStyle, className);
  return (
    <a
      href={to}
      className={finalStyle}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default NavItem;
