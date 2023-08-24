import classNames from 'classnames';

function NavItem({
  children, className, to, onClick,
}) {
  const style = [
    'font-medium text-lg leading-none',
    'transition duration-300 ',
    { 'text-grey-normal hover:text-main-shade': !className },
    { [`${className}`]: className },
  ];
  const finalStyle = classNames(style);
  return (
    <a href={to} className={finalStyle} onClick={onClick}>
      {children}
    </a>
  );
}

export default NavItem;
