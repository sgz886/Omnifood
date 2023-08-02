import classNames from 'classnames';

function CenterLayout({ children, className }) {
  const defaultStyle = 'max-w-[71rem] mx-auto';
  const finalStyle = classNames(defaultStyle, className);
  return (
    <div className={finalStyle}>{children}</div>
  );
}

export default CenterLayout;
