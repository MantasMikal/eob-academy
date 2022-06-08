import CourseCard from '@/components/Common/CourseCard'
import Hero from '@/components/Common/Hero'
import MainLayout from '@/components/Common/MainLayout'
import SectionTitle from '@/components/Common/SectionTitle'
import Icon from '@/components/Primitive/Icon'
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

const aboutItems = [{}, {}, {}, {}]

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      {/* Intro */}
      <div className="space-y-12 lg:space-y-24 container-lg">
        <section className="py-12 px-8 lg:p-12 lg:py-16 mt-[-5rem] bg-secondary rounded-lg shadow">
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
        <section className="container-lg grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 gap-y-12">
          {aboutItems.map((item, i) => (
            <div
              className="flex flex-col p-6 lg:px-3 lg:py-6 bg-white rounded-lg shadow items-center text-center space-y-4 flex-auto"
              key={`About:${i}`}
            >
              <Icon
                type="purpose"
                width={100}
                height={100}
                a11yText="Purpose"
                className="mx-auto"
              />
              <h3 className="font-bold text-primary">Purpose</h3>
              <p>
                Offering the neurodiverse opportunities to enable maximum
                capabilities and confidence through learning video game design -
                Education without boundaries.
              </p>
            </div>
          ))}
        </section>
        <section className="border-b-2 border-secondary">
          <SectionTitle
            title="Full-time & Short Courses"
            label="All courses"
            href="/courses"
          />
          <p className="pt-12 pb-16 lg:pt-24 lg:pb-32 max-w-3xl text-xl md:text-3xl text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            veniam provident, error dolores fuga minima vitae a officia
            doloremque quae explicabo repellendus iste, commodi ab ut fugit
            quod! Accusamus, cum?
          </p>
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
