import { getCourseDataQuery } from '@/services/sanity/queries'
import {
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
import classNames from 'classnames'
import SanityImage from '@/components/Common/SanityImage'

const CoursePage: NextPage = ({ data }: any) => {
  const slug = data?.slug?.current
  const router = useRouter()
  const { data: courseData } = usePreviewSubscription(getCourseDataQuery, {
    initialData: data,
    params: { slug },
    enabled: router?.query?.preview !== null
  })

  const infoItems = [
    {
      title: 'Location',
      subtitle: 'Your home or school',
      a11yText: 'location',
      icon: 'location'
    },
    {
      title: 'Launch Date',
      subtitle: 'Book a bespoke course for your cohort',
      a11yText: 'Launch',
      icon: 'launch'
    },
    {
      title: 'Duration',
      subtitle: 'Mon - Fri 10am - 2pm',
      a11yText: 'Circle',
      icon: 'circle'
    },
    {
      title: 'Ages',
      subtitle: '8-25',
      a11yText: 'Full Person',
      icon: 'fullPerson'
    }
  ]

  const benefits = [{}, {}, {}, {}, {}]

  return (
    <MainLayout>
      <div className="font-semibold">
        <PageHeader title={courseData.title} subtitle={courseData.excerpt} />
        <section>
          <SanityImage src={courseData.mainImage} alt={courseData.title} />
        </section>
        <section>
          <div className="container-lg bg-primary p-10 text-white md:grid grid-cols-2 lg:grid-cols-4 -top-6 lg:-top-20 lg:p-16 place-items-center">
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
            <p className="col-span-3">
              A 5-day course from the comfort of your own home or venue. <br />
              <br />
              We will teach you the basics of designing your own platform video
              game or building a 3D model, using free off-the-shelf design
              engines - so no need to worry about expensive software costs.
            </p>
          </div>
        </section>

        {/* Course overview */}
        <Section title="Course overview">
          <div className="max-w-full">
            {benefits.map((b, i) => (
              <div
                key={`Benefit:${i}`}
                className={classNames(
                  'p-5 sm:p-10 lg:p-20',
                  i === 3 && 'bg-backgroundSecondary'
                )}
              >
                <h4 className="subtitle place-items-center text-primary font-normal mb-5 flex">
                  <p className="font-bold pr-2 lg:pr-0 text-3xl">+</p>
                  About
                </h4>
                <p className="max-w-2xl">
                  Game Design with Gamefroot - Book a course for your venue - up
                  to 8 students per cohort. <br />
                  <br />
                  Log on to Discord at 10am and meet your peers and one of the
                  EOB tutors. The EOB tutor will work with you to create your
                  own video.
                </p>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Other courses" href="/courses" label="All courses">
          <div className="max-w-full grid place-items-center md:grid-cols-2 md:gap-10 lg:grid-cols-3 font-normal">
            {benefits.map((b, i) => (
              <div className="max-w-sm" key={`Course:${i}`}>
                <SanityImage
                  width={400}
                  height={200}
                  src={courseData.mainImage}
                  alt="chair"
                />
                <div className="flex my-5">
                  <Icon
                    type="fullPersonBlack"
                    width={20}
                    height={40}
                    a11yText="Person"
                    className="pr-10"
                  />
                  <p>Age: 16-18/24 (EHCP)</p>
                </div>
                <div>
                  <h5 className="text-primary text-3xl mb-5">Side Quest</h5>
                  <p>
                    Learn how creators behind your favourite games do it,
                    develop skills to create your own video game.
                    <br />
                    <br />
                    EOB Academy will also work with you to create video gaming
                    teams and you will have the option to travel and take part
                    in competitions, develop your own video gaming brand and
                    meet pro-players.
                  </p>
                </div>
              </div>
            ))}
          </div>
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

export const getStaticProps = async ({ params, preview }: StaticProps) => {
  const { slug } = params
  const courseData = await getCourseData(slug, preview)
  return {
    props: {
      data: courseData || {}
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
