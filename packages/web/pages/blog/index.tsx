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
      router.push(`/blog?category=${category}`, undefined, { shallow: true })
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
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
      diam nonummy nibh euismod tincidunt ut laoreet dolore magna 
      aliquam erat volutpat. Ut wisi enim ad minim veniam."
      />
      <section className="container-lg space-y-4">
        <div className="flex justify-between flex-wrap gap-4">
          <h2 className="text-2xl text-slate-700 font-semibold">All posts</h2>
          <div className="flex justify-end items-center gap-3">
            <div className="text-md font-semibold">Filter by tag</div>
            <div className="flex flex-wrap items-center">
              {categories.map((category: any) => (
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
                  key={category.id}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-x-4 gap-y-4 grid-cols-1 items-start md:gap-x-8 md:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((item: any) => (
              <BlogCard {...item} key={item._id} />
            ))
          ) : (
            <div className="text-md text-slate-700 text-left">
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
    revalidate: 60 * 30 // 30 minutes
  }
}
