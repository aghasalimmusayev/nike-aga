import React, { memo, useCallback, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';
import slideV1 from '../../../../assets/video/Slide1.mp4'
import slideV2 from '../../../../assets/video/Slide3.mp4'
import slideV3 from '../../../../assets/video/Slide4.mp4'
import slide5 from '../../../../assets/img/nike_boots.jpg'
import slide6 from '../../../../assets/img/nike-slider6.jpg'
import ButtonLink from '../../../childComponents/ButtonLink'

function Slider() {
    const progressCircle = useRef(null);
    const swiperRef = useRef(null);
    const videoRef = useRef([]);

    const onAutoplayTimeLeft = useCallback((s, time, progress) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
        }
    }, []);

    return (
        <>
            <Swiper
                ref={swiperRef}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper">

                <SwiperSlide className='slide'>
                    <video
                        src={slideV1}
                        autoPlay
                        muted
                        loop
                        playsInline
                        ref={(el) => videoRef.current[0] = el}
                        className='slide_video'>
                    </video>
                    <div className="slide_content">
                        <h1>BRING YOUR GAME</h1>
                        <p>Sport your signature sytle</p>
                        <ButtonLink text='Shop' to='/' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <video
                        src={slideV2}
                        autoPlay
                        muted
                        loop
                        playsInline
                        ref={(el) => videoRef.current[1] = el}
                        className='slide_video'>
                    </video>
                    <div className="slide_content">
                        <h1>SCARY GOOD PACK</h1>
                        <p>Terrify opposition with boots that bring precition, speed and touch.</p>
                        <ButtonLink text='Explore' to='/' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <video
                        src={slideV3}
                        autoPlay
                        muted
                        loop
                        playsInline
                        ref={(el) => videoRef.current[2] = el}
                        className='slide_video'>
                    </video>
                    <div className="slide_content">
                        <h1>AVA ROWER</h1>
                        <p>ReaxtX cushioning for every unexpected turn.</p>
                        <ButtonLink text='Style Your Ava Rower' to='/products' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={slide6} alt="" />
                    <div className="slide_content">
                        <h1>BUILT FOR THIS</h1>
                        <p>Performance Worthy of Tennis`` Best</p>
                        <ButtonLink text='Shop' to='/products' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={slide5} alt="" />
                    <div className="slide_content">
                        <h1>SCARY GOOD</h1>
                        <p>Celebrate the jersey that paints fair in blue</p>
                        <ButtonLink text='Shop' to='/products' />
                    </div>
                </SwiperSlide>

                <div className="custom-navigation" slot="container-end">
                    <button
                        className="custom-nav-btn custom-nav-prev"
                        onClick={() => swiperRef.current?.swiper?.slidePrev()}>
                        <IoChevronBack />
                    </button>
                    <button
                        className="custom-nav-btn custom-nav-next"
                        onClick={() => swiperRef.current?.swiper?.slideNext()}>
                        <IoChevronForward />
                    </button>
                </div>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                </div>
            </Swiper>
        </>
    );
}

export default memo(Slider)