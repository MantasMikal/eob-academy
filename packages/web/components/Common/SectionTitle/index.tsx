import Button from '../Button'

export type ISectionTitleProps = {
  title: string
  label?: string
  href?: string
}

function SectionTitle({ title, label, href }: ISectionTitleProps) {
  return (
    <div className="">
      <span className="relative block w-full h-[2px] bg-secondary" />
      <div className="flex flex-row flex-wrap gap-2 items-center justify-between">
        <h2 className="min-w-[19ch] inline-block py-3 px-4 md:px-6 text-xl md:text-2xl font-bold rounded-b-lg bg-secondary text-white max-w-[50%]">
          {title}
        </h2>
        {label && href && (
          <Button
            className="rounded-md flex-shrink-0"
            size="small"
            rounded
            variant="outline"
            href={href}
          >
            {label}
          </Button>
        )}
      </div>
    </div>
  )
}

export default SectionTitle
