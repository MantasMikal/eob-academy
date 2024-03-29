import MainLayout from '@/components/Common/MainLayout'
import Icon from '@/components/Primitive/Icon'
import type { NextPage } from 'next'
import Section from '@/components/Common/Section'
import PageHeader from '@/components/Common/PageHeader'
import ItemRow from '@/components/Common/ItemRow'
import Image from 'next/future/image'
import StandardMeta from '@/components/Meta/Standard'
import {
  getAboutPageData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import { getAboutPageDataQuery } from '@/services/sanity/queries'
import BlockContent from '@/components/Primitive/BlockContent'

const items = [
  {
    title: 'What',
    subtitle: `An Academy that offers small class sizes creating video games.`,
    a11yText: 'Controller',
    icon: 'controller'
  },
  {
    title: 'Who',
    subtitle: `Young people from all backgrounds working together to push each
    other to the next level.`,
    a11yText: 'Person',
    icon: 'person'
  },
  {
    title: 'The Content',
    subtitle: `Video game creation, 3D character design, industry masterclasses.`,
    a11yText: 'Tasks',
    icon: 'tasks'
  }
]

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
        {/* About */}
        <ItemRow
          items={items}
          cardClassName="shadow-none items-center text-left"
          iconClassName="items-left"
        />
        <div className="container-lg prose max-w-xl">
          <div className="prose max-w-xl text-slate-800">
            <BlockContent className="" blocks={pageData?.body} />
          </div>
        </div>

        {/* Get Involved */}
        <Section title="Get Involved" label="Apply" href="/apply" diffBg={true}>
          <h4 className="subtitle font-normal py-14">
            Express your interest by clicking the button to <br />
            get to our contact page - then email us.
          </h4>
        </Section>
        {/* EOB Academy & The Cohort */}
        <Section title="EOB Academy & The Cohort">
          <div className="">
            <h4 className="text-slate-900 subtitle font-normal max-w-xl pb-4">
              If you love video games there is a place for you here.
            </h4>
            <div className="text-slate-900 prose-p:font-normal md:columns-2 gap-x-8 lg:gap-x-16 prose max-w-max">
              <p>
                EOB Academy give young people access to learn about video game
                creation from fantastic tutors in great environments - be it
                online through Discord or at one of our physical locations in
                Bracknell or Letchworth.
              </p>

              <p>
                Our courses have an open door policy to EHCP students. We also
                offer English and Maths as part of our full-time course and have
                many ‘Life Skills and Enrichment’ classes to help confidence
                building.
              </p>

              <p>
                We are offering a unique opportunity to support people that
                think differently using video game design to build futures. We
                have small cohorts and a great environment to work in. We
                support students with both accredited education and social
                opportunities with like minded peers.
              </p>

              <p>
                We teach students how to create video games and navigate around
                industry standard software. We cover - 2D design / 3D Design /
                Pixel Art / Level Design / Website & Portfolio Creation.
                Positive student results have meant that we continue to grow,
                and we have excelled engagement through both our physical venue
                sessions and tutor lead remote session.
              </p>

              <p>
                Learn from industry experienced tutors. Remote working packages
                available. EOB Academy has been providing successful and
                engaging packages of education, igniting the passion for
                learning to young people both pre-16 and post 16. Each person on
                our course will create their own video game, from the
                storyboarding of the game, through to level design and then
                publishing it for peers to enjoy.
              </p>
            </div>
          </div>
        </Section>
        {/* The EOB Academy Provides: */}
        <Section
          className="overflow-hidden"
          title="The EOB Academy Provides:"
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
                Enemy Of Boredom Academy is a place for young people to come and
                feel comfortable while learning together and learning from each
                other, using video gaming and esports to build futures.
              </p>
              <br />
              <p>
                It’s a place where ideas are shared, and individuals can explore
                their passions with the support of trainers and industry
                professionals.
              </p>
              <br />
              <Icon
                type="quotes-close"
                width={24}
                a11yText="quotes-open"
                className="text-secondary flex ml-auto"
              />
              <p className="text-secondary font-normal">
                - Steve Godwin, Creator of the Enemy of Boredom Academy.
              </p>
            </div>
          </div>
        </Section>
        {/* Partners: */}
        {/* <Section title="Partners" label="Get in touch" href="/contact">
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 md:justify-between md:items-center">
            <div className="basis-1/2">
              <h4 className="subtitle font-normal mb-11">
                EOB Academy & Prince’s Trust. Trust. <br /> Courses Nationwide.
              </h4>
              <p className="text-md pb-11">
                Helping more young people succeed through Prince’s Trust
                courses.. <br />
                <br />
                EOB Academy’s partnership with the Prince’s Trust has been in
                action since 2017. <br />
                <br />
                We have up-skilled over 1000 young people nationwide through our
                Game Design course and our Esports Team Creation course.
              </p>
            </div>
            <iframe
              className="shrink-0 aspect-video w-full md:w-2/5 h-auto radius-md"
              src="https://www.youtube.com/embed/SqFOpSwqUsg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="gap-32 md:flex lg:gap-60">
            <div className="flex flex-col gap-4 md:flex-row md:gap-8 md:justify-between md:items-center">
              <div className="basis-1/2">
                <h3 className="subtitle font-normal mb-11">
                  EOB Academy & Sutton and District <br /> Training. Courses in
                  Letchworth
                </h3>
                <p className="text-md pb-11">
                  Helping more young people succeed with our full-time study
                  programme.
                  <br />
                  <br />
                  EOB Academy&apos;s partnership with Sutton & District Training
                  started in 2018 and it has allowed the Academy to hit new
                  heights by offering full-time Game Design study programmes for
                  40 young people each year, aged 16-18 (24 - with an EHCP). We
                  have a great synergy with the team and look forward to future
                  projects.
                  <br />
                </p>
                <p className="font-normal text-secondary">
                  If your school or venue would like us to work with you get in
                  touch.
                </p>
              </div>
              <iframe
                className="shrink-0 aspect-video w-full md:w-2/5 h-auto radius-md"
                src="https://www.youtube.com/embed/7zxEi66DLPs"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </Section> */}
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
