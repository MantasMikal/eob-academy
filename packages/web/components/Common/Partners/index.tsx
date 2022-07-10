import SmartLink from '@/components/Primitive/SmartLink'
import Image from 'next/future/image'
import React from 'react'
import SectionTitle from '../SectionTitle'

interface IPartner {
  title: string
  href: string
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
              href={partner.href}
              target="_blank"
              className="max-w-[80px] my-2 mx-3 lg:my-4 lg:mx-3 lg:max-w-[160px] hover:scale-101 active:scale-98 transition-all"
            >
              <Image
                src={partner.image}
                alt={partner.title}
                width={200}
                height={200}
              />
            </SmartLink>
          ))}
        </div>
        <div className="flex flex-wrap justify-start items-center">
          {supporters.map((supporter) => (
            <SmartLink
              href={supporter.href}
              target="_blank"
              className="max-w-[60px] my-2 mx-3 lg:my-4 lg:mx-3 lg:max-w-[120px] hover:scale-101 active:scale-98 transition-all"
            >
              <Image
                src={supporter.image}
                alt={supporter.title}
                width={200}
                height={200}
              />
            </SmartLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partners
