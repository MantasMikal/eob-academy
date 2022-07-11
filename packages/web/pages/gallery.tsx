import SanityImage from '@/components/Common/SanityImage'
import { getAllGalleryPosts } from '@/services/sanity/sanity'
import { NextPage } from 'next'

const GalleryPage: NextPage = ({ data: galleryItems }: any) => {
  return (
    <div>
      {JSON.stringify(galleryItems)}
      {galleryItems.map((item: any) => (
        <SanityImage key={item._id} image={item.image} alt="" />
      ))}
    </div>
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
