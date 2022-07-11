import CourseCard from '@/components/Common/CourseCard'
import Hero from '@/components/Common/Hero'
import ItemRow from '@/components/Common/ItemRow'
import MainLayout from '@/components/Common/MainLayout'
import SectionTitle from '@/components/Common/SectionTitle'
import SmartLink from '@/components/Primitive/SmartLink'
import ChevronRightIcon from '@heroicons/react/solid/ChevronRightIcon'
import type { NextPage } from 'next'

const courses = [
  {
    title: 'FE Video Game Design College Courses',
    href: '#'
  },
  {
    title: 'Alternative Schools Pathway Video Game Design Course',
    href: '#'
  },
  {
    title: 'Online Video Game Design Courses',
    href: '#'
  }
]

const aboutItems = [
  {
    title: 'Purpose',
    subtitle: `Offering the neurodiverse opportunities to enable maximum
  capabilities and confidence through learning video game design -
  Education without boundaries.`,
    a11yText: 'Purpose',
    icon: 'purpose'
  },
  {
    title: 'Purpose',
    subtitle: `Offering the neurodiverse opportunities to enable maximum
  capabilities and confidence through learning video game design -
  Education without boundaries.`,
    a11yText: 'Purpose',
    icon: 'purpose'
  },
  {
    title: 'Purpose',
    subtitle: `Offering the neurodiverse opportunities to enable maximum
  capabilities and confidence through learning video game design -
  Education without boundaries.`,
    a11yText: 'Purpose',
    icon: 'purpose'
  },
  {
    title: 'Purpose',
    subtitle: `Offering the neurodiverse opportunities to enable maximum
  capabilities and confidence through learning video game design -
  Education without boundaries.`,
    a11yText: 'Purpose',
    icon: 'purpose'
  }
]

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      {/* Intro */}
      <div className="space-y-12 lg:space-y-24 container-lg">
        <section className="py-8 px-4 lg:p-12 lg:py-16 mt-[-5rem] bg-secondary rounded-lg shadow">
          <div className="space-y-6 md:space-y-8 text-white">
            <h2 className="relative heading-xlarge left-1">Main courses</h2>
            {courses.map((course) => (
              <SmartLink
                className="flex items-center subtitle hover:underline"
                key={course.title}
                href={course.href}
              >
                <ChevronRightIcon className="flex-shrink-0 h-10 w-10 text-tertiary" />
                {course.title}
              </SmartLink>
            ))}
          </div>
        </section>
        {/* About */}
        <ItemRow items={aboutItems} cardClassName="items-center text-center" />
        <section className="border-secondary border-b-2 space-y-8 md:space-y-16">
          <SectionTitle
            title="Full-time & Short Courses"
            label="All courses"
            href="/courses"
          />
          <p className="pt-6 pb-6 lg:pt-16 lg:pb-16 max-w-3xl text-xl md:text-3xl text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            veniam provident, error dolores fuga minima vitae a officia
            doloremque quae explicabo repellendus iste, commodi ab ut fugit
            quod! Accusamus, cum?
          </p>
          <span className="block w-full h-[2px] bg-secondary" />
          <div className="space-y-12">
            {['', '', '', ''].map((item, i) => (
              <CourseCard
                key={`CourseCard:${i}`}
                title={`The Hero's Journey`}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, corporis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, corporis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              veniam provident, error dolores fuga minima vitae a officia
              doloremque quae explicabo repellendus iste, commodi ab ut fugit
              quod! Accusamus, cum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, corporis."
                href="/beep"
                image={{
                  src: `https://picsum.photos/id/${i + 100}/400/400`
                }}
                category={{
                  title: 'Video Game Design',
                  href: '/courses/video-game-design'
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  )
}

export default Home
