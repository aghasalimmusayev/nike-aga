import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoChevronBack, IoChevronForward, IoPlay, IoPause } from 'react-icons/io5';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';
import slide1 from '../../../assets/img/nike-slider1.webp'
import slide2 from '../../../assets/img/nike-slider2.webp'
import slide3 from '../../../assets/img/nike-slider3.webp'
import slide4 from '../../../assets/img/nike-slider4.webp'


export default function Slider() {
    const progressCircle = useRef(null);
    const swiperRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
        }
    };
    // Play/Pause toggle funksiyası
    const toggleAutoplay = () => {
        if (swiperRef.current?.swiper) {
            if (isPlaying) {
                swiperRef.current.swiper.autoplay.pause(); // stop əvəzinə pause
                setIsPlaying(false);
            } else {
                swiperRef.current.swiper.autoplay.resume(); // start əvəzinə resume
                setIsPlaying(true);
            }
        }
    };

    return (
        <>
            <Swiper
                ref={swiperRef}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
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
                    <button
                        className="play-pause-btn"
                        onClick={toggleAutoplay}>
                        {isPlaying ? <IoPause /> : <IoPlay />}
                    </button>
                </div>
            </Swiper>
        </>
    );
}
