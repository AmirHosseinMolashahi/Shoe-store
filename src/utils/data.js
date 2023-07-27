

export const products = [
  {picture: './product/1.png', name: 'Air force', color: 'white/black', price: 220 },
  {picture: './product/2.png', name: 'Air force', color: 'white/black', price: 250 },
  {picture: './product/3.png', name: 'Air force', color: 'white/black', price: 180 },
  {picture: './product/4.png', name: 'Air force', color: 'white/black', price: 200 },
  {picture: './product/5.png', name: 'Air force', color: 'white/black', price: 160 },
  {picture: './product/6.png', name: 'Air force', color: 'white/black', price: 240 },
]


export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
