import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  
import 'swiper/css/pagination';  
import 'swiper/css/navigation'; 
import { Pagination, Navigation } from 'swiper/modules';
import './BannerSlider.css'; 

const BannerSlider = () => {
    const bannerItems = [
        {
            title: 'Limited Offers',
            image: '/images/Banner.png',  
        },
        {
            title: 'Rentals',
            image: '/images/Banner2.png',
        },
        {
          title: 'Discover Your Next Home Today',
          image: '/images/Banner3.png',
        },
        {
            title: 'Find Your Perfect Property',
            image: '/images/Banner4.png',
        },
        {
             title:'Find Your Perfect Property',
            image: '/images/Banner5.png',
        },
        
    ];

    return (
        <div className="banner-slider">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                pagination={{ clickable: true }}
                navigation
                modules={[Pagination, Navigation]}  // Add modules here
            >
                {bannerItems.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="banner-item">
                            <img src={item.image} alt={item.title} className="banner-image" />
                            <div className="banner-content">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;