import cn from 'classnames'

import SmartLink from '@/components/Primitive/SmartLink'

import SanityImage from '../SanityImage'
import SectionTitle from '../SectionTitle'
import BlockContent from '@/components/Primitive/BlockContent'

type IndustryRolesProps = {
  industryRoles: {
    title: string
    url: string
    description: any[]
    roles: {
      title: string
      description: string
      url: string
      icon: string
    }[]
  }
}

export function IndustryRoles(props: IndustryRolesProps) {
  const { industryRoles } = props
  return (
    <section className="space-y-8 md:space-y-16">
      <SectionTitle
        title={industryRoles?.title}
        label="Industry Brakedown"
        href={industryRoles?.url}
      />

      <BlockContent
        className="max-w-3xl prose"
        blocks={industryRoles?.description}
      />
      <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 md:grid-cols-3">
        {industryRoles?.roles?.map((item: any, i: number) => (
          <SmartLink
            to={item.url}
            className={cn(
              'flex items-start p-3 py-5 pl-6 space-x-4 border rounded group hover:cursor-pointer',
              !item.description && 'items-center'
            )}
            key={`IndustryRole:${i}`}
          >
            <SanityImage
              src={item.icon}
              alt={item.title}
              width={40}
              height={40}
            />
            <div className="flex flex-col space-y-0">
              <h3 className="text-base font-semibold md:text-lg group-hover:text-secondary">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm md:text-base text-slate-800 group-hover:text-secondary">
                  {item.description}
                </p>
              )}
            </div>
          </SmartLink>
        ))}
      </div>
    </section>
  )
}
