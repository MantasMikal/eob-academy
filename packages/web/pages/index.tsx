import CourseCard, { CourseCardProps } from '@/components/Common/CourseCard'
import Hero from '@/components/Common/Hero'
import MainLayout from '@/components/Common/MainLayout'
import SectionTitle from '@/components/Common/SectionTitle'
import BlogCarousel from '@/components/Common/BlogCarousel'
import Icon from '@/components/Primitive/Icon'
import SmartLink from '@/components/Primitive/SmartLink'
import ChevronRightIcon from '@heroicons/react/solid/ChevronRightIcon'
import type { NextPage } from 'next'
import Image from 'next/image'
import { IBlogCardProps } from '@/components/Common/BlogCard'
import Partners from '@/components/Common/Partners'
import { getAllSponsors, getHomeData } from '@/services/sanity/sanity'

const courseCategories = [
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

const latestBlogPosts: IBlogCardProps[] = Array(5).fill({
  title: 'Beating the Crunch Out of Crunch With EOB Academy',
  publishedAt: '2020-01-01',
  image: 'https://picsum.photos/id/1/400/400',
  href: '/blog/beating-the-crunch-out-of-crunch-with-eob-academy'
})

const industryRoles = [
  {
    title: 'Game animator',
    icon: '/content/industry-roles/animator.svg'
  },
  {
    title: 'Game audio engineer',
    icon: '/content/industry-roles/audio-engineer.svg'
  },
  {
    title: 'Game designer',
    icon: '/content/industry-roles/game-designer.svg'
  },
  {
    title: 'Creative game director',
    icon: '/content/industry-roles/creative-director.svg'
  },
  {
    title: 'Game artist',
    icon: '/content/industry-roles/artist.svg'
  },
  {
    title: 'Game PR & marketing',
    icon: '/content/industry-roles/pr-marketing.svg'
  },
  {
    title: 'QA Game tester',
    icon: '/content/industry-roles/qa.svg'
  },
  {
    title: 'Video game system designer',
    icon: '/content/industry-roles/systems-designer.svg'
  },
  {
    title: 'Analyst',
    icon: '/content/industry-roles/analyst.svg'
  },
  {
    title: 'Sales / partnership manager',
    icon: '/content/industry-roles/sales.svg'
  },
  {
    title: 'Business management',
    icon: '/content/industry-roles/business-management.svg'
  },
  {
    title: 'PR / marketing executive',
    icon: '/content/industry-roles/pr.svg'
  },
  {
    title: 'Professional player',
    icon: '/content/industry-roles/player.svg'
  },
  {
    title: 'Coach',
    icon: '/content/industry-roles/coach.svg'
  },
  {
    title: 'Production crew',
    icon: '/content/industry-roles/production-crew.svg'
  },
  {
    title: '3D modeller',
    icon: '/content/industry-roles/3d-modeller.svg'
  },
  {
    title: 'Coder',
    icon: '/content/industry-roles/coders.svg'
  },
  {
    title: 'Broadcasting',
    icon: '/content/industry-roles/broadcasting.svg'
  }
]

const featuredCourses: CourseCardProps[] = [
  {
    title: "The Hero's Journey",
    href: '/courses/the-heros-journey',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
      veniam provident, error dolores fuga minima vitae a officia
      doloremque quae explicabo repellendus iste, commodi ab ut fugit
      quod! Accusamus, cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
      veniam provident, error dolores fuga minima vitae a officia
      doloremque quae explicabo repellendus iste, commodi ab ut fugit
      quod! Accusamus, cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
      veniam provident, error dolores fuga minima vitae a officia
      doloremque quae explicabo repellendus iste, commodi ab ut fugit
      quod! Accusamus, cum?`,
    image: {
      src: `https://picsum.photos/id/${100}/400/400`
    },
    category: {
      title: 'FE Video Game Design College Courses',
      href: '#'
    },
    startDate: new Date().toString(),
    ageGroup: '14-20'
  },
  {
    title: "The Hero's Journey",
    href: '/courses/the-heros-journey',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
      veniam provident, error dolores fuga minima vitae a officia
      doloremque quae explicabo repellendus iste, commodi ab ut fugit
      quod! Accusamus, cum?`,
    image: {
      src: `https://picsum.photos/id/${100}/400/400`
    },
    category: {
      title: 'FE Video Game Design College Courses',
      href: '#'
    },
    startDate: new Date().toString(),
    ageGroup: '14-20'
  },
  {
    title: "The Hero's Journey",
    href: '/courses/the-heros-journey',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
    veniam provident, error dolores fuga minima vitae a officia
    doloremque quae explicabo repellendus iste, commodi ab ut fugit
    quod! Accusamus, cum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
    veniam provident, error dolores fuga minima vitae a officia
    doloremque quae explicabo repellendus iste, commodi ab ut fugit
    quod! Accusamus, cum?`,
    image: {
      src: `https://picsum.photos/id/${100}/400/400`
    },
    category: {
      title: 'FE Video Game Design College Courses',
      href: '#'
    },
    startDate: new Date().toString(),
    ageGroup: '14-20'
  },
  {
    title: "The Hero's Journey",
    href: '/courses/the-heros-journey',
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, corrupti. Corporis architecto rerum possimus earum reiciendis incidunt ut corrupti quisquam unde maiores doloremque quae sapiente, suscipit sit consectetur optio quod delectus molestias, magnam officiis dolores vel iste inventore odio. In doloribus tempore numquam totam. Et nostrum adipisci ratione totam tempora.`,
    image: {
      src: `https://picsum.photos/id/${100}/400/400`
    },
    category: {
      title: 'FE Video Game Design College Courses',
      href: '#'
    },
    startDate: new Date().toString(),
    ageGroup: '14-20'
  }
]

interface IHomePageProps {
  data: any
}

const Home: NextPage<IHomePageProps> = ({ data: homeData }) => {
  const { home, sponsors } = homeData

  const partnersAndSupporters = {
    partners: sponsors.filter((s: any) => s.isPartner),
    supporters: sponsors.filter((s: any) => !s.isPartner)
  }

  console.log('🚀 ~ file: index.tsx ~ line 210 ~ homeData', homeData)
  return (
    <MainLayout>
      <Hero />
      {/* Intro */}
      <div className="space-y-12 lg:space-y-24">
        <section className="container-lg py-8 px-4 lg:p-12 lg:py-16 mt-[-5rem] bg-secondary rounded-lg shadow">
          <div className="space-y-6 md:space-y-8 text-white">
            <h2 className="relative heading-xlarge left-1">Main courses</h2>
            {courseCategories.map((course) => (
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
        {/* Courses */}
        <section className="container-lg space-y-8 md:space-y-16">
          <SectionTitle
            title="Full-time & Short Courses"
            label="All courses"
            href="/courses"
          />
          <p className=" max-w-3xl text-xl md:text-3xl text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            veniam provident, error dolores fuga minima vitae a officia
            doloremque quae explicabo repellendus iste, commodi ab ut fugit
            quod! Accusamus, cum?
          </p>
          <div className="flex flex-col space-y-12">
            {featuredCourses.map((item, i) => (
              <CourseCard key={`CourseCard:${i}`} {...item} />
            ))}
          </div>
        </section>
        <section className="container-lg space-y-8 md:space-y-16">
          <SectionTitle
            title="Gaming industry roles"
            label="Industry Brakedown"
            href="/"
          />
          <p className=" max-w-3xl text-xl md:text-3xl text-black">
            There are many gaming career options to choose from, both on the
            technical and creative sides of the field.
          </p>
          <p>
            If you have the commitment, skills and drive to immerse yourself in
            the world of video games, the possibilities are endless.
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8">
            {industryRoles.map((item, i) => (
              <div
                className="flex space-x-4 items-center p-3 rounded border"
                key={`IndustryRole:${i}`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-slate-50 pb-16">
          <div className="container-lg">
            <BlogCarousel items={latestBlogPosts} />
          </div>
        </section>
        <section className="container-lg">
          <Partners
            partners={partnersAndSupporters.partners}
            supporters={partnersAndSupporters.supporters}
          />
        </section>
      </div>
    </MainLayout>
  )
}

export default Home

export const getStaticProps = async ({ preview = false }) => {
  const homePageData = await getHomeData(preview)
  const sponsors = await getAllSponsors(preview)
  return {
    props: {
      data: {
        home: homePageData,
        sponsors
      }
    },
    revalidate: 60 * 30 // 30 minutes
  }
}
