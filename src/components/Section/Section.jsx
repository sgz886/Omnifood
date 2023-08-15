import classNames from 'classnames';

function Section({ children, className }) {
  const defaultStyle = 'px-8 py-24 max-sm:px-4';
  const finalStyle = classNames(defaultStyle, className);
  return <section className={finalStyle}>{children}</section>;
}

export default Section;
