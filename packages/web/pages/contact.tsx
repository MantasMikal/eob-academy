import Button from '@/components/Common/Button'
import Map from '@/components/Common/GoogleMap'
import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import SectionTitle from '@/components/Common/SectionTitle'
import StandardMeta from '@/components/Meta/Standard'
import BlockContent from '@/components/Primitive/BlockContent'
import { getContactPageDataQuery } from '@/services/sanity/queries'
import {
  getContactPageData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const ContactPage: NextPage = ({ data }: any) => {
  const router = useRouter()
  const { data: pageData } = usePreviewSubscription(getContactPageDataQuery, {
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
      <div className="container-md mx-auto space-y-6 lg:space-y-12">
        <SectionTitle title="Addresses" />
        <div className="divide-y-2">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="basis-1/2 space-y-4">
              <p className="text-lg">
                <b>Address</b>
                <br />
                EOB Academy, The Court House, Broadway, Town Square, Bracknell,
                RG12 1AE
              </p>
              <div className="aspect-video">
                <Map
                  style={{ height: '100%' }}
                  locations={[{ lat: 51.416039, lng: -0.75398 }]}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-3">
              <div className="text-lg">
                <p>
                  <b>Number</b>
                </p>
                <p>07961994000</p>
              </div>
              <Button variant="primary" href="mailto:info@eobacademy.com">
                Email
              </Button>
            </div>
          </div>
          <div className="pt-6 mt-6 lg:mt-12 lg:pt-12 flex flex-col md:flex-row justify-between gap-4">
            <div className="basis-1/2 space-y-4">
              <p className="text-lg">
                <b>Address</b>
                <br />
                EOB Academy, Letchworth Town Hall, Broadway, Letchworth Garden
                City SG6 3BF
              </p>
              <div className="aspect-video">
                <Map
                  style={{ height: '100%' }}
                  locations={[{ lat: 51.416039, lng: -0.23164 }]}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between space-y-3">
              <div className="text-lg">
                <p>
                  <b>Number</b>
                </p>
                <p>07961994000</p>
              </div>
              <Button variant="primary" href="mailto:info@eobacademy.com">
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ContactPage

export const getStaticProps = async () => {
  const pageData = await getContactPageData(false)
  return {
    props: {
      data: pageData || {}
    },
    revalidate: 60 * 30 // 30 minutes
  }
}
