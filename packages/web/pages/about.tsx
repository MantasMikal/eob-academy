import type { NextPage } from 'next'
import Image from 'next/image'

import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import Section from '@/components/Common/Section'
import StandardMeta from '@/components/Meta/Standard'
import BlockContent from '@/components/Primitive/BlockContent'
import Icon from '@/components/Primitive/Icon'
import { getAboutPageDataQuery } from '@/services/sanity/queries'
import {
  getAboutPageData,
  usePreviewSubscription
} from '@/services/sanity/sanity'

const About: NextPage = ({ data, preview }: any) => {
  const { data: pageData } = usePreviewSubscription(getAboutPageDataQuery, {
    initialData: data,
    enabled: preview
  })

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
        <div className="container-lg prose max-w-xl">
          <div className="prose max-w-xl text-slate-800">
            <BlockContent className="" blocks={pageData?.body} />
          </div>
        </div>

        <Section title="Who we are" diffBg={true}>
          <div className="md:grid md:grid-cols-2 gap-y-8 lg:gap-x-16">
            <div className="flex-col gap-2">
              <h4 className="text-slate-900 subtitle font-normal max-w-xl pb-4">
                We exist for each student
              </h4>
              <p className="text-slate-900 prose-p:font-normal prose max-w-max">
                We say this because each student joins us with their own
                specific needs to be nurtured. It breaks our heart that a child
                has had to experience emotions of exclusion, lack of acceptance
                or indifference within education. We’re here to reverse that.
                Each student’s happiness, mental well-being, potential and
                confidence is our priority. We take our role as their educator
                and supporter very seriously because we know just how fragile
                their happiness can be. Their time with us helps to shape their
                development and it also positively impacts students' social
                relationships with both friends and family and their pathway…
              </p>
            </div>
            <div className="flex-col gap-2">
              <h4 className="text-slate-900 subtitle font-normal max-w-xl pb-4">
                We know there’s unity in our team
              </h4>
              <p className="text-slate-900 prose-p:font-normal prose max-w-max">
                We are unified in our mission to deliver an inspirational place
                of learning to SEN students. We rely on each other for support
                and to ensure that any obstacles are overcome when a student
                presents a new challenge. We’re positive in our outlook to be
                able to come together and cater for each student’s needs.
              </p>
            </div>

            <div className="flex-col gap-2">
              <h4 className="text-slate-900 subtitle font-normal max-w-xl pb-4">
                We work with agility, sensitivity and full communication
              </h4>
              <p className="text-slate-900 prose-p:font-normal prose max-w-max">
                We’re progressive, agile in our approach and always communicate
                openly with parents, SENCOs and local authorities. EOB embraces
                change because we know it can lead to better, we stand firm on
                our beliefs and delivery because after 8 years we know it works.
                We see the negative impact that delays in the current system
                cause and we achieve the opposite.
              </p>
            </div>

            <div className="flex-col gap-2">
              <h4 className="text-slate-900 subtitle font-normal max-w-xl pb-4">
                We are creatively tenacious
              </h4>
              <p className="text-slate-900 prose-p:font-normal prose max-w-max">
                We use our expertise to show our students how they can bring
                something to life that they see or hear in their head and make
                it a tangible product in the world. Using teaching techniques we
                hone pupils' creative tenacity to spot opportunities and create
                a future for themselves where they are fulfilled.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Our vision at Enemy of Boredom">
          <div className="flex flex-col gap-8 md:gap-12">
            <div>
              <h4 className="text-slate-900 subtitle font-normal max-w-xl pb-4">
                If you love video games there is a place for you here.
              </h4>
              <div className="text-slate-900 prose-p:font-normal md:columns-2 gap-x-8 lg:gap-x-16 prose max-w-max">
                <p>
                  We’re a team of like minded, music and gaming industry
                  professionals who set out with a clear vision to deliver a
                  curriculum using teaching methods that would engage, inspire
                  and ultimately help SEN and Alternative learning students feel
                  accepted and reach their full potential.
                </p>
                <p>
                  We know we all have the power to be curious and learn, we just
                  have to respect that some students respond differently to
                  different teaching methods and environments.
                </p>
                <p>
                  By creating an inclusive learning environment, specifically
                  designed for SEN students, we rebuild their confidence,
                  working with SENCOs to create a pathway back into mainstream
                  education, or preparing the student to graduate and move into
                  work.{' '}
                </p>
                <p>
                  We re-energise each students’ thirst for life and learning,
                  and we take immense pride in seeing their confidence grow as
                  they start to feel motivated with life and realising their
                  future prospects
                </p>
                <p>
                  All our team members are dedicated to providing a positive
                  experience for each student, their parents, SENCOs and local
                  authorities. We know if we work together we can reverse bad
                  SEN education stories into positives and assist all involved.
                </p>
                <p>
                  Every single element that makes up our overall approach at
                  Enemy of Boredom is in place for a reason. We did the research
                  back then and created our academy after talking to carers,
                  parents, teachers, SENCOs, local authorities, child
                  psychologists, speech therapists and behavioural problem
                  solvers, all with the single mission of creating education
                  pathways for SEN and alternative education needs students.{' '}
                </p>
                <p>
                  This did not happen overnight. However, we can look back now
                  at the experience and curriculum that we’ve created and know
                  that we’ve achieved our goal.{' '}
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-slate-900 subtitle font-normal max-w-xl pb-4">
                Looking ahead, we have two main goals:
              </h4>
              <div className="text-slate-900 prose-p:font-normal prose-p:text-lg prose max-w-max">
                <p>
                  1. EOB will continue to expand our offering across more
                  locations to enable our tried and tested curriculum to
                  transform even more SEN students’ lives into ones that heal
                  their mindset, engage and inspire them, and create
                  opportunities within the workplace for them.
                </p>
                <p>
                  2. EOB will relieve the stress of an overwhelmed system and
                  provide more support for SENCOs, parents and local authorities
                  with their delivery.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          className="overflow-hidden"
          title="Creators Note"
          diffBg={true}
        >
          <div className="gap-32 md:flex lg:gap-60">
            <Image
              width={400}
              height={500}
              alt="Controller Hand"
              src={'/content/controllerHand.png'}
              style={{ maxHeight: '500px' }}
              className="z-[-1] object-contain relative block mx-auto -mt-28 md:mt-0 md:relative md:-top-24 md:left-24"
            />
            <div className="max-w-xl">
              <h3 className="subtitle font-normal mb-11">
                If you love video game design and music production, there is a
                place for you here.
              </h3>
              <Icon
                type="quotes-open"
                width={24}
                a11yText="quotes-open"
                className="text-secondary mb-5"
              />
              <p className="text-md">
                It’s vital to recognise that we challenge students with projects
                that need to be solved or created. We don’t challenge who they
                are or why they are the way they are. We accept it, find an
                appropriate ‘workaround’ and carry on as normal. Daily life at
                Enemy of Boredom sees everyone immersed in project work, new
                tech and future prospects so, after a while the ‘primary focus
                is no longer on their neurodiversity but success in their
                studies .
              </p>
              <br />
              <p>
                Nothing makes the team happier or prouder than seeing a new
                student attend Enemy of Boredom looking pensive in the morning
                and by home time, leaving with a grin.
              </p>
              <br />
              <p>
                Their excitement to belong somewhere is real and it makes every
                second of our jobs worthwhile.
              </p>
              <br />
              <p>I’ll look forward to welcoming you to Enemy of Boredom.</p>
              <br />
              <Icon
                type="quotes-close"
                width={24}
                a11yText="quotes-open"
                className="text-secondary flex ml-auto"
              />
              <p className="text-secondary font-normal">
                - Steve Godwin, Creator of the EOB Academy.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </MainLayout>
  )
}

export default About

export const getStaticProps = async ({ preview = false }) => {
  const pageData = await getAboutPageData(false)
  return {
    props: {
      data: pageData || {},
      preview
    },
    revalidate: 60 * 1 // 30 minutes
  }
}
