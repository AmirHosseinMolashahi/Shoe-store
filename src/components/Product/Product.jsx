import React from 'react'
import css from './Product.module.scss';
import Slider from 'react-slick';
import { sliderSettings, products } from '../../utils/data';

const Product = () => {
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div className={css.productHeader}>
                <h1>Boost Range</h1>
                <span>see all product</span>
            </div>
            <div className={`yPaddings ${css.products}`}>
                <Slider {...sliderSettings} className={css.slider}>
                    {
                        products.map((item, i) => {
                            return(
                                <div className={`flexCenter ${css.item}`} key={i}>
                                    <img src={item.picture} alt="" />
                                    <div className={css.info}>
                                        <p>{item.name}</p>
                                        <p>{item.color}</p>
                                        <span>${item.price}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Product