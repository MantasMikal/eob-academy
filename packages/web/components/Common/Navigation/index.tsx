// import cn from 'classnames'
import SmartLink from '@/components/Primitive/SmartLink'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Fragment } from 'react'
import classNames from 'classnames'

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
    label: 'Gallery',
    href: '/gallery'
  },
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'Testimonials',
    href: '/testimonials'
  },
  {
    label: 'Contact',
    href: '/contact'
  },
  {
    label: 'Apply',
    href: '/apply'
  }
]

export default function Navigation() {
  const { asPath } = useRouter()
  const path = asPath.replace('/', '')

  return (
    <Popover as="nav" className=" bg-white fixed z-50 w-full top-0 shadow">
      <>
        <div className="container-lg">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-full">
                <SmartLink
                  to="/"
                  className="block relative w-12 hover:scale-105 hover:-rotate-3 active:scale-98 transition-transform"
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
                      <p className="group-hover:scale-105 group-hover:-rotate-3 group-active:scale-98 transition-transform">
                        {link.label}
                      </p>
                    </SmartLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
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
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {links.map((link) => (
                      <SmartLink
                        href={link.href}
                        key={link.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
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
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  )
}