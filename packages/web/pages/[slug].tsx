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
import { useRouter } from 'next/router'

const GenericPage: NextPage = ({ data, slug }: any) => {
  const router = useRouter()
  const { data: pageData } = usePreviewSubscription(getRegularPageDataQuery, {
    initialData: data,
    params: { slug },
    enabled: router?.query?.preview !== null
  })

  return (
    <MainLayout>
      <StandardMeta
        canonical="/privacy-terms-and-conditions"
        title="Privacy/Terms and conditions"
        description="Privacy/Terms and conditions"
      />
      <PageHeader
        contentClassName="container-md"
        title={pageData?.title}
        subtitle={pageData?.subtitle}
      />
      <article className="prose container-md mx-auto pt-8 lg:pt-12">
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

export const getStaticProps = async ({ params }: StaticProps) => {
  const { slug } = params
  const pageData = await getRegularPageData(slug, false)
  return {
    props: {
      data: pageData || {},
      slug: slug
    },
    revalidate: 60 * 30 // 30 minutes
  }
}

export const getStaticPaths = async () => {
  const posts = await getClient(false).fetch(`*[_type == "page"].slug.current`)
  return {
    paths: posts
      .filter(Boolean)
      .map((slug: any) => ({ params: { slug: slug } })),
    fallback: true
  }
}
