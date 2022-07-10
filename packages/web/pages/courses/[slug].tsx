import { getCourseDataQuery } from '@/services/sanity/queries'
import {
  getClient,
  getCourseData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const CoursePage: NextPage = ({ data }: any) => {
  const slug = data.slug
  const router = useRouter()
  const { data: courseData } = usePreviewSubscription(getCourseDataQuery, {
    initialData: data,
    params: { slug },
    enabled: router?.query?.preview !== null
  })

  return <div>{JSON.stringify(courseData)}</div>
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
