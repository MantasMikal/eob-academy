import { UseNextSanityImageProps } from 'next-sanity-image'
import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

import SmartLink from '@/components/Primitive/SmartLink'

import SanityImage from '../SanityImage'

export interface ITeamMemberProps {
  title: string
  image: UseNextSanityImageProps
  bio?: string
  socials?: {
    linkedIn?: string
    twitter?: string
    instagram?: string
  }
}

const TeamMemberCard = ({ title, image, socials, bio }: ITeamMemberProps) => {
  const hasSocials = socials && Object.keys(socials).length > 0
  return (
    <div className="flex flex-col justify-start space-y-2 transition-all bg-white border rounded shadow">
      <SanityImage
        className="object-cover rounded aspect-square w-full"
        src={image}
        alt={title}
        width={500}
        height={500}
        sizes="(max-width: 600px) 50vw, 33vw"
      />
      <div className="flex flex-col h-full px-4 py-2 space-y-1">
        <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        {hasSocials && (
          <div className="flex space-x-2">
            {socials.linkedIn && (
              <SmartLink
                className="text-[#0A66C2] underline hover:scale-105 active:scale-98"
                href={socials.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6" />
              </SmartLink>
            )}
            {socials.instagram && (
              <SmartLink
                className="text-[#E1306C] underline hover:scale-101 focus:scale-98"
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6" />
              </SmartLink>
            )}
            {socials.twitter && (
              <SmartLink
                className="text-[#1D9BF0] underline hover:scale-101 focus:scale-98"
                href={socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-6 h-6" />
              </SmartLink>
            )}
          </div>
        )}
        <p>{bio}</p>
      </div>
    </div>
  )
}

export default TeamMemberCard
