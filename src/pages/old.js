//old
import React, { Fragment, useEffect, useRef, useState } from 'react'
import gsap from 'gsap/dist/gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const ImagePreloader = ({ imageUrls }) => {
  useEffect(() => {
    const preloadImages = () => {
      imageUrls.forEach((imageUrl) => {
        const img = new Image();
        img.src = imageUrl;
      });
    };

    preloadImages();
  }, []);

  return null; // No need to render anything
};

const Home = () => {

  const start = 1;
  const end = 35;

  // const imageFilenames = Array.from({ length: end }, (_, i) => {
  //   const paddedIndex = String(i + start).padStart(5, "0");
  //   return "/sequence/" + paddedIndex + ".jpg";
  // });

  const imageFilenames = Array.from({ length: end }, (_, i) => {
    const paddedIndex = String(i + start).padStart(5, "0");
    return "/bottle-sequence/" + paddedIndex + ".webp";
  });

  // console.log(imageFilenames, 'imageFilenames')

  useEffect(() => {

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

    let ctx = gsap.context(() => {

      gsap.to('.pin-this-image', {
        scrollTrigger: {
          trigger: '.container-one',
          start: 'top top',
          end: '800% bottom',
          markers: true,
          pin: '.pin-this-image',
          pinSpacing: true,
          onUpdate: (self) => {
            let temp = Math.floor(self.progress * 100)
            if (temp >= 35) {
              imageRef.current.src = imageFilenames[imageFilenames.length - 1]
            }
            else {
              setCurrentImageIndex(Math.floor(self.progress * 100))
              imageRef.current.src = imageFilenames[temp]
              // document.getElementById('sequence-img').style.src = imageFilenames[temp]
            }
          }
        }
      })


    })

    return () => ctx.revert()

  }, [])

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  console.log(imageFilenames[currentImageIndex], 'image url')

  const videoRef = useRef(null)
  const imageRef = useRef(null)

  return (
    <Fragment>

      <ImagePreloader imageUrls={imageFilenames} />

      <div className="flex flex-col w-full relative min-h-screen">

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center container-one relative'>
          <img
            id="sequence-img"
            ref={imageRef}
            key={'unique-image-key'}
            // src={imageFilenames[currentImageIndex]}
            src="/bottle-sequence/00001.jpg"
            alt="image"
            className={`w-full h-full object-cover pin-this-image `} />

          <div className='w-full h-full absolute flex flex-col items-center justify-start pt-40'>

            <div className='flex flex-col items-center justify-center text-center gap-2'>
              <h1 className='text-white lg:text-xl text-center'>Smarter Sips, Effortless Wellbeing.</h1>
              <h2 className='text-cyanLight opacity-90 lg:text-7xl font-semibold'>Series L1</h2>
            </div>

          </div>


          <div className='w-full h-screen flex-shrink-0 flex flex-col items-center justify-center absolute top-[100vh]'>
            <div className='flex flex-col items-center justify-center text-center gap-2'>
              <h1 className='text-white lg:text-xl text-center'>LWL8 - Smart Water Bottle Is Your Ultimate Companion!</h1>
              <h2 className='text-cyanLight opacity-90 lg:text-6xl font-semibold'>Ultimate Campanion!</h2>
            </div>
          </div>


          <div className='w-full h-screen flex-shrink-0 flex flex-col items-center justify-center absolute top-[200vh]'>
            <div className='flex flex-col items-center justify-center text-center gap-2'>
              <h2 className='text-white lg:text-6xl font-semibold'>Let's Discover Why</h2>
            </div>
          </div>

        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 2
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 3
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center end-here'>
          Container 4
        </div>

      </div>

    </Fragment>
  )
}

export default Home

export async function getStaticProps() {
  let data = {}
  return {
    props: {
      data: data
    }
  }
}