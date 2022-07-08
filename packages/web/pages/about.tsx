import MainLayout from '@/components/Common/MainLayout'
import Icon from '@/components/Primitive/Icon'
import type { NextPage } from 'next'
import Section from '@/components/Common/Section'

const About: NextPage = () => {
  return (
    <MainLayout>
      {/* Intro */}
      <div className="font-semibold">
        <section className="py-8 px-4 lg:p-12 lg:py-16 bg-tertiary rounded-lg shadow">
          <div className="container-lg space-y-6 md:space-y-8 text-primary">
            <p className="ml-1 pb-28">
              <strong>EOB</strong> - About
            </p>
            <h2 className="heading-xlarge">About</h2>
            <p className="font-bold max-w-2xl text-sm md:text-xl subtitle pt-16">
              EOB Academy is a place where you can explore and build video games
              and create your own esports brand, alongside like-minded peers and
              incredible tutors.
            </p>
          </div>
        </section>
        {/* About */}
        <section className="container-lg my-20 place-items-center grid sm:grid-cols-3 grid-cols-1 gap-4 lg:gap-32 gap-y-12">
          <div className="flex flex-col p-6 px-3 xl:px-11 lg:py-6 rounded-lg items-left space-y-4 flex-auto">
            <Icon
              type="controller"
              width={120}
              height={80}
              a11yText="Controller"
              className="mt-5"
            />
            <h3 className="font-bold text-xl text-primary">Purpose</h3>
            <p>
              An Academy that offers small class sizes, creates video games and
              grassroots esports teams.
            </p>
          </div>
          <div className="flex flex-col p-6 xl:px-11 lg:py-6 rounded-lg items-left space-y-4 flex-auto">
            <Icon type="person" width={100} height={100} a11yText="Person" />
            <h3 className="font-bold text-xl text-primary">Purpose</h3>
            <p>
              Young people from all backgrounds working together to push each
              other to the next level.
            </p>
          </div>
          <div className="flex flex-col p-6 xl:px-11 lg:py-6 rounded-lg items-left space-y-4 flex-auto">
            <Icon type="tasks" width={100} height={100} a11yText="Tasks" />
            <h3 className="font-bold text-xl text-primary">Purpose</h3>
            <p>
              Video game creation, 3D character design, esports team creation,
              industry masterclasses.
            </p>
          </div>
        </section>
        {/* Get Involved */}
        <Section
          title="Get Involved"
          label="Apply"
          href="/apply"
          className="bg-backgroundSecondary"
        >
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
          title="The EOB Academy Provides:"
          className="bg-backgroundSecondary"
        >
          <div className="gap-32 md:flex lg:gap-60">
            <Icon
              type="handController"
              width={300}
              height={500}
              a11yText="Tasks"
              className="hidden md:block md:relative -top-14 left-24"
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
                className="text-primary mb-5"
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
                className="text-primary flex ml-auto"
              />
              <p className="text-primary font-normal">
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
            ></iframe>
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
              <p className="font-normal text-primary">
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
            ></iframe>
          </div>
        </Section>
      </div>
    </MainLayout>
  )
}

export default About
