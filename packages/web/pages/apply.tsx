import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import StandardMeta from '@/components/Meta/Standard'
import BlockContent from '@/components/Primitive/BlockContent'
import Spinner from '@/components/Primitive/Spinner'
import { getApplyPageDataQuery } from '@/services/sanity/queries'
import {
  getApplyPageData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import HubspotForm from 'react-hubspot-form'

const ApplyPage: NextPage = ({ data }: any) => {
  const router = useRouter()
  const { data: pageData } = usePreviewSubscription(getApplyPageDataQuery, {
    initialData: data,
    enabled: router?.query?.preview !== null
  })

  return (
    <MainLayout className="space-y-8 lg:space-y-16">
      <StandardMeta
        canonical={`/apply`}
        title={pageData?.title}
        description={pageData?.subtitle}
      />
      <PageHeader
        contentClassName="container-md"
        title={pageData?.title}
        subtitle={pageData?.subtitle}
      />
      {pageData?.body?.length > 0 && (
        <article className="prose container-md mx-auto">
          <BlockContent blocks={pageData?.body} />
        </article>
      )}
      <div className="container-md mx-auto">
        <HubspotForm
          portalId="24888008"
          formId="76b72dd9-bd61-4614-82fb-e42421c72f03"
          region="eu1"
          loading={<Spinner />}
        />
      </div>
    </MainLayout>
  )
}

export default ApplyPage

export const getStaticProps = async () => {
  const pageData = await getApplyPageData(false)
  return {
    props: {
      data: pageData || {}
    },
    revalidate: 60 * 30 // 30 minutes
  }
}
