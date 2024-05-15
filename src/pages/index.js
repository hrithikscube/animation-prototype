import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap/dist/gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

const start = 1;
const end = 35;

const imageFilenames = Array.from({ length: end }, (_, i) => {
  const paddedIndex = String(i + start).padStart(5, "0");
  return "/bottle-sequence/" + paddedIndex + ".webp";
});

const Home = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  console.log(imageFilenames[currentImageIndex], 'image url')

  // const videoRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

    let ctx = gsap.context(() => {

      gsap.to('.pin-this', {
        scrollTrigger: {
          trigger: '.pin-this',
          start: 'top top',
          end: '300% bottom',
          // markers: true,
          pin: true,
          pinSpacing: false,
          onUpdate: (self) => {
            let temp = Math.floor(self.progress * 31)
            if (temp >= 35) {
              imageRef.current.src = imageFilenames[imageFilenames.length - 1]
            }
            else {
              setCurrentImageIndex(Math.floor(self.progress * 31))
              if (temp >= 0) {
                imageRef.current.src = imageFilenames[temp]
              }
            }
          }

        }
      })

    })

    return () => ctx.revert()

  }, [])


  return (
    <div className='relative bg-black text-white'>

      <div className='flex flex-col items-center justify-center text-white h-screen  relative'>
        <div className='w-full h-screen flex items-center justify-center pin-this z-[19]'>
          <img
            id="sequence-img"
            ref={imageRef}
            key={'unique-image-key'}
            src="/bottle-sequence/00001.webp"
            alt="image"
            className={`w-full h-full object-cover`} />
        </div>

        <div className='w-full h-screen flex-shrink-0 flex flex-col items-center justify-start pt-44 absolute z-[18]'>

          <div className='flex flex-col items-center justify-center text-center -mt-1'>
            <h1 className=' lg:text-xl text-center'>Smarter Sips, Effortless Wellbeing.</h1>
            <h2 className='text-cyanLight opacity-90 lg:text-8xl font-semibold'>Series L1</h2>
          </div>

        </div>
      </div>

      <div className='z-[20] relative'>

        <div className='w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center text-center gap-2'>
            <h1 className='text-white lg:text-xl text-center'>LWL8 - Smart Water Bottle Is Your Ultimate Companion!</h1>
            <h2 className='text-cyanLight opacity-90 lg:text-6xl font-semibold'>Ultimate Campanion!</h2>
          </div>
        </div>

        <div className='w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center text-center gap-2'>
            <h2 className='text-white lg:text-6xl font-semibold'>Let's Discover Why</h2>
          </div>
        </div>
      </div>


      <div className='bg-purple-500 w-full h-screen flex items-center justify-center'>
        hello world
      </div>


    </div>
  )
}

export default Home


export async function getStaticProps() {
  let data = {}
  //call page api here
  
  return {
    props: {
      data: data
    }
  }
}
