import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'
import heroImg from '/src/assets/images/heroimg.webp'

export default function Hero() {
  const img = useRef(null)
  const imgContainer = useRef(null)
  const titles = useRef([])
  const scrollLine = useRef(null)
  const scroll = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 })
    tl.from(scrollLine.current, {
      translateX: -40,
      duration: 1.5,
      ease: 'power4.inOut',
    })
  }, [])

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(imgContainer.current, {
      scale: 1.3,
      duration: 3.25,
      ease: 'power3.inOut',
    })
      .from(
        img.current,
        { scale: 2, duration: 3.2, ease: 'power4.inOut' },
        '-=3.1',
      )
      .to(titles.current, { y: 0, duration: 2, ease: 'power4.inOut' }, '-=2.5')
      .from(scroll.current, { opacity: 0, duration: 1, ease: 'out' }, '-=2')
  }, [])

  return (
    <section
      id="hero"
      className="hero relative flex h-screen w-full select-none items-center justify-center"
      aria-label="hero"
    >
      <div className="z-10 flex w-full  flex-col items-center text-title font-bold uppercase text-accent-300  2xl:space-y-16 2xl:text-[10vw]">
        <div className="title 2xl:py-16">
          {/* Learn more about useRef */}
          <h1
            ref={(el) => (titles.current[0] = el)}
            className="translate-y-96 overflow-visible"
          >
            Hey, I&apos;m Seth
          </h1>
        </div>
        <div className=" title 2xl:py-16">
          <h1
            ref={(el) => (titles.current[1] = el)}
            className="font-outline-3 md:font-outline-4 translate-y-96 overflow-visible text-transparent"
          >
            Hey, I&apos;m Seth
          </h1>
        </div>
        <div className=" title 2xl:py-16">
          <h1 ref={(el) => (titles.current[2] = el)} className="translate-y-96">
            Hey, I&apos;m Seth
          </h1>
        </div>
      </div>
      <div
        ref={imgContainer}
        className="absolute mx-auto  w-[55%] overflow-hidden rounded-md"
      >
        <img
          ref={img}
          className=" aspect-[11/16] h-auto w-full scale-110 rounded-md opacity-50 sm:aspect-[5/6] md:aspect-[7/7] lg:aspect-[11/9]"
          src={heroImg}
          alt="Abstract cubic background image."
        />
      </div>
      <div
        ref={scroll}
        className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8"
      >
        <span className=" rotate-90 text-body-3">scroll</span>
        <div className="relative h-1 w-10 rotate-90 overflow-hidden">
          <span
            ref={scrollLine}
            className="absolute h-[0.08em] w-10 translate-x-10 bg-accent-300"
          ></span>
        </div>
      </div>
    </section>
  )
}
