import cn from 'classnames'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
type IFooterProps = {
  className?: string
}

const navigation = {
  main: [
    {
      name: 'Careers',
      href: '/careers'
    },
    {
      name: 'Contact',
      href: '/contact'
    },
    {
      name: 'Privacy / Terms & Conditons',
      href: '/privacy-terms-and-conditions',
      newTab: true
    },
    {
      name: 'Policies',
      href: 'our-policies',
      newTab: true
    }
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/eobacademy/',
      icon: FaInstagram
    },
    {
      name: 'Youtube',
      href: 'https://www.youtube.com/channel/UCQDSMwMzOW0wrW7x9YwInPA',
      icon: FaYoutube
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/EOBAcademy',
      icon: FaXTwitter
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/EnemyofBoredom/',
      icon: FaFacebook
    }
  ]
}

const Footer = ({ className }: IFooterProps) => {
  return (
    <footer className={cn('bg-slate-50', className)}>
      <div className="px-4 py-8 mx-auto space-y-8 overflow-hidden container-lg md:py-12 sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-start -mx-5 -my-2"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base font-semibold text-slate-700 hover:text-gray-900"
                target={item.newTab ? '_blank' : '_self'}
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex flex-wrap justify-between">
          <p className="order-2 my-2 text-base text-center text-gray-600 md:order-1">
            &copy; {new Date().getFullYear()} EOB Academy. All rights reserved.
          </p>
          <div className="flex items-center justify-center order-1 my-2 space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 transition-all hover:text-secondary"

              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
