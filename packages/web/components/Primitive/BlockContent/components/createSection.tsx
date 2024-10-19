import Section from '@/components/Common/Section'

import BlockContent from '..'

export default function createSection(props: any) {
  const { title, content } = props
  return (
    <Section key={props._key} title={title} className="!px-0 w-full space-y-4">
      <BlockContent className="space-y-4 md:space-y-8" blocks={content} />
    </Section>
  )
}
