import classNames from 'classnames';
import SubHeading from '../../../SubHeading';
import PriceTag from './components/PriceTag';
import DescriptionWithIcon from '../../../DescriptionWithIcon';
import ButtonLink from '../../../ButtonLink';
import IconType from '../../../DescriptionWithIcon/components/IconType';

const fillToLength = (arr, length) => {
  while (arr.length < length) {
    arr.push({
      detail: ' ',
      icon: 'none',
    });
  }
};

function PriceCard({ data, className }) {
  const defaultStyle = 'p-12 border-background-tint rounded-xl w-9/12 first:justify-self-end';
  const finalStyle = classNames(defaultStyle, className);
  const { price, description, details } = data;
  fillToLength(details, 4);
  return (
    <div className={finalStyle}>
      <SubHeading className='text-center text-xl font-semibold leading-5 mb-8'>
        starter
      </SubHeading>
      <PriceTag>{price}</PriceTag>
      <p className='text-center text-base text-[#6f6f6f] mb-12'>
        {description}
      </p>
      <div className='flex flex-col gap-4'>
        {details.map(({ detail, icon }) => (
          <DescriptionWithIcon key={detail} img={IconType[icon]}>
            {detail}
          </DescriptionWithIcon>
        ))}
      </div>
      <div className='mt-12 text-center'>
        <ButtonLink to='/'>Start eating well</ButtonLink>
      </div>
    </div>
  );
}

export default PriceCard;
