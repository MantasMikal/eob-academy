import React from 'react'
import cn from 'classnames'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import BlockContent from '@/components/Primitive/BlockContent'

const CourseOverview = ({ items, className }: any) => {
  return (
    <dl className={cn('space-y-6 divide-y-2 divide-slate-200', className)}>
      {items.map((item: any, i: number) => (
        <Disclosure as="div" key={`${item.question}:${i}`} className="pt-6">
          {({ open }) => (
            <>
              <dt className="text-lg">
                <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                  <span className="font-medium text-2xl md:text-3xl text-secondary">
                    {item.title}
                  </span>
                  <span className="ml-6 flex text-secondary items-center">
                    <ChevronDownIcon
                      className={cn(
                        open ? '-rotate-180' : 'rotate-0',
                        'h-6 w-6 transform'
                      )}
                      aria-hidden={open ? 'false' : 'true'}
                    />
                  </span>
                </Disclosure.Button>
              </dt>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel as="dd" className="mt-3">
                  <dd className="text-base max-w-screen-md">
                    <BlockContent blocks={item.description} />
                  </dd>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  )
}

export default CourseOverview
