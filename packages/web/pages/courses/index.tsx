import SmartLink from '@/components/Primitive/SmartLink'
import { getAllCourses } from '@/services/sanity/sanity'
import { NextPage } from 'next'

const CoursesPage: NextPage = ({ data: courses }: any) => {
  return (
    <div>
      {courses?.map((course: any) => (
        <SmartLink key={course._id} to={`/courses/${course.slug.current}`}>
          {course.title}
        </SmartLink>
      ))}
    </div>
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
