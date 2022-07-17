import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import Partners from '@/components/Common/Partners'
import SanityImage from '@/components/Common/SanityImage'
import Section from '@/components/Common/Section'
import StandardMeta from '@/components/Meta/Standard'
import { useRouter } from 'next/router'
import {
  getAllSponsors,
  getAllTestimonialData,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import React from 'react'
import { getTestimonialPageDataQuery } from '@/services/sanity/queries'
import BlockContent from '@/components/Primitive/BlockContent'

export default function Testimonials({ sponsors, data }: any) {
  const partnersAndSupporters = {
    partners: sponsors.filter((s: any) => s.isPartner),
    supporters: sponsors.filter((s: any) => !s.isPartner)
  }
  const router = useRouter()
  const { data: pageData } = usePreviewSubscription(
    getTestimonialPageDataQuery,
    {
      initialData: data,
      enabled: router?.query?.preview !== null
    }
  )

  return (
    <MainLayout className="space-y-8 lg:space-y-16">
      <StandardMeta
        canonical="/testimonials"
        title={pageData?.openGraph?.title}
        description={pageData?.openGraph?.description}
      />
      <PageHeader title={pageData?.title} subtitle={pageData?.subtitle} />
      {pageData?.body?.length > 0 && (
        <article className="prose container-md mx-auto">
          <BlockContent blocks={pageData?.body} />
        </article>
      )}
      <section className="container-lg md:flex gap-3 lg:gap-10">
        <div className="m-auto w-full">
          <iframe
            className="mx-auto w-full h-full aspect-video"
            src="https://www.youtube.com/embed/Thwob7ePjd0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p className="mt-6">Ryan from Excel Esports</p>
        </div>
        <div className="m-auto w-full">
          <iframe
            className="mx-auto w-full h-full aspect-video"
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
        <div className="grid gap-x-4 gap-y-4 grid-cols-1 md:gap-y-8 md:gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          {sponsors
            .filter((s: any) => s.quoteBody)
            .map((sponsor: any, i: number) => (
              <div
                key={`Sponsor:${i}-${sponsor.name}`}
                className={`py-14 border-b-2 border-secondary`}
              >
                <SanityImage
                  className="w-auto h-28"
                  src={sponsor.image}
                  alt={sponsor.name}
                />
                <p className="py-11">{sponsor.name}</p>
                <p>{sponsor.quoteBody}</p>
                <p className="text-secondary pb-2">{sponsor.people}</p>
              </div>
            ))}
        </div>
      </Section>
      <section className="container-lg">
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
  const testimonialPageData = await getAllTestimonialData(preview)

  return {
    props: {
      sponsors,
      data: testimonialPageData
    },
    revalidate: 60 * 30 // 30 minutes
  }
}
