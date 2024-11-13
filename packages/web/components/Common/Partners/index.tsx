import SmartLink from '@/components/Primitive/SmartLink'
import React from 'react'
import SanityImage from '../SanityImage'
import SectionTitle from '../SectionTitle'

interface IPartner {
  title: string
  url: string
  image: string
  isHidden?: boolean
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
        href="/voices"
      />
      <div className="space-y-8">
        <div className="flex flex-wrap justify-start items-center border-b-2 pb-8 border-secondary">
          {partners
            .filter((p) => !p.isHidden)
            .map((partner, i: number) => (
              <SmartLink
                href={partner.url}
                target="_blank"
                key={`${partner.title}:${i}`}
                className="max-w-[60px] md:max-w-[80px] my-2 mx-3 lg:my-4 lg:mx-5 lg:max-w-[70px] hover:scale-101 active:scale-98 transition-all"
              >
                <SanityImage src={partner.image as any} alt={partner.title} />
              </SmartLink>
            ))}
        </div>
        <div className="flex flex-wrap justify-start items-center">
          {supporters
            .filter((p) => !p.isHidden)
            .map((supporter, i: number) => (
              <SmartLink
                href={supporter.url}
                target="_blank"
                key={`${supporter.title}:${i}`}
                className="max-w-[50px] my-2 mx-3 lg:my-4 lg:mx-5 lg:max-w-[60px] hover:scale-101 active:scale-98 transition-all"
              >
                <SanityImage
                  src={supporter.image as any}
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
