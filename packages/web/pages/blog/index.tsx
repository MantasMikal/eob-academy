import BlogCard from '@/components/Common/BlogCard'
import MainLayout from '@/components/Common/MainLayout'
import PageHeader from '@/components/Common/PageHeader'
import { getAllPostCategories, getAllPosts } from '@/services/sanity/sanity'
import cn from 'classnames'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const PostsPage: NextPage = ({ data: posts, categories }: any) => {
  const router = useRouter()
  const { category: selectedCat } = router.query

  const handleCategoryChange = (category: string) => {
    if (category === selectedCat) {
      router.push(`/blog`, undefined, { shallow: true })
    } else {
      router.push(
        {
          pathname: '/blog',
          query: { category }
        },
        undefined,
        { shallow: true }
      )
    }
  }

  const filteredPosts = selectedCat
    ? posts.filter((post: any) =>
        post?.category?.find((c: any) => c.title === selectedCat)
      )
    : posts

  return (
    <MainLayout className="space-y-6 lg:space-y-12">
      <PageHeader
        title="Blog"
        subtitle="Find out about the latest Enemy Of Boredom happenings, hear from our students, read our finding from industry and facts from our partners."
      />
      <section className="space-y-4 container-lg">
        <div className="flex flex-wrap justify-between gap-4">
          <h2 className="text-2xl font-semibold text-slate-700">All posts</h2>
          <div className="flex items-center justify-end gap-3">
            <div className="font-semibold text-md">Filter by tag</div>
            <div className="flex flex-wrap items-center">
              {categories.map((category: any, i: number) => (
                <button
                  onClick={() => handleCategoryChange(category.title)}
                  style={{
                    borderColor: category.color.hex,
                    backgroundColor:
                      category.title === selectedCat
                        ? category.color.hex
                        : 'transparent'
                  }}
                  className={cn(
                    'tag',
                    category.title === selectedCat ? '!text-white' : ''
                  )}
                  key={`${category.id}:${i}`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid items-start grid-cols-1 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((item: any) => (
              <BlogCard {...item} key={item._id} />
            ))
          ) : (
            <div className="text-left text-md text-slate-700">
              No posts found
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  )
}

export default PostsPage

interface StaticProps {
  preview: boolean
}

export const getStaticProps = async ({ preview }: StaticProps) => {
  const postsData = await getAllPosts(preview)
  const categories = await getAllPostCategories(preview)
  return {
    props: {
      data: postsData || [],
      categories: categories || []
    },
    revalidate: 60 * 1 // 30 minutes
  }
}
