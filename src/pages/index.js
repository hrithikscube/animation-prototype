import React, { Fragment, useEffect, useRef, useState } from 'react'
import gsap from 'gsap/dist/gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

// import '../../public/bottle-sequence/00001.webp'
// import '../../public/bottle-sequence/00002.webp'
// import '../../public/bottle-sequence/00003.webp'
// import '../../public/bottle-sequence/00004.webp'
// import '../../public/bottle-sequence/00005.webp'
// import '../../public/bottle-sequence/00006.webp'
// import '../../public/bottle-sequence/00007.webp'
// import '../../public/bottle-sequence/00008.webp'
// import '../../public/bottle-sequence/00009.webp'
// import '../../public/bottle-sequence/00010.webp'

// import '../../public/bottle-sequence/00011.webp'
// import '../../public/bottle-sequence/00012.webp'
// import '../../public/bottle-sequence/00013.webp'
// import '../../public/bottle-sequence/00014.webp'
// import '../../public/bottle-sequence/00015.webp'
// import '../../public/bottle-sequence/00016.webp'
// import '../../public/bottle-sequence/00017.webp'
// import '../../public/bottle-sequence/00018.webp'
// import '../../public/bottle-sequence/00019.webp'
// import '../../public/bottle-sequence/00020.webp'

// import '../../public/bottle-sequence/00021.webp'
// import '../../public/bottle-sequence/00022.webp'
// import '../../public/bottle-sequence/00023.webp'
// import '../../public/bottle-sequence/00024.webp'
// import '../../public/bottle-sequence/00025.webp'
// import '../../public/bottle-sequence/00026.webp'
// import '../../public/bottle-sequence/00027.webp'
// import '../../public/bottle-sequence/00028.webp'
// import '../../public/bottle-sequence/00029.webp'
// import '../../public/bottle-sequence/00030.webp'

// import '../../public/bottle-sequence/00031.webp'
// import '../../public/bottle-sequence/00032.webp'
// import '../../public/bottle-sequence/00033.webp'
// import '../../public/bottle-sequence/00034.webp'
// import '../../public/bottle-sequence/00035.webp'

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
          end: '600% bottom',
          markers: true,
          pin: '.pin-this-image',
          // scrub: 6,
          onUpdate: (self) => {
            let temp = Math.floor(self.progress * 100)
            if (temp >= 35) {
              return;
            }
            else {
              setCurrentImageIndex(Math.floor(self.progress * 100))
              imageRef.current.src = imageFilenames[temp]
              // document.getElementById('sequence-img').style.src = imageFilenames[temp]
            }

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

  // console.log(currentImageIndex, 'currentImageIndex')

  return (
    <Fragment>

      <ImagePreloader imageUrls={imageFilenames} />

      <div className="flex flex-col w-full relative overflow-auto min-h-screen">

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center container-one'>
          <img
            id="sequence-img"
            ref={imageRef}
            key={'unique-image-key'}
            // src={imageFilenames[currentImageIndex]}
            src="/bottle-sequence/00001.jpg"
            alt="image"
            className={`w-full h-full object-cover pin-this-image ${currentImageIndex >= 35 ? 'hidden' : 'block'}`} />

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

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 2
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 3
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 4
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 5
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 2
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 3
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 4
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 5
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 2
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 3
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 4
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 5
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 2
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 3
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 4
        </div>

        <div className='bg-black w-full h-screen flex-shrink-0 flex flex-col items-center justify-center'>
          Container 5
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