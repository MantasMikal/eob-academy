import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import Partners from '@/components/Common/Partners'
import SanityImage from '@/components/Common/SanityImage'
import Section from '@/components/Common/Section'
import { getAllSponsors } from '@/services/sanity/sanity'
import React from 'react'

export default function Testimonials({ sponsors }: any) {
  const partnersAndSupporters = {
    partners: sponsors.filter((s: any) => s.isPartner),
    supporters: sponsors.filter((s: any) => !s.isPartner)
  }
  return (
    <MainLayout>
      <PageHeader
        title="Testimonials"
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
        diam nonummy nibh euismod tincidunt ut laoreet dolore magna"
      />
      <section className="container-lg lg:flex py-20 lg:gap-10">
        <div className="m-auto w-min my-20 lg:my-0">
          <iframe
            className="mx-auto w-64 h-auto sm:w-96 sm:h-52"
            src="https://www.youtube.com/embed/Thwob7ePjd0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="mt-6">Ryan from Excel Esports</p>
        </div>
        <div className="m-auto w-min my-20 lg:my-0">
          <iframe
            className="mx-auto w-64 h-auto sm:w-96 sm:h-52"
            src="https://www.youtube.com/embed/gwvr04o8xN4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="mt-6">Helena Watson from Riot Games</p>
        </div>
      </section>
      <Section title="Testimonials">
        <div className="grid gap-x-0 gap-y-4 grid-cols-1 md:gap-y-8 md:grid-cols-2 lg:grid-cols-3 container-lg">
          {sponsors.map((sponsor: any, i: number) => {
            let morePadding = sponsors.length - 1 === i
            if (sponsor.quoteBody) {
              return (
                <div
                  key={`Sponsor:${i}-${sponsor.name}`}
                  style={{
                    borderTop: 'none',
                    borderLeft: 'none',
                    borderRight: 'none',
                    marginBottom: '-2px'
                  }}
                  className={`px-5 py-14 border-2 border-primary ${morePadding && 'pb-52'}`}
                >
                  <SanityImage
                    className="w-auto h-28"
                    src={sponsor.image}
                    alt={sponsor.name}
                  />
                  <p className="my-11">{sponsor.name}</p>
                  <p>{sponsor.quoteBody}</p>
                  <p className="text-primary">{sponsor.people}</p>
                </div>
              )
            }
          })}
        </div>
      </Section>
      <section className="container-lg -top-14 lg:-top-14 pb-11">
        <Partners
          partners={partnersAndSupporters.partners}
          supporters={partnersAndSupporters.supporters}
        />
      </section>
    </MainLayout>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  const sponsors = await getAllSponsors(preview)

  return {
    props: {
      sponsors
    },
    revalidate: 60 * 30 // 30 minutes
  }
}
