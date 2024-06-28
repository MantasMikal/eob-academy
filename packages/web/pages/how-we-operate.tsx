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
                  At EOB we build one united workforce around the young person
                  to support all of their educational and emotional needs.
                  Autistic Spectrum Disorder is the most common condition behind
                  an ECHP. For those receiving SEN support without an
                  EHCP,speech, language and communication needs are to the fore
                </p>
                <p>
                  <b>
                    Often we find that the simplest and most effective therapy
                    is to let the child be themselves.
                  </b>{' '}
                  If they need to stand and turn five times before starting
                  their work, we encourage them. The freedom to do this without
                  provoking conflict is often the first in a series of acts that
                  make them feel accepted and instantly releases the intense
                  pressure to behave in a prescribed way. With their anxieties
                  quietened, they can then focus on the learning.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          className="overflow-hidden"
          title="What people say about us"
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
              <h3 className="subtitle font-normal mb-11">
                If you love video games and esports, there is a place for you
                here.
              </h3>
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
