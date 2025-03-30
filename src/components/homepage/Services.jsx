import ServiceUi from '../ui/ServiceUi'
import Heading from '../ui/Heading'

export default function Services() {
  const expertiseItems = [
    'FrontEnd Development',
    'BackEnd Development',
    'Graphics Design',
    'Search Engine Optimization',
  ]

  const toolBoxItems = [
    'TypeScript',
    'JavaScript',
    'ReactJS/TS',
    'Framer Motion',
    'TailwindCSS',
    'React Query',
    'AndDesign',
    'ShadCN',
    'GSAP',
    'HTML',
    'CSS',
    'Next',
    'Nest',
    'Redux',
    'Express',
  ]

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I focus on all things web development. With each of my
          services, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  )
}
