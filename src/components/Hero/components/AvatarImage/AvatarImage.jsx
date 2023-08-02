import classNames from 'classnames';

function AvatarImage({ className, src, alt }) {
  const defaultStyle = 'h-12 w-12 rounded-full border-2 border-solid border-background-tint';
  const finalStyle = classNames(defaultStyle, className);
  return (
    <img className={finalStyle} src={src} alt={alt} />
  );
}

export default AvatarImage;
