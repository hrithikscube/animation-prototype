import React, { Fragment, useEffect, useRef, useState } from 'react'
import gsap from 'gsap/dist/gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const Home = () => {

  const start = 1;
  const end = 4986;

  const imageFilenames = Array.from({ length: end }, (_, i) => {
    const paddedIndex = String(i + start).padStart(5, "0");
    return "/sequence/" + paddedIndex + ".jpg";
  });

  const ImagePreloader = ({ imageUrls }) => {
    useEffect(() => {
      const preloadImages = () => {
        imageUrls.forEach((imageUrl) => {
          const img = new Image();
          img.src = imageUrl;
        });
      };
  
      preloadImages();
    }, [imageUrls]);
  
    return null; // No need to render anything
  };

  console.log(imageFilenames, 'imageFilenames')

  useEffect(() => {

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

    let ctx = gsap.context(() => {

      gsap.to('.pin-this-image', {
        scrollTrigger: {
          trigger: '.container-one',
          start: 'top top',
          end: '1700% bottom',
          markers: true,
          pin: '.pin-this-image',
          onUpdate: (self) => {
            let temp = Math.floor(self.progress * 100)

            setCurrentImageIndex(Math.floor(self.progress * 100))

            // const video = videoRef.current;
            // const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            // const currentTime = scrollPercentage * video.duration;
            // video.currentTime = currentTime;
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

  console.log(currentImageIndex, 'currentImageIndex')

  return (
    <Fragment>

    <ImagePreloader imageUrls={imageFilenames.slice(1,102)} /> 

      <div className="flex flex-col w-full relative overflow-auto min-h-screen">

        <div className='bg-red-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center container-one'>
           <img
            // ref={imageRef}
            key={'unique-image-key'}
            src={imageFilenames[currentImageIndex]}
            // src="/sequence/00001.jpg" 
            alt="image"
            className='w-[700px] h-[450px] object-cover pin-this-image' /> 

           {/* <video
            perload="auto"
            // key={'video-unique-key'}
            ref={videoRef}
            src="/batman.mp4"
            alt="batman"
            controls={true}
            className='w-full h-full object-cover pin-this-image' />
 */}
        </div>

        <div className='bg-blue-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 2
        </div>

        <div className='bg-green-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 3
        </div>

        <div className='bg-cyan-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 4
        </div>

        <div className='bg-purple-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 5
        </div>

        <div className='bg-blue-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 2
        </div>

        <div className='bg-green-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 3
        </div>

        <div className='bg-cyan-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 4
        </div>

        <div className='bg-purple-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 5
        </div>

        <div className='bg-blue-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 2
        </div>

        <div className='bg-green-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 3
        </div>

        <div className='bg-cyan-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 4
        </div>

        <div className='bg-purple-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 5
        </div>

        <div className='bg-blue-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 2
        </div>

        <div className='bg-green-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 3
        </div>

        <div className='bg-cyan-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 4
        </div>

        <div className='bg-purple-500 w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 5
        </div>

      </div>

    </Fragment>
  )
}

export default Home

export async function getServerSideProps() {
  let data = {}
  return {
    props: {
      data: data
    }
  }
}