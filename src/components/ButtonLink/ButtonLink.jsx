import classNames from 'classnames';

function ButtonLink({
  children, color, to, className,
}) {
  const defaultStyle = [
    'px-8 py-4 rounded-lg',
    'text-xl font-semibold leading-5',
    { 'bg-main-normal text-background-normal': color !== 'white' },
    { 'bg-background-normal text-grey-normal': color === 'white' },
    'transition duration-300',
    { 'hover:bg-main-shade': color !== 'white' },
    { 'hover:bg-background-tint': color === 'white' },
    { 'hover:shadow-[inset_0_0_0_3px_rgb(255,255,255)]': color === 'white' },
    'max-sm:px-4 max-sm:py-6',
  ];
  const finalStyle = classNames(defaultStyle, className);
  return (
    <a className={finalStyle} href={to}>
      {children}
    </a>
  );
}

export default ButtonLink;
