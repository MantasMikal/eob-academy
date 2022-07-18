import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import SanityImage from '@/components/Common/SanityImage'
import StandardMeta from '@/components/Meta/Standard'
import BlockContent from '@/components/Primitive/BlockContent'
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

  return (
    <MainLayout>
      <StandardMeta
        canonical={`/${slug}`}
        title={postData?.title}
        description={postData?.subtitle}
      />
      <PageHeader
        className="pb-[8vh] lg:pb-[16vh]"
        title={postData?.title}
        date={postData?.publishedAt}
        subtitle={postData?.subtitle}
      />
      <div className="-mt-[4vh] lg:-mt-[8vh] container-lg overflow-hidden">
        <SanityImage
          className="aspect-landscape object-cover rounded"
          src={postData?.mainImage}
          alt={postData?.title}
        />
      </div>
      <article className="prose prose-blockquote:text-lg prose-blockquote:font-normal container-prose mx-auto pt-8 lg:pt-12">
        <BlockContent blocks={postData?.body} />
      </article>
    </MainLayout>
  )
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
    revalidate: 60 * 1 // 30 minutes
  }
}

export const getStaticPaths = async () => {
  const posts = await getClient(false).fetch(`*[_type == "post"].slug.current`)
  return {
    paths: posts
      .filter(Boolean)
      .map((slug: any) => ({ params: { slug: slug } })),
    fallback: true
  }
}
