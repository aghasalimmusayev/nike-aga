import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoChevronBack, IoChevronForward, IoPlay, IoPause } from 'react-icons/io5';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css';
import slideV1 from '../../../assets/video/Slide1.mp4'
import slideV2 from '../../../assets/video/Slide3.mp4'
import slideV3 from '../../../assets/video/Slide4.mp4'
import slide5 from '../../../assets/img/nike_boots.jpg'
import slide6 from '../../../assets/img/nike-slider6.jpg'

export default function Slider() {
    const progressCircle = useRef(null);
    const swiperRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef([]);
    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
        }
    };

    // Play/Pause toggle funksiyası
    const toggleAutoplay = () => {
        if (swiperRef.current?.swiper) {
            if (isPlaying) {
                swiperRef.current.swiper.autoplay.pause();
                videoRef.current.forEach(video => {
                    if (video && !video.paused) video.pause()
                })
                setIsPlaying(false);
            } else {
                swiperRef.current.swiper.autoplay.resume();
                videoRef.current.forEach(video => {
                    if (video && video.paused) video.play()
                })
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
                        src={slideV1} autoPlay muted loop playsInline ref={(el) => videoRef.current[0] = el} className='slide_video'>
                    </video>
                    <div className="slide_content">
                        <h1>BRING YOUR GAME</h1>
                        <p>Sport your signature sytle</p>
                        <Link to={'/'}>Shop</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <video
                        src={slideV2} autoPlay muted loop playsInline ref={(el) => videoRef.current[1] = el} className='slide_video'>
                    </video>
                    <div className="slide_content">
                        <h1>SCARY GOOD PACK</h1>
                        <p>Terrify opposition with boots that bring precition, speed and touch.</p>
                        <Link to={'/'}>Explore</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <video
                        src={slideV3} autoPlay muted loop playsInline ref={(el) => videoRef.current[2] = el} className='slide_video'>
                    </video>
                    <div className="slide_content">
                        <h1>AVA ROWER</h1>
                        <p>ReaxtX cushioning for every unexpected turn.</p>
                        <Link to={'/'}>Style Your Ava Rower</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={slide6} alt="" />
                    <div className="slide_content">
                        <h1>BUILT FOR THIS</h1>
                        <p>Performance Worthy of Tennis`` Best</p>
                        <Link to={'/'}>Shop</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='slide'>
                    <img src={slide5} alt="" />
                    <div className="slide_content">
                        <h1>SCARY GOOD</h1>
                        <p>Celebrate the jersey that paints fair in blue</p>
                        <Link to={'/'}>Shop</Link>
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
