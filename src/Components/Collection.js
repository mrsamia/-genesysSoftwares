import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CollectionCardData from './CollectionCardData';

function Collection(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
    return (
        <div>
            <Slider {...settings}>

                {
                    CollectionCardData.map((item) => (
                        <div>
                            <div className='d-flex justify-content-center'>
                                <img src={item.img} className="collection-img" />
                            </div>
                            <div className='pt-3 pb-2'>
                                <h3 className='text-center'>{item.title}</h3>
                            </div>
                            <div>
                                <p className='text-center'>{item.content}</p>
                            </div>
                        </div>
                    ))
                }

            </Slider>
        </div>
    );
}

export default Collection;