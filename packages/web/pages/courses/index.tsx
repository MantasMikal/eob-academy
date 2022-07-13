import CourseGrid from '@/components/Common/CourseGrid'
import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import Section from '@/components/Common/Section'
import StandardMeta from '@/components/Meta/Standard'
import { getAllCourses } from '@/services/sanity/sanity'
import { NextPage } from 'next'

const CoursesPage: NextPage = ({ data: courses }: any) => {
  return (
    <MainLayout className="space-y-8 lg:space-y-16">
      <StandardMeta
        canonical="/courses"
        title="Courses"
        description="See the courses listing below and find the perfect course at
        the right level and follow your passion at EOB"
      />
      <PageHeader
        title="Courses"
        subtitle="See the courses listing below and find the perfect course at
        the right level and follow your passion at EOB"
      />
      <Section title="All courses" href="/apply" label="Apply">
        <CourseGrid courses={courses} full />
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
