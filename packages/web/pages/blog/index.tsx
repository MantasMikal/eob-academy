import BlogCard from '@/components/Common/BlogCard'
import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import { getAllPosts } from '@/services/sanity/sanity'
import { NextPage } from 'next'

const PostsPage: NextPage = ({ data: posts }: any) => {
  return (
    <MainLayout className="space-y-12 lg:space-y-24">
      <PageHeader
        title="Blog"
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
      diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
      aliquam erat volutpat. Ut wisi enim ad minim veniam."
      />
      <div className="grid gap-x-4 gap-y-4 grid-cols-1 md:gap-x-8 md:gap-y-8 md:grid-cols-2 lg:grid-cols-3 container-lg">
        {posts.map((item: any) => (
          <BlogCard {...item} key={item._id} />
        ))}
      </div>
    </MainLayout>
  )
}

export default PostsPage

interface StaticProps {
  preview: boolean
}

export const getStaticProps = async ({ preview }: StaticProps) => {
  const postsData = await getAllPosts(preview)
  return {
    props: {
      data: postsData || []
    },
    revalidate: 60 * 30 // 30 minutes
  }
}
