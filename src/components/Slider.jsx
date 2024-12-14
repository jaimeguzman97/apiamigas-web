import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export const Slider = () => {

    const slides = [
        {
            url: 'assets/fotoportada.jpg'
            
        },
        {
            url: 'assets/local1.jpg'
        },
        {
            url: 'assets/oficina.jpg'
        },
        {
            url: 'assets/local2.jpg'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(1);

    const prevSlide = () => {

        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;

        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {

        setCurrentIndex(slideIndex)
    }

    //1920 1400
    return (


        <div className="max-w-[1500px] h-[900px] w-full m-auto py-16 px-4 relative group mt-8 hidden md:block">

            <div className="flex py-10 absolute top-[55%] left-[5%] backdrop-brightness-125 drop-shadow-xl bg-white/30  rounded-full">
                <img className="brightness-50 w-64 px-10" src="assets/logo.png" alt="" />
            </div>

            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>

            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer" >
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

            <div className="flex justify-center gap-2 mt-5">
                {slides.map((slide, slideIndex) => (

                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`transition-all cursor-pointer w-2 h-2 bg-yellow-500 rounded-full ${currentIndex == slideIndex ? "p-1" : "bg-opacity-50"}`}>
                       
                    </div>
                ))}
            </div>
        </div>


    )
}
