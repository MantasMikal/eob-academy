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

const ContactPage: NextPage = ({ data, preview }: any) => {
  const { data: pageData } = usePreviewSubscription(getContactPageDataQuery, {
    initialData: data,
    enabled: preview
  })

  return (
    <MainLayout className="space-y-8 lg:space-y-16">
      <StandardMeta
        canonical={`/contact`}
        title={pageData?.openGraph?.title}
        description={pageData?.openGraph?.description}
      />
      <PageHeader
        contentClassName="container-lg"
        title={pageData?.title}
        subtitle={pageData?.subtitle}
      />
      {pageData?.body?.length > 0 && (
        <article className="mx-auto prose container-lg">
          <BlockContent blocks={pageData?.body} />
        </article>
      )}
      <div className="mx-auto space-y-6 container-lg lg:space-y-12">
        <SectionTitle title="Our locations" />
        <div className="divide-y-2">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div className="space-y-4 basis-1/2">
              <div className="aspect-video">
                <Map
                  style={{ height: '100%' }}
                  locations={[{ lat: 51.416039, lng: -0.75398 }]}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between text-lg">
              <dl className="space-y-2 w-96">
                <div className="space-y-1">
                  <dt className="font-bold">Address</dt>
                  <dd>
                    Garden Square Shopping Centre Eastcheap House, Central
                    Approach Letchworth, Herts, SG6 3DP
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="font-bold">Number</dt>
                  <dd>
                    <a
                      className="hover:text-secondary hover:underline"
                      href="tel:07947521211"
                    >
                      07947521211
                    </a>
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="font-bold">Email</dt>
                  <dd>
                    <a
                      className="hover:text-secondary hover:underline"
                      href="mailto:info@eobacademy.com"
                    >
                      info@eobacademy.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-6 mt-6 lg:mt-12 lg:pt-12 md:flex-row">
            <div className="space-y-4 basis-1/2">
              <div className="aspect-video">
                <Map
                  style={{ height: '100%' }}
                  locations={[{ lat: 51.416039, lng: -0.23164 }]}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between text-lg">
              <dl className="space-y-2 w-96">
                <div className="space-y-1">
                  <dt className="font-bold">Address</dt>
                  <dd>
                    EOB Academy, Letchworth Town Hall, Broadway, Letchworth
                    Garden City SG6 3BF
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="font-bold">Number</dt>
                  <dd>
                    <a
                      className="hover:text-secondary hover:underline"
                      href="tel:01344304978"
                    >
                      01344304978
                    </a>
                  </dd>
                </div>
                <div className="space-y-1">
                  <dt className="font-bold">Email</dt>
                  <dd>
                    <a
                      className="hover:text-secondary hover:underline"
                      href="mailto:info@eobacademy.com"
                    >
                      info@eobacademy.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default ContactPage

export const getStaticProps = async ({ preview = false }) => {
  const pageData = await getContactPageData(false)
  return {
    props: {
      data: pageData || {},
      preview
    },
    revalidate: 60 * 1 // 30 minutes
  }
}
