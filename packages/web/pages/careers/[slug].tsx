import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import SanityImage from '@/components/Common/SanityImage'
import StandardMeta from '@/components/Meta/Standard'
import BlockContent from '@/components/Primitive/BlockContent'
import { getJobPageDataQuery } from '@/services/sanity/queries'
import {
  getClient,
  getJobPageData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import { NextPage } from 'next'

const PostsPage: NextPage = ({ data, preview }: any) => {
  const slug = data?.slug?.current
  const { data: jobData } = usePreviewSubscription(getJobPageDataQuery, {
    initialData: data,
    params: { slug },
    enabled: preview
  })

  return (
    <MainLayout>
      <StandardMeta
        canonical={`/${slug}`}
        title={jobData?.title}
        description={jobData?.excerpt}
      />
      <PageHeader
        className="pb-[8vh] lg:pb-[16vh]"
        title={jobData?.title}
        date={jobData?.publishedAt}
        subtitle={jobData?.excerpt}
      />
      <div className="-mt-[4vh] lg:-mt-[8vh] container-lg overflow-hidden">
        <SanityImage
          className="object-cover rounded aspect-landscape"
          src={jobData?.mainImage}
          alt={jobData?.title}
        />
      </div>
      <article className="pt-8 mx-auto prose prose-blockquote:text-lg prose-blockquote:font-normal container-prose lg:pt-12">
        <BlockContent blocks={jobData?.body} />
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

export const getStaticProps = async ({
  params,
  preview = false
}: StaticProps) => {
  const { slug } = params
  const jobData = await getJobPageData(slug, preview)
  return {
    props: {
      data: jobData || {},
      preview
    },
    revalidate: 60 * 1 // 30 minutes
  }
}

export const getStaticPaths = async ({}) => {
  const jobs = await getClient(false).fetch(`*[_type == "job"].slug.current`)
  return {
    paths: jobs
      .filter(Boolean)
      .map((slug: any) => ({ params: { slug: slug } })),
    fallback: true
  }
}
