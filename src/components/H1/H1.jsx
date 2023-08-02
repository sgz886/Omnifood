import classNames from 'classnames';

function H1({ children, className }) {
  const defaultStyle = 'text-[2.75rem] font-bold text-grey-normal';
  const finalStyle = classNames(defaultStyle, className);
  return <h1 className={finalStyle}>{children}</h1>;
}

export default H1;
