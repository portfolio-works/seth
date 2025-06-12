import ServiceUi from '../ui/ServiceUi'
import Heading from '../ui/Heading'

export default function Services() {
  const expertiseItems = ['BackEnd Development', 'FrontEnd Development', 'Graphics Design']

  const toolBoxItems = [
    'TypeScript',
    'JavaScript',
    'React',
    'NodeJs',
    'TailwindCSS',
    'React Query',
    'ShadCN',
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
          description="I focus on all things software development. With each of my
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
