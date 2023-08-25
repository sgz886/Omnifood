import classNames from 'classnames';
import abcImg from '../../../../assets/img/partners/ABC_News.svg';
import techCrunchImg from '../../../../assets/img/partners/techcrunch.png';
import forbesImg from '../../../../assets/img/partners/forbes.png';
import businessInsiderImg from '../../../../assets/img/partners/business-insider.png';
import usaTodayImg from '../../../../assets/img/partners/usa-today.png';
import newYorkTimesImg from '../../../../assets/img/partners/the-new-york-times.png';

const sponsorImgs = [
  abcImg,
  techCrunchImg,
  forbesImg,
  businessInsiderImg,
  usaTodayImg,
  newYorkTimesImg,
];

function PartnerContainer({ scrollCopy }) {
  const style = [
    'lg:grow shrink-0 justify-between',
    'max-lg:gap-x-4 max-lg:pr-4',
    { flex: !scrollCopy },
    { 'hidden max-lg:flex': scrollCopy },
  ];
  return (
    <div className={classNames(style)}>
      {sponsorImgs.map((img) => (
        <img
          key={img}
          className='max-h-8 opacity-50 brightness-0 max-lg:h-7 cursor-pointer'
          src={img}
          alt=''
        />
      ))}
    </div>
  );
}

export default PartnerContainer;
