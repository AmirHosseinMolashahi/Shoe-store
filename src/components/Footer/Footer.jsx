import React from 'react'
import css from './Footer.module.scss';
import * as Unicons from '@iconscout/react-unicons';

const Footer = () => {
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div className={css.logo}>
                <Unicons.UilReact />
            </div>

            <div className={css.list}>
            <ul>
                <li>Faq</li>
                <li>shipping</li>
                <li>returns</li>
                <li>t&cs</li>
                <li>contact</li>
                <li>stories</li>
            </ul>

            <ul>
                <li><Unicons.UilFacebook /></li>
                <li><Unicons.UilTwitter /></li>
                <li><Unicons.UilInstagram /></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer