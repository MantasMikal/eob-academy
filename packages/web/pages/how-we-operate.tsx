import type { NextPage } from 'next'
import Image from 'next/image'

import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import Section from '@/components/Common/Section'
import StandardMeta from '@/components/Meta/Standard'
import BlockContent from '@/components/Primitive/BlockContent'
import Icon from '@/components/Primitive/Icon'
import { getHowWeOperatePageDataQuery } from '@/services/sanity/queries'
import {
  getHowWeOperatePageData,
  usePreviewSubscription
} from '@/services/sanity/sanity'

const HowWeOperate: NextPage = ({ data, preview }: any) => {
  const { data: pageData } = usePreviewSubscription(
    getHowWeOperatePageDataQuery,
    {
      initialData: data,
      enabled: preview
    }
  )

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

        <Section title="Success for Neurodiverse Students">
          <div className="flex flex-col gap-8 md:gap-12">
            <div>
              <h4 className="text-slate-900 subtitle font-normal max-w-xl pb-4">
                Setting neurodiverse students up for success
              </h4>
              <div className="text-slate-900 prose-p:font-normal md:columns-2 gap-x-8 lg:gap-x-16 prose max-w-max">
                <p>
                  We’ve created a learning environment where neurodiverse
                  students flourish and reach their potential.
                </p>
                <p>
                  Our environments are designed to be intimate, calm, quiet,
                  with small student numbers to reduce noise and ‘clutter’. They
                  are designed with sensory needs in mind so the colours and
                  lighting are tranquil and soothing.
                </p>
                <p>
                  We have a maximum of five students per staff member. With
                  smaller class sizes, relationships are built quickly; students
                  feel closer to their tutor group and have the benefit of a
                  greater staff-to-student ratio to enable them to learn the
                  social skills that are often underdeveloped in young people
                  with additional needs.
                </p>
                <p>
                  As a basic physiological need, water is important on many
                  levels. We know that dehydration will affect cognitive
                  performances as water accounts for 75% of brain mass. We
                  provide free bottles of water as well as snacks high in
                  carbohydrates to set them off on their daily learning journey.
                </p>
                <p>
                  Whilst we believe in certain standards of behaviour and some
                  common ‘rules’, students are not tied to a behavioural system
                  that will judge or risk creating a downward spiral of
                  perceived negative self-worth. Instead, we operate on a more
                  individual basis. Tutors have a strong, solid relationship
                  with the students built on mutual respect which involves them
                  getting to know the individual and their triggers. This
                  results in the students being supported to identify when a
                  break or change of approach may be needed. We have seen this
                  approach lead to the building of greater self-esteem and
                  confidence, an increased motivation to learn and willingness
                  to focus.
                </p>
                <p>
                  We have designated areas so at any point, if a student is
                  struggling to process or contain their emotions, they know
                  that they have a safe space where they can decompress and
                  recompose themselves. Extra support for tough days is always
                  on hand if needed.
                </p>
                <p>
                  Students are encouraged to be themselves and embrace
                  authenticity, without having to conform to an anxiety-creating
                  paradigm. They are supported to make progress at their pace
                  and there is a relaxed vibe designed to maintain their
                  well-being.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          className="overflow-hidden"
          title="Words from a SENCO"
          diffBg={true}
        >
          <div className="gap-32 md:flex lg:gap-60">
            <Image
              width={400}
              height={500}
              alt="Controller Hand"
              src={'/content/controllerHand.png'}
              style={{ maxHeight: '500px' }}
              className="z-[-1] object-contain relative block mx-auto -mt-28 md:mt-0 md:relative md:-top-16 md:left-24"
            />
            <div className="max-w-xl">
              <Icon
                type="quotes-open"
                width={24}
                a11yText="quotes-open"
                className="text-secondary mb-5"
              />
              <p className="text-md">
                EOB have done amazing work with students who otherwise would
                have been disengaged or ‘lost’ in education. Their enthusiasm
                and knowledge inspires young people and ensures a successful
                course led by professionals who showcase a passion and
                commitment to the programme
              </p>

              <br />
              <Icon
                type="quotes-close"
                width={24}
                a11yText="quotes-open"
                className="text-secondary flex ml-auto"
              />
              <p className="text-secondary font-normal">
                - Kirstie Touhey, Acting SENCO - The Reach Free School,
                Rickmansworth
              </p>
            </div>
          </div>
        </Section>
      </div>
    </MainLayout>
  )
}

export default HowWeOperate

export const getStaticProps = async ({ preview = false }) => {
  const pageData = await getHowWeOperatePageData(false)
  return {
    props: {
      data: pageData || {},
      preview
    },
    revalidate: 60 * 1 // 30 minutes
  }
}
