import MainLayout from '@/components/Common/MainLayout'
import Icon from '@/components/Primitive/Icon'
import type { NextPage } from 'next'
import Section from '@/components/Common/Section'
import PageHeader from '@/components/Common/PageHeader'
import ItemRow from '@/components/Common/ItemRow'
import Image from 'next/future/image'
import { useRouter } from 'next/router'
import StandardMeta from '@/components/Meta/Standard'
import {
  getAboutPageData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import { getAboutPageDataQuery } from '@/services/sanity/queries'

const items = [
  {
    title: 'What',
    subtitle: `An Academy that offers small class sizes, creates video games and
    grassroots esports teams.`,
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
    subtitle: `Video game creation, 3D character design, esports team creation,
    industry masterclasses.`,
    a11yText: 'Tasks',
    icon: 'tasks'
  }
]

const About: NextPage = ({ data }: any) => {
  const router = useRouter()
  const { data: pageData } = usePreviewSubscription(getAboutPageDataQuery, {
    initialData: data,
    enabled: router?.query?.preview !== null
  })

  return (
    <MainLayout>
      <StandardMeta
        canonical="/about"
        title={pageData?.openGraph?.title}
        description={pageData?.openGraph?.description}
      />
      {/* Intro */}
      <div className="font-semibold space-y-8 lg:space-y-14">
        <PageHeader
          title="About"
          subtitle="EOB Academy is a place where you can explore and build video games
          and create your own esports brand, alongside like-minded peers and
          incredible tutors."
        />
        {/* About */}
        <ItemRow
          items={items}
          cardClassName="shadow-none items-start text-left"
          iconClassName="items-left"
        />
        {/* Get Involved */}
        <Section title="Get Involved" label="Apply" href="/apply" diffBg={true}>
          <h4 className="subtitle font-normal py-14">
            Express your interest by clicking the button to <br />
            get to our contact page - then email us.
          </h4>
        </Section>
        {/* EOB Academy & The Cohort */}
        <Section title="EOB Academy & The Cohort">
          <div className="max-w-xl">
            <h4 className="subtitle font-normal mb-11">
              If you love video games and esports, there is a place for you
              here.
            </h4>
            <p className="">
              EOB Academy give young people access to learn about video game
              creation and esports from fantastic tutors in great environments -
              be it online through Discord or at one of our physical locations
              in Bracknell or Letchworth.
            </p>
            <br />
            <p> Our courses have an open door policy to EHCP students.</p>
            <br />
            <p>
              We also offer English and Maths as part of our full-time course
              and have many ‘Life Skills and Enrichment’ classes to help
              confidence building.
            </p>
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
              <h4 className="subtitle font-normal mb-11">
                If you love video games and esports, there is a place for you
                here.
              </h4>
              <Icon
                type="quotes-open"
                width={24}
                a11yText="quotes-open"
                className="text-secondary mb-5"
              />
              <p className="text-md">
                EOB Academy give young people access to learn about video game
                creation and esports from fantastic tutors in great environments
                - be it online through Discord or at one of our physical
                locations in Bracknell or Letchworth.
              </p>
              <br />
              <p> Our courses have an open door policy to EHCP students.</p>
              <br />
              <p>
                We also offer English and Maths as part of our full-time course
                and have many ‘Life Skills and Enrichment’ classes to help
                confidence building.
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
        <Section title="Partners" label="Get in touch" href="/contact">
          <div className="max-w-xl">
            <h4 className="subtitle font-normal mb-11">
              EOB Academy & Prince’s Trust. <br /> Courses Nationwide.
            </h4>
            <p className="text-md pb-11">
              Helping more young people succeed through Prince’s Trust courses.{' '}
              <br />
              <br />
              EOB Academy’s partnership with the Prince’s Trust has been in
              action since 2017. <br />
              <br />
              We have up-skilled over 1000 young people nationwide through our 5
              day, Game Design course and our Esports Team Creation course.
            </p>
            <p className="font-normal">
              If your school or venue would like us to work with you get in
              touch.
            </p>
          </div>
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/SqFOpSwqUsg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="gap-32 md:flex lg:gap-60">
            <div className="max-w-xl">
              <h4 className="subtitle font-normal mb-11">
                EOB Academy & Sutton and District <br /> Training. Courses in
                Letchworth
              </h4>
              <p className="text-md pb-11">
                Helping more young people succeed with our full-time study
                programme.
                <br />
                <br />
                EOB Academy&apos;s partnership with Sutton & District Training
                started in 2018 and it has allowed the Academy to hit new
                heights by offering full-time Game Design study programmes by 60
                young people each year, aged 16-18 (24 - with an EHCP). We have
                a great synergy with the team and look forward to future
                projects.
                <br />
              </p>
              <p className="font-normal text-secondary">
                If your school or venue would like us to work with you get in
                touch.
              </p>
            </div>
          </div>
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/7zxEi66DLPs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Section>
      </div>
    </MainLayout>
  )
}

export default About

export const getStaticProps = async () => {
  const pageData = await getAboutPageData(false)
  return {
    props: {
      data: pageData || {}
    },
    revalidate: 60 * 30 // 30 minutes
  }
}
