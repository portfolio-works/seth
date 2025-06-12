import image from '/src/assets/images/image.png'
import imageTwo from '/src/assets/images/image-two.png'
import imageThree from '/src/assets/images/image-three.png'
import imageFour from '/src/assets/images/image-four.png'
import imageFive from '/src/assets/images/image-five.png'
import Projects from '../ui/Projects'
import Heading from '../ui/Heading'

export default function Works({ forwardedRef }) {
  return (
    <section ref={forwardedRef} id="works" className="nav-change my-[10%] overflow-hidden">
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project */}
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://app.hcmatrix.com/"
            img={imageThree}
            alt="HcMatrix 3.0"
            name="HcMatrix 3.0"
            type="Backend Development • SASS"
            year="2025"
            tools="NodeJS • Express • SQL"
          />
        </div>
        {/* Project */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link=""
            img={imageFive}
            alt="Vine Charge Sass"
            name="VINE CHARGE (EV SOLUTION)"
            type="FullStack Development • SASS"
            year="2025"
            tools="React • ShadCN • NestJs • SQL"
          />
        </div>
        {/* Project */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://user-guide-frontend-h3-0.vercel.app/"
            img={imageTwo}
            alt="Airofunds"
            name="User Guide App"
            type="FullStack Development • SASS"
            year="2024"
            tools="React • TailwindCSS • AntDesign • Redux"
          />
        </div>
        {/* Project*/}
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://www.airopay.ae/"
            img={imageFour}
            alt="Airopay Landing page"
            name="AIROPAY"
            type="Frontend Development • Landing Page"
            year="2024"
            tools="TailwindCSS • React • Framer Motion"
          />
        </div>
        {/* pending */}
        <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://ellington-funds.vercel.app/"
            img={image}
            alt="Airofunds"
            name="AiroFunds"
            type="Frontend Development • Landing Page "
            year="2024"
            tools="React • TailwindCSS • Typescript"
          />
        </div>
      </div>
    </section>
  )
}
