import React from 'react'
import css from './AboutUs.module.scss';
import shoe1 from '../../assets/about-us/1.png';
import shoe2 from '../../assets/about-us/2.png';
import shoe3 from '../../assets/about-us/3.png';

const AboutUs = () => {
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div className={css.top}>
                <div className={`${css.topText} ${css.AboutText}`}>
                    <h1>About the range</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque ducimus consequatur quam sunt suscipit, non earum tenetur veritatis nisi totam expedita. Eos libero dicta, asperiores officia placeat saepe quaerat?</p>
                    <button>Explore more</button>
                </div>
                <div className={css.topPicture}>
                    <div>
                        <img src={shoe2} alt="" />
                        <img src={shoe3} alt="" />
                    </div>
                </div>
            </div>
            <div className={css.bottom}>
                <div className={css.bottomPicture}>
                    <img src={shoe1} alt="" />
                </div>
                <div className={`${css.bottomText} ${css.AboutText}`}>
                    <h1>Launch</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque ducimus consequatur quam sunt suscipit, non earum tenetur veritatis nisi totam expedita. Eos libero dicta, asperiores officia placeat saepe quaerat?</p>
                    <button>Explore more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs