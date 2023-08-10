import { useState } from 'react';
import menuBurger from '../../../../assets/img/menu/menu-outline.svg';
import menuClose from '../../../../assets/img/menu/close-outline.svg';
import RegularNavBar from '../RegularNavBar';

function VerticalNavBar({ className }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const visibility = menuOpen ? 'show' : 'hide';
  return (
    <div className={className}>
      {!menuOpen && (
        <button
          type='button'
          className='hover:scale-110'
          onClick={() => setMenuOpen(true)}
        >
          <img src={menuBurger} alt='menu' width='40px' />
        </button>
      )}
      <RegularNavBar className={`flex-col gap-10 fixed right-6 top-6 bg-background-normal px-10 py-6 rounded-lg lg:hidden
                                  transition-all ease-in-out duration-300
                                  [&.show]:-translate-x-0
                                  [&.hide]:translate-x-[125%]
                                  ${visibility}`}
      >
        <button
          type='button'
          className='hover:scale-125'
          onClick={() => setMenuOpen(false)}
        >
          <img src={menuClose} alt='menu' width='40px' />
        </button>
      </RegularNavBar>
    </div>
  );
}

export default VerticalNavBar;
