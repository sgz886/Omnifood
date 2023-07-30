import classNames from 'classnames';

function NavItem({ children, likeButton }) {
  const normalStyle = `text-grey-normal font-medium text-lg
                        transition duration-300 hover:text-main-shade`;
  const likeButtonStyle = `px-5 py-2 rounded-lg
                            bg-main-normal text-background-normal
                            hover:bg-main-shade hover:text-background-normal`;

  return (
    <a
      href='/'
      className={classNames(`${normalStyle}`, {
        [`${likeButtonStyle}`]: likeButton,
      })}
    >
      {children}
    </a>
  );
}

export default NavItem;
