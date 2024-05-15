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
              setCurrentImageIndex(imageFilenames[imageFilenames.length - 1])
            }
            else {
              setCurrentImageIndex(Math.floor(self.progress * 31))
              if (temp >= 0) {
                setCurrentImageIndex(temp)
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

      {/* hero animation */}

      <div className='flex flex-col items-center justify-center text-white lg:h-screen min-h-screen  relative'>
        <div className='w-full h-screen flex items-center justify-center pin-this z-[19]'>
          <img
            id="sequence-img"
            ref={imageRef}
            key={'unique-image-key'}
            src={imageFilenames[currentImageIndex]}
            // src="/bottle-sequence/00001.webp"
            alt="image"
            className={`w-full h-full object-cover`} />
        </div>

        <div className='w-full h-screen flex-shrink-0 flex flex-col items-center justify-start pt-44 absolute z-[18]'>

          <div className='flex flex-col items-center justify-center text-center -mt-1'>
            <h1 className='lg:text-xl text-base text-center'>Smarter Sips, Effortless Wellbeing.</h1>
            <h2 className='text-cyanLight opacity-90 lg:text-8xl text-5xl font-semibold'>Series L1</h2>
          </div>



        </div>

        <div className='w-full h-full flex items-end justify-center pb-20 absolute z-[22]'>
          <button className='h-[42px] px-7 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium'>
            Order Now
          </button>
        </div>
      </div>

      <div className='z-[20] relative'>

        <div className='w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center text-center lg:gap-2'>
            <h1 className='text-white lg:text-xl text-base text-center lg:w-full w-9/12 mx-auto'>LWL8 - Smart Water Bottle Is Your Ultimate Companion!</h1>
            <h2 className='text-cyanLight opacity-90 lg:text-6xl text-3xl font-semibold'>Ultimate Campanion!</h2>
          </div>
        </div>

        <div className='w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center text-center gap-2'>
            <h2 className='text-white lg:text-6xl text-3xl font-semibold'>Let's Discover Why</h2>
          </div>
        </div>
      </div>


      {/* remaining sections */}

      <div className='bg-black w-full lg:h-screen min-h-screen flex lg:flex-row flex-col items-center justify-center'>

        <div className='lg:w-6/12 h-full flex-shrink-0 w-full lg:p-0 p-6'>
          <div className='flex flex-col items-start justify-center text-start lg:gap-2 w-full h-full lg:pl-20 lg:w-11/12'>
            <h1 className='text-white lg:text-xl text-sm text-start'>Premium Safety Assurance</h1>
            <h2 className='text-cyanLight opacity-90 lg:text-4xl text-xl font-semibold'>Superior Safety with
            </h2>
            <h2 className='text-white opacity-90 lg:text-4xl text-xl font-semibold'>
              Tritan Food-Grade Material
            </h2>
          </div>
        </div>

        <div className='lg:w-6/12 h-full flex-shrink-0 lg:p-10 p-6'>
          <img src="section-1-bottle.webp" alt="section" className='w-full h-full object-contain' />
        </div>

      </div>

      <div className='bg-black w-full lg:h-screen min-h-screen flex lg:flex-row-reverse flex-col-reverse items-center justify-center'>

        <div className='lg:w-6/12 h-full flex-shrink-0 lg:p-0 p-6 w-full'>
          <div className='flex flex-col items-start justify-center text-start lg:gap-2 w-full h-full lg:pl-20 lg:w-11/12'>
            <h1 className='text-white lg:text-xl text-sm text-start'>Ergonomic comfort</h1>
            <h2 className='text-cyanLight opacity-90 lg:text-4xl text-xl font-semibold'>Know how much water you drink
            </h2>
            <h2 className='text-white opacity-90 lg:text-4xl text-xl font-semibold'>
              and get reminders in case you forget
            </h2>
          </div>
        </div>

        <div className='lg:w-6/12 h-full flex-shrink-0 lg:p-10 p-6'>
          <img src="section-2-bottle.webp" alt="section" className='w-full h-full object-contain' />
        </div>



      </div>

      <div className='bg-black w-full lg:h-screen min-h-screen lg:flex hidden lg:flex-row flex-col items-center justify-center'>

        <div className='w-full h-full absolute '>
          <div className='lg:w-6/12 h-full flex-shrink-0 w-full lg:p-0 p-6'>
            <div className='flex flex-col items-start justify-center text-start lg:gap-2 w-full h-full lg:pl-20 '>
              <h1 className='text-white lg:text-xl text-sm text-start'>Hydration Monitoring and Reminders</h1>
              <h2 className='text-cyanLight opacity-90 lg:text-4xl text-xl font-semibold'>Unmatched Comfort and
              </h2>
              <h2 className='text-white opacity-90 lg:text-4xl text-xl font-semibold'>
                <span className='text-cyanLight'>Adaptability</span> with Ergonomic Design
              </h2>
            </div>
          </div>
        </div>

        <div className='w-full h-full flex-shrink-0'>
          <img src="section-3-bottle.webp" alt="section" className='w-full h-full object-contain' />
        </div>

      </div>


    </div>
  )
}

export default Home


// export async function getStaticProps() {
//   let data = {}
//   //call page api here

//   return {
//     props: {
//       data: data
//     }
//   }
// }
