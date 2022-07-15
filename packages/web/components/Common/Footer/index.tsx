import cn from 'classnames'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
type IFooterProps = {
  className?: string
}

const navigation = {
  main: [
    {
      name: 'Contact',
      href: '/contact'
    },
    {
      name: 'Privacy / Terms and Conditions',
      href: '/privacy-terms-and-conditions'
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
      href: 'https://www.youtube.com/channel/UC1q2-7FQrgne_cKFemMXWYA/featured',
      icon: FaYoutube
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/EOBAcademy',
      icon: FaTwitter
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
      <div className="container-lg mx-auto py-8 md:py-12 px-4 space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-start"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-slate-700 font-semibold hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-between flex-wrap">
          <p className="order-2 my-2 md:order-1 text-center text-base text-gray-600">
            &copy; {new Date().getFullYear()} EOB Academy. All rights reserved.
          </p>
          <div className="order-1 my-2 md:order-2 flex items-center justify-center space-x-6">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-secondary transition-all"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
