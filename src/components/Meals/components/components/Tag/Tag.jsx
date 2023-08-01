import classNames from 'classnames';

const tagColors = {
  vegetarian: 'bg-green-500',
  vegan: 'bg-lime-500',
  paleo: 'bg-yellow-500',

};

function Tag({ children }) {
  const tagColor = tagColors[children];
  return (
    <span
      className={classNames(
        'py-1 px-2 rounded-full inline-block',
        'uppercase text-xs text-grey-normal font-semibold',
        tagColor,
      )}
    >
      {children}
    </span>
  );
}

export default Tag;
