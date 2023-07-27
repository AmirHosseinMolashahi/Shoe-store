import React from 'react'
import css from './Hero.module.scss';
import * as Unicons from '@iconscout/react-unicons';
import Jordan from '../../assets/jordan.png';
import JordanKid from '../../assets/jordan-kid.png';

const Hero = () => {
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div className={css.upper}>
                <h1><span>The best</span><br /> for the best</h1>
                <button className={css.shopBtn}>Shop now</button>
                <button className={css.ExploreBtn}><Unicons.UilArrowLeft /> Explore</button>
            </div>
            <div className={css.lower}>
                <div className={css.top}>
                    <div className={css.text}>
                        <span>Jordan Shoe</span>
                        <span>350 v2 Beluga</span>
                    </div>
                    <img src={Jordan} className={css.picture} />
                    <div className={css.shoeCircle}>
                        <div className={css.blackCircle}>
                            <div className={css.pinkCircle}>
                                <img src={JordanKid} alt="" />
                            </div>
                        </div>
                        <span>
                            <span>3</span>
                            <span>6</span>
                            <span>#</span>
                        </span>
                    </div>
                </div>
                <div className={css.bottom}>
                    <div className={css.bigText}>
                        Jordan originals
                    </div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium officia ea, Sapiente accusantium officia ea</div>
                    <div>
                        <span>$220</span>
                        <button>order now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero