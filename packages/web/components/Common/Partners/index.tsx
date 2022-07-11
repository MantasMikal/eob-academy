import SmartLink from '@/components/Primitive/SmartLink'
import React from 'react'
import SanityImage from '../SanityImage'
import SectionTitle from '../SectionTitle'

interface IPartner {
  title: string
  url: string
  image: string
}

interface IPartnersProps {
  partners: IPartner[]
  supporters: IPartner[]
}

const Partners = ({ partners, supporters }: IPartnersProps) => {
  return (
    <div className="space-y-8 md:space-y-16">
      <SectionTitle
        title="Partners & supporters"
        label="Testimonials"
        href="/testimonials"
      />
      <div className="space-y-8">
        <div className="flex flex-wrap justify-start items-center border-b-2 pb-8 border-secondary">
          {partners.map((partner) => (
            <SmartLink
              href={partner.url}
              target="_blank"
              key={partner.title}
              className="max-w-[80px] my-2 mx-3 lg:my-4 lg:mx-5 lg:max-w-[140px] hover:scale-101 active:scale-98 transition-all"
            >
              <SanityImage image={partner.image as any} alt={partner.title} />
            </SmartLink>
          ))}
        </div>
        <div className="flex flex-wrap justify-start items-center">
          {supporters.map((supporter) => (
            <SmartLink
              href={supporter.url}
              target="_blank"
              key={supporter.title}
              className="max-w-[60px] my-2 mx-3 lg:my-4 lg:mx-5 lg:max-w-[120px] hover:scale-101 active:scale-98 transition-all"
            >
              <SanityImage
                image={supporter.image as any}
                alt={supporter.title}
              />
            </SmartLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partners
