import classNames from 'classnames';

function FooterLink({ to, children, className }) {
  const defaultStyle = 'text-base leading-none text-[#767676] hover:text-grey-darker';
  const finalStyle = classNames(defaultStyle, className);
  return (
    <a href={to} className={finalStyle}>{children}</a>
  );
}

export default FooterLink;
