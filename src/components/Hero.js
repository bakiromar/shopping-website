"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {

    let settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            image: "/banner-4.jpg",
            title: "Trending Item",
            mainTitle: "MEN'S LATEST FASHION SALE",
            price: "$50",
        },
        {
            id: 1,
            image: "/banner-8.jpg",
            title: "New Arrivals",
            mainTitle: "TRENDING ACCESSORIES",
            price: "$30",
        },
        {
            id: 2,
            image: "/banner-6.jpg",
            title: "Best Seller",
            mainTitle: "NEW ARRIVALS FOR WOMEN",
            price: "$60",
        },
    ];
  return (
    <div>
        <div className="container mx-auto pt-10 lg:pt-0">
            <Slider {...settings}>
                {slideData.map((item) => {
                    return (
                    <Slide 
                    key={item.id} 
                    img={item.image}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    price={item.price}
                    />
                    )
                })}
            </Slider>
        </div>
    </div>
  );
};

export default Hero