import { getCourseDataQuery } from '@/services/sanity/queries'
import {
  getAllCourses,
  getClient,
  getCourseData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import { NextPage } from 'next'
import MainLayout from '@/components/Common/MainLayout'
import Section from '@/components/Common/Section'
import PageHeader from '@/components/Common/PageHeader'
import Image from '@/components/Common/SanityImage'
import CourseGrid from '@/components/Common/CourseGrid'
import StandardMeta from '@/components/Meta/Standard'
import CourseOverview from '@/components/Common/CourseOverview'
import Button from '@/components/Common/Button'
import { FaCalendar, FaClock, FaLocationArrow, FaUsers } from 'react-icons/fa'

const CoursePage: NextPage = ({ data, courses, preview }: any) => {
  const slug = data?.slug?.current
  const { data: courseData } = usePreviewSubscription(getCourseDataQuery, {
    initialData: data,
    params: { slug },
    enabled: preview
  })

  if (!courseData) {
    return null
  }

  const infoItems = [
    {
      title: 'Location',
      subtitle: courseData?.location,
      a11yText: 'location',
      icon: FaLocationArrow
    },
    {
      title: 'Launch Date',
      subtitle: courseData?.launchDate,
      a11yText: 'Launch',
      icon: FaCalendar
    },
    {
      title: 'Duration',
      subtitle: courseData?.duration,
      a11yText: 'Circle',
      icon: FaClock
    },
    {
      title: 'Ages',
      subtitle: courseData?.ages,
      a11yText: 'Full Person',
      icon: FaUsers
    }
  ]

  return (
    <MainLayout>
      <StandardMeta
        canonical={`/${slug}`}
        title={courseData?.title}
        description={courseData?.subtitle}
      />
      <div className="font-semibold">
        <PageHeader title={courseData.title} subtitle={courseData.subtitle} />

        <Image
          className="aspect-slim object-center object-cover"
          src={courseData.heroImage}
          alt={courseData.title}
        />

        <section className="container-lg lg:-mb-11 -top-6 lg:-top-20">
          <div className="rounded-lg text-white bg-secondary">
            <div className="p-6 md:p-10 lg:p-16 space-y-6 lg:space-y-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start justify-center">
                {infoItems.map((item, i) => (
                  <div key={`InfoItem:${i}`} className="">
                    <div className="flex items-center mb-2 space-x-1 text-left text-md xs:text-xl lg:text-2xl lg:space-x-2">
                      <item.icon />
                      <div>{item.title}</div>
                    </div>
                    <div className="text-sm xs:text-md lg:text-lg">
                      {item.subtitle}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col-reverse md:flex-row gap-8 items-start">
                <Button href="/apply" size="large" variant="outline">
                  Apply
                </Button>
                {courseData.subtitle && (
                  <p className="text-md">{courseData.subtitle}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Course overview */}
        <div className="space-y-8 pt-4">
          <Section title="Course overview">
            <CourseOverview className="px-2" items={courseData.overview} />
          </Section>
          <Section title="Other courses" href="/courses" label="All courses">
            <CourseGrid courses={courses} />
          </Section>
        </div>
      </div>
    </MainLayout>
  )
}

export default CoursePage

interface StaticProps {
  params: {
    slug: string
  }
  preview: boolean
}

export const getStaticProps = async ({
  params,
  preview = false
}: StaticProps) => {
  const { slug } = params
  const courseData = await getCourseData(slug, preview)
  const allCourses = await getAllCourses(preview)

  return {
    props: {
      preview,
      data: courseData || {},
      courses:
        allCourses
          // Shuffle
          ?.map((value: any) => ({ value, sort: Math.random() }))
          ?.sort((a: any, b: any) => a.sort - b.sort)
          ?.map(({ value }: any) => value)
          // Remove current and clip to 3
          ?.filter((c: any) => courseData.slug.current !== c.slug.current)
          ?.slice(0, 3) || {}
    },
    revalidate: 60 * 1 // 30 minutes
  }
}

export const getStaticPaths = async () => {
  const courses = await getClient(false).fetch(
    `*[_type == "course"].slug.current`
  )
  return {
    paths: courses
      .filter(Boolean)
      .map((slug: any) => ({ params: { slug: slug } })),
    fallback: true
  }
}
