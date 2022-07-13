import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import SanityImage from '@/components/Common/SanityImage'
import StandardMeta from '@/components/Meta/Standard'
import { getAllGalleryPosts } from '@/services/sanity/sanity'
import { NextPage } from 'next'

const GalleryPage: NextPage = ({ data: galleryItems }: any) => {
  return (
    <MainLayout className="space-y-12 lg:space-y-24">
      <StandardMeta canonical="/gallery" title="Gallery" />
      <PageHeader
        title="Gallery"
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
        diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
        aliquam erat volutpat. Ut wisi enim ad minim veniam."
      />
      <div className="grid gap-x-4 gap-y-4 grid-cols-1 md:gap-x-8 md:gap-y-8 md:grid-cols-2 lg:grid-cols-3 container-lg">
        {galleryItems.map((item: any) => (
          <div className="space-y-1" key={item._id}>
            <SanityImage className="rounded" src={item.image} alt="" />
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

export const getStaticProps = async ({ preview }: StaticProps) => {
  const postsData = await getAllGalleryPosts(preview)
  return {
    props: {
      data: postsData || []
    },
    revalidate: 60 * 30 // 30 minutes
  }
}
