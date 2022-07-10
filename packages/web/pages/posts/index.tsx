import SmartLink from '@/components/Primitive/SmartLink'
import { getAllPosts } from '@/services/sanity/sanity'
import { NextPage } from 'next'

const PostsPage: NextPage = ({ data: posts }: any) => {
  return (
    <div>
      {posts?.map((post: any) => (
        <SmartLink key={post._id} to={`/posts/${post.slug.current}`}>
          {post.title}
        </SmartLink>
      ))}
    </div>
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
