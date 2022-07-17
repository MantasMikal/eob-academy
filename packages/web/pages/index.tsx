import CourseCard from '@/components/Common/CourseCard'
import Hero from '@/components/Common/Hero'
import ItemRow from '@/components/Common/ItemRow'
import MainLayout from '@/components/Common/MainLayout'
import SectionTitle from '@/components/Common/SectionTitle'
import BlogCarousel from '@/components/Common/BlogCarousel'
import SmartLink from '@/components/Primitive/SmartLink'
import ChevronRightIcon from '@heroicons/react/solid/ChevronRightIcon'
import type { NextPage } from 'next'
import Image from 'next/image'
import Partners from '@/components/Common/Partners'
import {
  getAllSponsors,
  getHomeData,
  getRecentPosts
} from '@/services/sanity/sanity'
import StandardMeta from '@/components/Meta/Standard'
import BlockContent from '@/components/Primitive/BlockContent'

const industryRolesData = [
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

interface IHomePageProps {
  data: any
}

const Home: NextPage<IHomePageProps> = ({ data: homeData }) => {
  const { home, sponsors, posts } = homeData
  const {
    missionStatement,
    mainCourses,
    featuredCourses,
    body,
    industryRoles,
    openGraph
  } = home?.home || {}

  const partnersAndSupporters = {
    partners: sponsors.filter((s: any) => s.isPartner),
    supporters: sponsors.filter((s: any) => !s.isPartner)
  }

  const aboutItems = [
    {
      title: 'Purpose',
      subtitle: missionStatement?.purpose,
      a11yText: 'Purpose',
      icon: 'purpose'
    },
    {
      title: 'Mission',
      subtitle: missionStatement?.mission,
      a11yText: 'Mission',
      icon: 'mission'
    },
    {
      title: 'Vision',
      subtitle: missionStatement?.vision,
      a11yText: 'Vision',
      icon: 'vision'
    }
  ]

  return (
    <MainLayout>
      <Hero />
      <StandardMeta
        canonical={`/`}
        title={openGraph?.title}
        description={openGraph?.description}
      />
      {/* Intro */}
      <div className="space-y-12 lg:space-y-24">
        <section className="container-lg py-8 px-4 lg:p-12 lg:py-16 mt-[-5rem] bg-secondary rounded-lg shadow">
          <div className="space-y-6 md:space-y-8 text-white">
            <h2 className="relative heading-xlarge left-1">Main courses</h2>
            {mainCourses.map((course: any) => (
              <SmartLink
                className="flex items-center subtitle hover:underline"
                key={course.title}
                href={`/courses/category/${course.slug.current}`}
              >
                <ChevronRightIcon className="flex-shrink-0 h-10 w-10 text-tertiary" />
                {course.title}
              </SmartLink>
            ))}
          </div>
        </section>
        {/* About */}
        {body && (
          <section className="container-lg">
            <BlockContent className="prose !max-w-xl" blocks={body} />
          </section>
        )}
        <ItemRow items={aboutItems} cardClassName="items-center text-center" />
        <section className="container-lg space-y-8 md:space-y-16">
          <SectionTitle
            title={featuredCourses?.title}
            label="All courses"
            href="/courses"
          />
          <p className="max-w-3xl text-xl md:text-3xl text-black">
            {featuredCourses?.description}
          </p>
          <div className="flex flex-col space-y-12">
            {featuredCourses?.courses?.map((item: any, i: number) => (
              <CourseCard key={`CourseCard:${i}`} {...item} />
            ))}
          </div>
        </section>
        <section className="container-lg space-y-8 md:space-y-16">
          <SectionTitle
            title={industryRoles?.title}
            label="Industry Brakedown"
            href={industryRoles?.url}
          />

          <BlockContent
            className="prose max-w-3xl"
            blocks={industryRoles?.description}
          />

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8">
            {industryRolesData.map((item, i) => (
              <div
                className="group flex space-x-4 items-center p-3 pl-6 rounded border hover:cursor-pointer"
                key={`IndustryRole:${i}`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                />
                <p className='py-5 group-hover:text-secondary'>{item.title}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-slate-50 pb-16">
          <div className="container-lg">
            <BlogCarousel items={posts} />
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
  const posts = await getRecentPosts(preview)
  return {
    props: {
      data: {
        home: homePageData,
        sponsors,
        posts
      }
    },
    revalidate: 60 * 30 // 30 minutes
  }
}
