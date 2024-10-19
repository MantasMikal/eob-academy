import type { NextPage } from 'next'

import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import Section from '@/components/Common/Section'
import TeamMemberCard from '@/components/Common/TeamMemberCard'
import StandardMeta from '@/components/Meta/Standard'
import BlockContent from '@/components/Primitive/BlockContent'
import { getTeamPageDataQuery } from '@/services/sanity/queries'
import {
  getTeamPageData,
  usePreviewSubscription
} from '@/services/sanity/sanity'

const Team: NextPage = ({ data, preview }: any) => {
  const { data: pageData } = usePreviewSubscription(getTeamPageDataQuery, {
    initialData: data,
    enabled: preview
  })

  const departments = pageData?.departments || []
  return (
    <MainLayout>
      <StandardMeta
        canonical="/about"
        title={pageData?.openGraph?.title}
        description={pageData?.openGraph?.description}
      />
      {/* Intro */}
      <div className="space-y-8 lg:space-y-14">
        <PageHeader title={pageData?.title} subtitle={pageData?.subtitle} />
        <div className="container-lg">
          <BlockContent className="" blocks={pageData?.body} />
        </div>

        {departments.length > 0 &&
          departments.map((department: any) => (
            <Section title={department.title}>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {(department.teamMembers || []).map((member: any) => (
                  <TeamMemberCard
                    key={member._id}
                    title={member.name}
                    image={member.image}
                    bio={member.bio}
                    role={member.role}
                    shortBio={member.shortBio}
                    socials={{
                      linkedIn: member.linkedIn,
                      twitter: member.twitter,
                      instagram: member.instagram
                    }}
                  />
                ))}
              </div>
            </Section>
          ))}
      </div>
    </MainLayout>
  )
}

export default Team

export const getStaticProps = async ({ preview = false }) => {
  const pageData = await getTeamPageData(false)
  return {
    props: {
      data: pageData || {},
      preview
    },
    revalidate: 60 * 1 // 30 minutes
  }
}
