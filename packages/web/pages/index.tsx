import CourseCard from '@/components/Common/CourseCard'
import Hero from '@/components/Common/Hero'
import ItemRow from '@/components/Common/ItemRow'
import MainLayout from '@/components/Common/MainLayout'
import SectionTitle from '@/components/Common/SectionTitle'
// import BlogCarousel from '@/components/Common/BlogCarousel'
import SmartLink from '@/components/Primitive/SmartLink'
import ChevronRightIcon from '@heroicons/react/solid/ChevronRightIcon'
import type { NextPage } from 'next'
import Partners from '@/components/Common/Partners'
import cn from 'classnames'
import {
  getAllSponsors,
  getFeaturedPosts,
  getHomeData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import StandardMeta from '@/components/Meta/Standard'
import BlockContent from '@/components/Primitive/BlockContent'
import SanityImage from '@/components/Common/SanityImage'
import { getHomePageDataQuery } from '@/services/sanity/queries'

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
    mainCourses,
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
        <section className="container-lg">
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
        </section>
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
        <section className="space-y-8 container-lg md:space-y-16">
          <SectionTitle
            title={industryRoles?.title}
            label="Industry Brakedown"
            href={industryRoles?.url}
          />

          <BlockContent
            className="max-w-3xl prose"
            blocks={industryRoles?.description}
          />

          <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-3">
            {industryRoles?.roles?.map((item: any, i: number) => (
              <SmartLink
                to={item.url}
                className={cn(
                  'flex items-start p-3 py-5 pl-6 space-x-4 border rounded group hover:cursor-pointer',
                  !item.description && 'items-center'
                )}
                key={`IndustryRole:${i}`}
              >
                <SanityImage
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                />
                <div className="flex flex-col space-y-0">
                  <h3 className="text-base font-semibold md:text-lg group-hover:text-secondary">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm md:text-base text-slate-800 group-hover:text-secondary">
                      {item.description}
                    </p>
                  )}
                </div>
              </SmartLink>
            ))}
          </div>
        </section>
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
