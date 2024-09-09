import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Swiper core styles
import 'swiper/css/pagination';  // Pagination module styles
import 'swiper/css/navigation';  // Navigation module styles
import { Pagination, Navigation } from 'swiper/modules';
import './BannerSlider.css'; // Import your custom CSS for styling

const BannerSlider = () => {
    const bannerItems = [
        {
            title: 'Limited Offers',
            description: 'Discover Your Next Home: Stylish Rentals for Every Lifestyle',
            image: '/images/Banner.png',  // Replace this with your image path
        },
        {
            title: 'Home For Rents',
            description: 'Explore Our Range of Beautiful Rental Homes and Find Your New Sanctuary',
            image: '/images/Banner2.png',
        },
        {
            title: 'Design Plan',
            description: 'Design modern Homes to showcase your Creativity!',
            image: '/images/Banner3.png',
        },
        {
            title: 'Sold',
            description: 'Houses',
            image: '/images/Banner4.png',
        },
        {
            title: 'Available Flats: Your Next Home Awaits',
            description: 'Explore our selection of modern and comfortable flats, designed to fit your lifestyle and budget. Find the perfect space to call home today!',
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