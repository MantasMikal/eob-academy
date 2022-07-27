import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import SanityImage from '@/components/Common/SanityImage'
import StandardMeta from '@/components/Meta/Standard'
import Zoomable from '@/components/Primitive/Zoomable'
import { getAllGalleryItemsQuery } from '@/services/sanity/queries'
import {
  getAllGalleryPosts,
  usePreviewSubscription
} from '@/services/sanity/sanity'
import { NextPage } from 'next'

const GalleryPage: NextPage = ({ data, preview }: any) => {
  const { data: galleryItems } = usePreviewSubscription(
    getAllGalleryItemsQuery,
    {
      initialData: data,
      enabled: preview
    }
  )
  return (
    <MainLayout className="space-y-12 lg:space-y-24">
      <StandardMeta canonical="/gallery" title="Gallery" />
      <PageHeader
        title="Gallery"
        subtitle="See Enemy Of Boredom in pictures from our past, present and future!"
      />
      <div className="grid gap-x-4 gap-y-4 grid-cols-1 md:gap-x-8 md:gap-y-8 md:grid-cols-2 lg:grid-cols-3 container-lg">
        {galleryItems.map((item: any) => (
          <div key={item._id} className="space-y-1">
            <Zoomable>
              <SanityImage className="rounded" src={item.image} alt="" />
            </Zoomable>
            {item.title && <p>{item.title}</p>}
          </div>
        ))}
      </div>
    </MainLayout>
  )
}

export default GalleryPage

interface StaticProps {
  preview: boolean
}

export const getStaticProps = async ({ preview = false }: StaticProps) => {
  const postsData = await getAllGalleryPosts(preview)
  return {
    props: {
      data: postsData || [],
      preview
    },
    revalidate: 60 * 1 // 30 minutes
  }
}
