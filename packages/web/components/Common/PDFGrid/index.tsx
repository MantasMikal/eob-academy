import { FaFile } from 'react-icons/fa'
import { getFileAsset } from '@sanity/asset-utils'
import { config } from '@/services/sanity/sanity'

type PDFGridProps = {
  items: {
    title: string
    pdfAsset: {
      asset: any
    }
  }[]
}

const getAssetUrl = (file: any): string => {
  const { url } = getFileAsset(file, config)
  return url
}

export const PDFGrid = ({ items }: PDFGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {items.map((item) => (
        <a
          className="flex flex-col items-center gap-4 justify-center bg-slate-100 border-2 rounded-md p-4 no-underline hover:bg-slate-200 focus-within:bg-slate-200 active:bg-slate-300"
          key={item.title}
          href={getAssetUrl(item.pdfAsset)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFile className="text-4xl text-primary" />
          <span className="text-xl">{item.title}</span>
        </a>
      ))}
    </div>
  )
}
