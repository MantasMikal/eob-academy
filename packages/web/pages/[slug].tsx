import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import StandardMeta from '@/components/Meta/Standard'
import BlockContent from '@/components/Primitive/BlockContent'
import { getRegularPageDataQuery } from '@/services/sanity/queries'
import {
  getClient,
  getRegularPageData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import { NextPage } from 'next'

const GenericPage: NextPage = ({ data, slug, preview }: any) => {
  const { data: pageData } = usePreviewSubscription(getRegularPageDataQuery, {
    initialData: data,
    params: { slug },
    enabled: preview
  })

  return (
    <MainLayout>
      <StandardMeta
        canonical={`/${slug}`}
        title={pageData?.title}
        description={pageData?.subtitle}
      />
      <PageHeader
        contentClassName="container-md"
        title={pageData?.title}
        subtitle={pageData?.subtitle}
      />
      <article className="pt-8 mx-auto prose container-md lg:pt-12">
        <BlockContent blocks={pageData?.body} />
      </article>
    </MainLayout>
  )
}

export default GenericPage

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
  const pageData = await getRegularPageData(slug, false)
  return {
    props: {
      data: pageData || {},
      slug: slug,
      preview
    },
    revalidate: 60 * 1 // 30 minutes
  }
}

export const getStaticPaths = async () => {
  const posts = await getClient(false).fetch(`*[_type == "page"].slug.current`)
  return {
    paths: posts
      .filter(Boolean)
      .map((slug: any) => ({ params: { slug: slug } })),
    fallback: false
  }
}
