import classNames from 'classnames';

function FooterText({ children, className }) {
  const defaultStyle = 'text-base leading-none text-[#767676]';
  const finalStyle = classNames(defaultStyle, className);
  return <p className={finalStyle}>{children}</p>;
}

export default FooterText;
