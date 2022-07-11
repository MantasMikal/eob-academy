import React from 'react'
import SectionTitle from '../SectionTitle'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import BlogCard, { IBlogCardProps } from '../BlogCard'

export type IBlogCarouselProps = {
  title?: string
  items: IBlogCardProps[]
}

const BlogCarousel: React.FC<IBlogCarouselProps> = ({ title, items }) => {
  const [refCallback] = useKeenSlider({
    slides: {
      perView: 1.2,
      spacing: 16
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: {
          perView: 2.2,
          spacing: 16
        }
      },
      '(min-width: 768px)': {
        slides: {
          perView: 3.2,
          spacing: 16
        }
      }
    }
  })

  return (
    <div className="space-y-8 md:space-y-16">
      <SectionTitle title={title || 'Blog'} href="/blog" label="More" />
      <div className="overflow-hidden  py-2">
        <div ref={refCallback} className="keen-slider !overflow-visible">
          {items.map((item) => (
            <div
              className="keen-slider__slide !overflow-visible"
              key={item.href}
            >
              <BlogCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogCarousel
