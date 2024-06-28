import type { NextPage } from 'next'

import CourseCard from '@/components/Common/CourseCard'
import Hero from '@/components/Common/Hero'
import ItemRow from '@/components/Common/ItemRow'
import MainLayout from '@/components/Common/MainLayout'
import Partners from '@/components/Common/Partners'
import SectionTitle from '@/components/Common/SectionTitle'
import StandardMeta from '@/components/Meta/Standard'
import BlockContent from '@/components/Primitive/BlockContent'
import { getHomePageDataQuery } from '@/services/sanity/queries'
import {
  getAllSponsors,
  getFeaturedPosts,
  getHomeData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import Button from '@/components/Common/Button'

interface IHomePageProps {
  data: any
}

const Home: NextPage<IHomePageProps> = ({ data: homeData, preview }: any) => {
  const { home: homePageData, sponsors, posts } = homeData
  const { data: home } = usePreviewSubscription(getHomePageDataQuery, {
    initialData: homePageData,
    enabled: preview
  })

  const {
    missionStatement,
    featuredCourses,
    body,
    industryRoles,
    openGraph,
    title,
    subtitle
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
      height: 70,
      className: 'my-2',
      a11yText: 'Vision',
      icon: 'vision'
    }
  ]

  return (
    <MainLayout>
      <Hero title={title} subtitle={subtitle} />
      <StandardMeta
        canonical={`/`}
        title={openGraph?.title}
        description={openGraph?.description}
      />
      {/* Intro */}
      <div className="space-y-12 lg:space-y-24">
        <section className="bg-secondary text-white py-8 md:py-24">
          <div className="container-lg flex flex-col gap-4 md:flex-row md:justify-between md:gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold md:basis-[40%]">
              This is where Enemy of Boredom steps in…
            </h2>
            <div className="flex flex-col gap-4 text-lg md:text-xl lg:text-2xl md:basis-[60%]">
              Our mission is to change the perception of school as a place of
              confusion and fear for SEN students into one of acceptance,
              engagement, learning, happiness and potential. By creating an
              inclusive learning environment, specifically designed for SEN
              students, we rebuild their confidence, working with SENCOs to
              create a pathway back into mainstream education, or preparing the
              student to graduate and move into work.

              <Button className='mr-auto' href='/about' variant='outline' color=''>
                Find out more
              </Button>
            </div>
          </div>
        </section>

        {/* <section className="container-lg">
          <div className="py-8 px-4 lg:p-12 lg:py-16 mt-[-5rem] bg-secondary rounded-lg shadow">
            <div className="space-y-6 text-white md:space-y-8">
              <h2 className="relative heading-xlarge left-1">Main courses</h2>
              {mainCourses.map((course: any) => (
                <SmartLink
                  className="flex items-center subtitle hover:underline"
                  key={course.title}
                  href={`/courses/category/${course.slug.current}`}
                >
                  <ChevronRightIcon className="flex-shrink-0 w-10 h-10 text-tertiary" />
                  {course.title}
                </SmartLink>
              ))}
            </div>
          </div>
        </section> */}
        {/* About */}
        {body && (
          <section className="container-lg">
            <BlockContent className="prose !max-w-xl" blocks={body} />
          </section>
        )}
        <ItemRow items={aboutItems} cardClassName="items-center text-center" />
        <section className="space-y-8 container-lg md:space-y-16">
          <SectionTitle
            title={featuredCourses?.title}
            label="All courses"
            href="/courses"
          />
          <p className="max-w-3xl text-xl md:text-3xl text-slate-800">
            {featuredCourses?.description}
          </p>
          <div className="flex flex-col space-y-12">
            {featuredCourses?.courses?.map((item: any, i: number) => (
              <CourseCard key={`CourseCard:${i}`} {...item} />
            ))}
          </div>
        </section>
        {/* <section className="space-y-8 container-lg md:space-y-16">
          <SectionTitle
            title={industryRoles?.title}
            label="Industry Brakedown"
            href={industryRoles?.url}
          />

          <BlockContent
            className="max-w-3xl prose"
            blocks={industryRoles?.description}
          />
        </section> */}
        {/* <section className="pb-16 bg-slate-50">
          <div className="container-lg">
            <BlogCarousel items={posts} />
          </div>
        </section> */}
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
  console.log(
    '🚀 ~ file: index.tsx:182 ~ getStaticProps ~ homePageData:',
    homePageData
  )
  const sponsors = await getAllSponsors(preview)
  const posts = await getFeaturedPosts(preview)
  return {
    props: {
      data: {
        home: homePageData,
        sponsors,
        posts,
        preview
      }
    },
    revalidate: 60 * 1 // 30 minutes
  }
}
