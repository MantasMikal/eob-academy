import { getCourseDataQuery } from '@/services/sanity/queries'
import {
  getAllCourses,
  getClient,
  getCourseData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import MainLayout from '@/components/Common/MainLayout'
import Icon from '@/components/Primitive/Icon'
import Section from '@/components/Common/Section'
import PageHeader from '@/components/Common/PageHeader'
import Image from '@/components/Common/SanityImage'
import CourseGrid from '@/components/Common/CourseGrid'
import StandardMeta from '@/components/Meta/Standard'
import Accordion from '@/components/Common/Accordion'

const CoursePage: NextPage = ({ data, courses }: any) => {
  const slug = data?.slug?.current
  const router = useRouter()
  const { data: courseData } = usePreviewSubscription(getCourseDataQuery, {
    initialData: data,
    params: { slug },
    enabled: router?.query?.preview !== null
  })

  if (!courseData) {
    return null
  }

  const infoItems = [
    {
      title: 'Location',
      subtitle: courseData?.location,
      a11yText: 'location',
      icon: 'location'
    },
    {
      title: 'Launch Date',
      subtitle: courseData?.launchDate,
      a11yText: 'Launch',
      icon: 'launch'
    },
    {
      title: 'Duration',
      subtitle: courseData?.duration,
      a11yText: 'Circle',
      icon: 'circle'
    },
    {
      title: 'Ages',
      subtitle: courseData?.ages,
      a11yText: 'Full Person',
      icon: 'fullPerson'
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
        <section>
          <Image src={courseData.mainImage} alt={courseData.title} />
        </section>
        <section>
          <div className="container-lg bg-primary p-10 text-white md:grid grid-cols-3 lg:grid-cols-4 -top-6 lg:-top-20 lg:p-16 place-items-center">
            {infoItems.map((item, i) => (
              <div
                key={`InfoItem:${i}`}
                className="mb-11 mx-auto"
                style={{ maxWidth: '200px' }}
              >
                <div className="flex mb-5">
                  <Icon
                    type={item.icon}
                    width={20}
                    height={20}
                    a11yText={item.a11yText}
                  />
                  <p className="text-tertiary text-2xl ml-2">{item.title}</p>
                </div>
                <p>{item.subtitle}</p>
              </div>
            ))}
            <button className="bg-tertiary text-primary text-3xl px-11 py-1 mb-11 md:w-40 md:h-12">
              Apply
            </button>
            {courseData.subtitle && (
              <p className="col-span-3">{courseData.subtitle}</p>
            )}
          </div>
        </section>
        {/* Course overview */}
        <Section title="Course overview">
          <Accordion items={courseData.overview} />
        </Section>
        <Section title="Other courses" href="/courses" label="All courses">
          <CourseGrid courses={courses} />
        </Section>
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
      data: courseData || {},
      courses: allCourses || {}
    },
    revalidate: 60 * 30 // 30 minutes
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
