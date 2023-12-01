import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import StandardMeta from '@/components/Meta/Standard'
import BlockContent from '@/components/Primitive/BlockContent'
import { getProtectedPageDataQuery } from '@/services/sanity/queries'
import {
  getProtectedPageData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import { NextPage } from 'next'

const ProtectedPage: NextPage = ({ data, slug, preview }: any) => {
  const { data: pageData } = usePreviewSubscription(getProtectedPageDataQuery, {
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

export default ProtectedPage

interface StaticProps {
  params: {
    slug: string
  }
  preview: boolean
}

export const getServerSideProps = async ({
  params,
  preview = false
}: StaticProps) => {
  const { slug } = params
  const pageData = await getProtectedPageData(slug, false)
  return {
    props: {
      data: pageData || {},
      slug: slug,
      preview
    }
  }
}
