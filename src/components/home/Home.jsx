import React, { useState } from 'react'
import Image1 from "../../assets/img.jpg";
import Image2 from "../../assets/img2.jpg";
import Image3 from "../../assets/img.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import NavBar from '../navbar/NavBar';


export default function Home() {

  const slides = [
    {
        url: Image1,
    },
    {
        url: Image2,
    },
    {
        url: Image3,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const previousSlide = () =>
  {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1
    setCurrentIndex(newIndex);
  }

  const nextSlide = () =>
  {
    const isLastSlide = currentIndex === slides.length-1
    const newIndex= isLastSlide ? 0 : currentIndex+1 
    setCurrentIndex(newIndex)
  }

  setInterval(()=>{ 
    const isLastSlide = currentIndex ===slides.length-1

    if(isLastSlide)
    {
        setCurrentIndex(0)
    }
    else
    {
        setCurrentIndex(currentIndex+1)
    }

  },5000)


  return (
    <div className='w-full h-screen '>

        <NavBar/>

        <div className='max-w-[640px] max h-[300px] 2xl:max-w-[1400px] 2xl:h-[780px] m-auto relative top-20 duration-1000 group '>
            <div style={{backgroundImage : `url(${slides[currentIndex].url})`}}
             className='w-full h-full rounded-2xl bg-center 2xl:bg-cover'></div>
             <div className='absolute text-white top-[45%] left-2 bg-black/20 py-1 rounded-lg hidden group-hover:block duration-1000 cursor-pointer'
            onClick={previousSlide}>
                <BsChevronCompactLeft size={30}/>
             </div>
             <div className='absolute text-white top-[45%] right-2 bg-black/20 py-1 rounded-lg hidden group-hover:block duration-1000 cursor-pointer'
             onClick={nextSlide}>
                <BsChevronCompactRight size={30}/>
             </div>
             <div className='flex justify-center p-4'>
                {
                    slides.map((slide, slideIndex)=>(
                        <div key={slideIndex} className='text-2xl cursor-pointer active:text-3xl'>
                          <RxDotFilled onClick={()=>{setCurrentIndex(slideIndex)}}/> 
                        </div>
                    ))
                }
             </div>
        </div>
        
    </div>
  )
}
