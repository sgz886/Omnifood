import classNames from 'classnames';

function H2({ children, className }) {
  const defaultStyle = 'font-bold text-grey-normal tracking-tight text-[2.75rem] max-lg:text-4xl';
  const finalStyle = classNames(defaultStyle, className);
  return (
    <h2 className={finalStyle}>
      {children}
    </h2>
  );
}

export default H2;
