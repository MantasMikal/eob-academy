import { getPostPageDataQuery } from '@/services/sanity/queries'
import {
  getClient,
  getPostPageData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const PostsPage: NextPage = ({ data }: any) => {
  const slug = data?.slug?.current
  const router = useRouter()
  const { data: postData } = usePreviewSubscription(getPostPageDataQuery, {
    initialData: data,
    params: { slug },
    enabled: router?.query?.preview !== null
  })

  return <div>{JSON.stringify(postData)}</div>
}

export default PostsPage

interface StaticProps {
  params: {
    slug: string
  }
  preview: boolean
}

export const getStaticProps = async ({ params, preview }: StaticProps) => {
  const { slug } = params
  const postData = await getPostPageData(slug, preview)
  return {
    props: {
      data: postData || {}
    },
    revalidate: 60 * 30 // 30 minutes
  }
}

export const getStaticPaths = async () => {
  const posts = await getClient(false).fetch(`*[_type == "post"].slug.current`)
  console.log('🚀 ~ file: [slug].tsx ~ line 44 ~ getStaticPaths ~ posts', posts)
  return {
    paths: posts
      .filter(Boolean)
      .map((slug: any) => ({ params: { slug: slug } })),
    fallback: true
  }
}
