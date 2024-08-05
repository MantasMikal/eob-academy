// import cn from 'classnames'
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition
} from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

import SmartLink from '@/components/Primitive/SmartLink'

// import { Transition } from '@headlessui/react'

const logo = require('@/assets/img/logo.png')

const links = [
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Courses',
    href: '/courses'
  },
  {
    label: 'How we operate',
    href: '/how-we-operate'
  },
  {
    label: 'Voices',
    href: '/voices'
  },
  {
    label: 'Blog',
    href: '/blog'
  },
    // {
  //   label: 'Team',
  //   href: '/team'
  // },
  {
    label: 'Apply',
    href: '/apply'
  },

  {
    label: 'Contact',
    href: '/contact'
  },
  // {
  //   label: 'Gallery',
  //   href: '/gallery'
  // },
  // {
  //   label: 'Careers',
  //   href: '/careers'
  // }
]

export default function Navigation() {
  const { asPath } = useRouter()
  const path = asPath.replace('/', '')

  return (
    <Popover as="nav" className="fixed top-0 z-50 w-full bg-white shadow ">
      <>
        <div className="container-lg">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-full">
                <SmartLink
                  to="/"
                  className="relative block w-12 transition-transform hover:scale-105 hover:-rotate-3 active:scale-98"
                >
                  <Image
                    src={logo}
                    priority
                    alt="EOB Academy"
                    objectFit="contain"
                    width={120}
                    height={120}
                    layout="responsive"
                  />
                </SmartLink>
              </div>
              <div className="md:block md:ml-6"></div>
            </div>
            <div className="hidden md:ml-6 md:block">
              <div className="flex items-center">
                <div className="flex space-x-4">
                  {links.map((link) => (
                    <SmartLink
                      key={link.label}
                      href={link.href}
                      className={classNames(
                        'group bg-primary-white hover:bg-gray-100 text-slate-700 px-3 py-2 rounded-md text-sm font-medium',
                        link.label.toLowerCase() === path && 'bg-gray-100'
                      )}
                    >
                      <p className="transition-transform group-hover:scale-105 group-hover:-rotate-3 group-active:scale-98">
                        {link.label}
                      </p>
                    </SmartLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              {/* Mobile menu button */}
              <PopoverButton className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
        </div>

        <Transition
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform"
          >
            <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <SmartLink to="/" className="relative w-12">
                    <Image
                      src={logo}
                      priority
                      alt="EOB Academy"
                      objectFit="contain"
                      width={120}
                      height={120}
                      layout="responsive"
                    />
                  </SmartLink>
                  <div className="-mr-2">
                    <PopoverButton className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {links.map((link) => (
                      <SmartLink
                        href={link.href}
                        key={link.href}
                        className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-slate-700">
                          {link.label}
                        </span>
                      </SmartLink>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </Transition>
      </>
    </Popover>
  )
}
