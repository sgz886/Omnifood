import classNames from 'classnames';

function SubHeading({ children, className }) {
  const defaultStyle = [
    'text-base font-medium text-main-shade uppercase tracking-wider',
  ];
  const finalStyle = classNames(defaultStyle, className);

  return (
    <div className={finalStyle}>
      {children}
    </div>
  );
}

export default SubHeading;
