import CourseCard from '@/components/Common/CourseCard'
import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import SectionTitle from '@/components/Common/SectionTitle'
import StandardMeta from '@/components/Meta/Standard'
import BlockContent from '@/components/Primitive/BlockContent'
import Spinner from '@/components/Primitive/Spinner'
import { getApplyPageDataQuery } from '@/services/sanity/queries'
import {
  getApplyPageData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import { NextPage } from 'next'
import HubspotForm from 'react-hubspot-form'

const ApplyPage: NextPage = ({ data, preview }: any) => {
  const { data: pageData } = usePreviewSubscription(getApplyPageDataQuery, {
    initialData: data,
    enabled: preview
  })

  const { courses } = pageData || {}

  return (
    <MainLayout className="space-y-8 lg:space-y-16">
      <StandardMeta
        canonical={`/apply`}
        title={pageData?.openGraph?.title}
        description={pageData?.openGraph?.description}
      />
      <PageHeader
        contentClassName="container-md"
        title={pageData?.openGraph?.title || pageData?.openGraph?.title}
        subtitle={pageData?.openGraph?.title || pageData?.subtitle}
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
      {courses?.length > 0 && (
        <section className="container-md space-y-8 md:space-y-16">
          <SectionTitle
            title="Full-time & Short Courses"
            label="All courses"
            href="/courses"
          />
          <p className="max-w-3xl text-xl md:text-3xl text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            veniam provident, error dolores fuga minima vitae a officia
            doloremque quae explicabo repellendus iste, commodi ab ut fugit
            quod! Accusamus, cum?
          </p>
          <div className="flex flex-col space-y-12">
            {courses.map((item: any, i: number) => (
              <CourseCard key={`CourseCard:${i}`} {...item} />
            ))}
          </div>
        </section>
      )}
    </MainLayout>
  )
}

export default ApplyPage

export const getStaticProps = async ({ preview = false }) => {
  const pageData = await getApplyPageData(false)
  return {
    props: {
      data: pageData || {},
      preview
    },
    revalidate: 60 * 1 // 30 minutes
  }
}
