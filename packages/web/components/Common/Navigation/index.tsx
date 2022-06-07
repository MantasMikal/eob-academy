// import cn from 'classnames'
import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { Fragment } from 'react'

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
    label: 'Contact',
    href: '/contact'
  },
  {
    label: 'Apply',
    href: '/apply'
  }
]

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-primary fixed z-10 w-full">
      {({ open }) => (
        <>
          <div className="container-lg">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-full">
                  <div className="relative w-12">
                    <Image
                      src={logo}
                      priority
                      // layout="fill"
                      alt="EOB Academy"
                      objectFit="contain"
                      width={120}
                      height={120}
                      layout="responsive"
                    />
                  </div>
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="hidden sm:block sm:ml-6"></div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    {links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="bg-primary-dark hover:bg-primary-light text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md bg-primary-dark text-white hover:text-white hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                {links.map((link) => (
                  <Disclosure.Button
                    as="a"
                    href={link.href}
                    key={link.href}
                    className="bg-primary-dark text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {link.label}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
