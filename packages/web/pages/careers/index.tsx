import JobCard from '@/components/Common/JobCard'
import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import StandardMeta from '@/components/Meta/Standard'
import { getAllJobs } from '@/services/sanity/sanity'
import { NextPage } from 'next'

const PostsPage: NextPage = ({ data: jobs }: any) => {
  return (
    <MainLayout className="space-y-6 lg:space-y-12">
      <StandardMeta
        canonical={`/careers`}
        title={'Careers'}
        description={'The latest Enemy Of Boredom job opportunities'}
      />
      <PageHeader
        title="Careers"
        subtitle="The latest Enemy Of Boredom job opportunities"
      />
      <section className="space-y-4 container-lg">
        <div className="flex flex-wrap justify-between gap-4">
          <h2 className="text-2xl font-semibold text-slate-700">All jobs</h2>
        </div>
        <div className="grid items-start grid-cols-1 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.length > 0 ? (
            jobs.map((item: any) => {
              // eslint-disable-next-line no-unused-vars
              const { publishedAt, ...jobProps } = item
              return <JobCard {...jobProps} key={item._id} />
            })
          ) : (
            <div className="text-left text-md text-slate-700">
              No jobs found
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  )
}

export default PostsPage

interface StaticProps {
  preview: boolean
}

export const getStaticProps = async ({ preview }: StaticProps) => {
  const jobsData = await getAllJobs(preview)
  return {
    props: {
      data: jobsData || []
    },
    revalidate: 60 * 1 // 30 minutes
  }
}
