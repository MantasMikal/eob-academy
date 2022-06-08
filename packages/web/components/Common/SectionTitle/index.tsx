import Button from '../Button'

export type ISectionTitleProps = {
  title: string
  label: string
  href: string
}

function SectionTitle({ title, label, href }: ISectionTitleProps) {
  return (
    <div className="">
      <span className="relative block w-full h-[2px] bg-secondary" />
      <div className="flex items-center justify-between">
        <h2 className="inline-block py-3 text-xl md:text-2xl font-bold px-2 rounded-b-lg bg-secondary text-white flex-1 max-w-[50%]">
          {title}
        </h2>
        <Button
          className="rounded-md"
          size="small"
          rounded
          variant="outline"
          href={href}
        >
          {label}
        </Button>
      </div>
    </div>
  )
}

export default SectionTitle
