import React, { useState } from 'react'

import Button from '@/components/Common/Button'
import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import Partners from '@/components/Common/Partners'
import SanityImage from '@/components/Common/SanityImage'
import Section from '@/components/Common/Section'
import StandardMeta from '@/components/Meta/Standard'
import BlockContent from '@/components/Primitive/BlockContent'
import { getTestimonialPageDataQuery } from '@/services/sanity/queries'
import {
  getAllSponsors,
  getAllTestimonialData,
  usePreviewSubscription
} from '@/services/sanity/sanity'

const Testimonial = ({ image, name, quoteBody, people }: any) => {
  const [open, setOpen] = React.useState(false)
  const shouldTruncate = quoteBody.length > 300
  const truncatedQuote = !open ? quoteBody.slice(0, 300) + '...' : quoteBody

  return (
    <div className={`py-10 border-b-2 border-secondary text-center`}>
      <SanityImage className="w-auto h-24 m-auto" src={image} alt={name} />
      <p className="font-semibold pb-3 text-xl pt-6 md:pt-10">{name}</p>
      <div className="pb-2">
        <p className="inline">{truncatedQuote}</p>
        {shouldTruncate && !open && (
          <>
            &nbsp;
            <button
              onClick={() => setOpen(!open)}
              className="inline font-bold text-secondary underline"
            >
              (read more)
            </button>
          </>
        )}
      </div>
      <p className="text-secondary pb-2">{people}</p>
    </div>
  )
}

const categoryMap = {
  'professional-voices': 'Professional Voices',
  'student-voices': 'Student Voices',
  'parent-and-career-voices': 'Parent and Carer Voices',

}

export default function Testimonials({ sponsors, data, preview }: any) {
  const partnersAndSupporters = {
    partners: sponsors.filter((s: any) => s.isPartner),
    supporters: sponsors.filter((s: any) => !s.isPartner)
  }

  const { data: pageData } = usePreviewSubscription(
    getTestimonialPageDataQuery,
    {
      initialData: data,
      enabled: preview
    }
  )

  const [activeCategory, setActiveCategory] = useState('professional-voices')
  console.log("🚀 ~ Testimonials ~ activeCategory:", activeCategory)

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
      {/* <section className="container-lg md:flex gap-3 lg:gap-10">
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
      </section> */}
      <Section title="Testimonials">
        <div className="flex flex-row gap-4 flex-wrap">
          {Object.keys(categoryMap).map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'secondary' : 'outline'}
              onClick={() => {
                console.log("🚀 ~ Testimonials ~ onClick ~ category", category)
                setActiveCategory(category)
              }}
            >
              {categoryMap[category as keyof typeof categoryMap]}
            </Button>
          ))}
        </div>
        <div className="grid gap-x-4 gap-y-4 grid-cols-1 md:gap-y-8 md:gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          {sponsors
            .filter((s: any) => s.category === activeCategory)
            .filter((s: any) => s.quoteBody)
            .map((sponsor: any, i: number) => (
              <Testimonial key={`Sponsor:${i}-${sponsor.name}`} {...sponsor} />
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
      data: testimonialPageData,
      preview
    },
    revalidate: 60 * 1 // 30 minutes
  }
}
