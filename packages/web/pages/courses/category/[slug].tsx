import CourseGrid from '@/components/Common/CourseGrid'
import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import Section from '@/components/Common/Section'
import StandardMeta from '@/components/Meta/Standard'
import {
  getAllCoursesByCategory,
  getClient,
  getCourseCategory
} from '@/services/sanity/sanity'
import { NextPage } from 'next'

const CoursesCategoryPage: NextPage = ({ data: courses, category }: any) => {
  const { slug, title, subtitle } = category || {}
  return (
    <MainLayout className="space-y-8 lg:space-y-16">
      <StandardMeta
        canonical={`/courses/category/${slug}`}
        title={`${title} - Courses`}
        description={subtitle}
      />
      <PageHeader title={`${title}`} subtitle={subtitle} />
      <Section title={title} href="/apply" label="Apply">
        <CourseGrid courses={courses} full />
      </Section>
    </MainLayout>
  )
}

export default CoursesCategoryPage

interface StaticProps {
  params: {
    slug: string
  }
  preview: boolean
}

export const getStaticProps = async ({ params, preview }: StaticProps) => {
  const { slug } = params
  const courseData = await getAllCoursesByCategory(slug, preview)
  const categoryData = await getCourseCategory(slug, preview)
  return {
    props: {
      data: courseData || [],
      category: categoryData || {}
    },
    revalidate: 60 * 1 // 30 minutes
  }
}

export const getStaticPaths = async () => {
  const coursesCategories = await getClient(false).fetch(
    `*[_type == "courseCategory"].slug.current`
  )
  console.log(
    '🚀 ~ file: [slug].tsx ~ line 56 ~ getStaticPaths ~ coursesCategories',
    coursesCategories
  )

  return {
    paths: coursesCategories
      .filter(Boolean)
      .map((slug: any) => ({ params: { slug: slug } })),
    fallback: true
  }
}
