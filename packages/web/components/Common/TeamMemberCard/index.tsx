import {
  CloseButton,
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from '@headlessui/react'
import { UseNextSanityImageProps } from 'next-sanity-image'
import React, { useState } from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'

import SmartLink from '@/components/Primitive/SmartLink'

import SanityImage from '../SanityImage'

export interface ITeamMemberProps {
  title: string
  image: UseNextSanityImageProps
  role: string
  bio?: string
  shortBio?: string
  socials?: {
    linkedIn?: string
    twitter?: string
    instagram?: string
  }
}

const TeamMemberCard = ({
  title,
  image,
  socials,
  role,
  bio,
  shortBio
}: ITeamMemberProps) => {
  const hasSocials = socials && Object.keys(socials).length > 0
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex flex-col justify-start space-y-2 transition-all bg-white border rounded shadow hover:scale-101 active:scale-98 hover:shadow-md"
      >
        <SanityImage
          className="object-cover rounded aspect-square w-full"
          src={image}
          alt={title}
          width={500}
          height={500}
          sizes="(max-width: 600px) 50vw, 33vw"
        />
        <div className="flex flex-col h-full px-4 py-2 text-left space-y-1">
          <h3 className="text-lg font-bold text-slate-800">{title}</h3>
          {role && (
            <p className="text-sm font-semibold !mt-0 text-slate-600">{role}</p>
          )}
          {hasSocials && (
            <div className="flex space-x-2 py-1">
              {socials.twitter && (
                <SmartLink
                  className="text-black underline hover:scale-101 focus:scale-98"
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="w-6 h-6" />
                </SmartLink>
              )}
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
            </div>
          )}
          {shortBio && (
            <p className="text-sm whitespace-pre-wrap">{shortBio}</p>
          )}
        </div>
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/30 duration-300 ease-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel
            transition
            className="relative max-w-xl bg-white rounded overflow-clip duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <div className="relative flex flex-col overflow-y-auto p-4 h-full max-h-[80vh]">
              <div className="relative aspect-square w-full">
                <SanityImage
                  className="object-cover rounded aspect-square w-full"
                  src={image}
                  alt={title}
                  width={800}
                  height={800}
                  sizes="(max-width: 600px) 50vw, 33vw"
                />
              </div>
              <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
              {role && (
                <p className="text-sm font-semibold !mt-0 text-slate-600">
                  {role}
                </p>
              )}
              {hasSocials && (
                <div className="flex space-x-2 pt-1 pb-2">
                  {socials.twitter && (
                    <SmartLink
                      className="text-black underline hover:scale-101 focus:scale-98"
                      href={socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaXTwitter className="w-6 h-6" />
                    </SmartLink>
                  )}
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
                </div>
              )}
              <Description className="text-sm whitespace-pre-wrap">
                {bio}
              </Description>
            </div>
            <CloseButton
              onClick={() => setIsOpen(false)}
              as="button"
              className="absolute top-2 right-2 hover:scale-105 active:scale-98 focus:scale-105"
            >
              <IoClose className="w-6 h-6" />
            </CloseButton>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default TeamMemberCard
