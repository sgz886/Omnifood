import classNames from 'classnames';

function SubHeading({ children, className, id }) {
  const defaultStyle = [
    'text-base font-medium text-main-shade uppercase tracking-wider',
  ];
  const finalStyle = classNames(defaultStyle, className);

  return (
    <div id={id} className={finalStyle}>
      {children}
    </div>
  );
}

export default SubHeading;
