import React from 'react'
import css from './News.module.scss';
import img1 from '../../assets/news/1.png';

const News = () => {
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div className={css.textHeader}>
                <span>Latest news</span>
                <span>see more news</span>
            </div>
            <div className={css.gridParent}>
                <div className={css.div1}>
                    <div className={css.text}>
                        <h1>Product to watch</h1>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusamus odio deleniti,</p>
                    </div>
                    <img src={img1} alt="" />
                </div>
                <div className={css.div2}>
                    <div>
                        <div className={css.text}>
                            <h1>Product to watch</h1>
                            <hr />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusamus odio deleniti,</p>
                        </div>
                    </div>
                </div>
                <div className={css.div3}> </div>
                <div className={css.div4}> </div>
                <div className={css.div5}> </div>
                <div className={css.div6}> </div>
            </div>
        </div>
    </div>
  )
}

export default News