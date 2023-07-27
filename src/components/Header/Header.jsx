import React, {useRef, useState } from 'react'
import css from './Header.module.scss';
import * as Unicons from '@iconscout/react-unicons';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import useHeaderShadow from '../../hooks/useHeaderShadow';

const Header = () => {

    const [menuOpend, setMenuOpened] = useState(false);
    const headerShadow = useHeaderShadow()
    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 640) {
        if (!menuOpened){
            return { left: "-15rem" };
        } else {
            return { left: "0" };
        }
        }
    };

    const menuRef = useRef()


    useOutsideAlerter(
        {
        menuRef,
        setMenuOpened
        }
    )


  return (
    <>
    <div className={css.menuIcon}
      onClick={() => setMenuOpened((prev) => !prev)}>
        <Unicons.UilBars />
    </div>
    <div className={css.resposivelogo}>
        <Unicons.UilReact />
        <span>Amiwr store</span>
    </div>
    <div className={css.wrapper} style={getMenuStyles(menuOpend)}>
        <div className={css.container} style={{backgroundColor: headerShadow}}>
            <ul className={css.leftNavbar}>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>

            <div className={css.logo}>
                <Unicons.UilReact />
                <span>Amiwr store</span>
            </div>

            <ul className={css.rightNavbar}>
                <li>Story</li>
                <li>News</li>
                <li>Contact</li>
                <li><Unicons.UilSearch /></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Header