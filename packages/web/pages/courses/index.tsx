import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import SanityImage from '@/components/Common/SanityImage'
import Section from '@/components/Common/Section'
import Icon from '@/components/Primitive/Icon'
import SmartLink from '@/components/Primitive/SmartLink'
import { getAllCourses } from '@/services/sanity/sanity'
import { NextPage } from 'next'

const CoursesPage: NextPage = ({ data: courses }: any) => {
  console.log(courses)
  return (
    <MainLayout>
      <PageHeader
        title="Courses"
        subtitle="See the courses listing below and find the perfect course at
        the right level and follow your passion at EOB"
      />
      <Section
        title="All courses"
        href="/apply"
        label="Apply"
      >
      <div className="grid gap-x-4 gap-y-4 grid-cols-1 md:gap-x-8 md:gap-y-8 md:grid-cols-2 lg:grid-cols-3 container-lg">
        {courses?.map((course: any, i: number) => (
          <SmartLink key={course._id} to={`/courses/${course.slug.current}`}>
            <div className="max-w-sm" key={`Course:${i}`}>
                <SanityImage
                  src={course.mainImage}
                  alt=""
                />
                <div className="flex my-5">
                  <Icon
                    type="fullPersonBlack"
                    width={20}
                    height={40}
                    a11yText="Person"
                    className="pr-10"
                  />
                  <p>Age: {course.ages}</p>
                </div>
                <div>
                  <h5 className="text-primary text-3xl mb-5">{course.title}</h5>
                  <p>
                    {course.subtitle}
                  </p>
                </div>
              </div>
          </SmartLink>
        ))}
      </div>
      </Section>
    </MainLayout>
  )
}

export default CoursesPage

interface StaticProps {
  preview: boolean
}

export const getStaticProps = async ({ preview }: StaticProps) => {
  const courseData = await getAllCourses(preview)
  return {
    props: {
      data: courseData || []
    },
    revalidate: 60 * 30 // 30 minutes
  }
}
