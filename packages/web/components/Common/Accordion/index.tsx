import React from 'react'
import classNames from 'classnames'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const Accordion = ({ items }: any) => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto divide-y-2 divide-gray-200">
          <dl className="mt-6 space-y-6 divide-y divide-primary">
            {items.map((item: any, i: number) => (
              <Disclosure as="div" key={item.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-3xl text-secondary">{item.title}</span>
                        <span className="ml-6 h-7 flex text-secondary items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 max-w-2xl">
                      <p className="text-base my-11">{item.description}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Accordion