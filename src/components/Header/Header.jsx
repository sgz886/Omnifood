import classNames from 'classnames';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/omnifood-logo.png';
import RegularNavBar from './components/RegularNavBar';
import VerticalNavBar from './components/VerticalNavBar';
import { anchors } from './components/RegularNavBar/RegularNavBar';

function Header({ headerFloat }) {
  return (
    <header>
      <div
        className={classNames(
          'flex justify-between items-center',
          'w-full px-12',
          'max-xl:px-8 max-sm:px-4 ',
          { 'bg-background-tint h-24': !headerFloat },
          { 'fixed top-0 h-20 bg-background-normal z-50 shadow': headerFloat },
        )}
      >
        <Link
          to={anchors.home}
          onClick={(event) => {
            event.currentTarget.blur();
            window.scrollTo(0, 0);
          }}
        >
          <img className='h-[1.375rem]' src={logo} alt='logo' />
        </Link>
        <RegularNavBar className='max-lg:hidden' />
        <VerticalNavBar className='lg:hidden' />
      </div>
      {headerFloat && <div className='h-24' />}
    </header>
  );
}

export default Header;
