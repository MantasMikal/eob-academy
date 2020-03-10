import React from 'react'
import BlogPostPreview from 'Common/BlogPostPreview/BlogPostPreview'
import Carousel from 'Common/Carousel'
import styles from './BlogPostCarousel.module.scss'

function BlogPostCarousel(props) {
  return (
    <div className={styles.Root}>
      {/* {props.title && (
        <h2 className={styles.headline}>
          {props.browseMoreHref ? (
            <Link to={props.browseMoreHref}>{props.title}</Link>
          ) : (
            props.title
          )}
        </h2>
      )} */}
      <Carousel>
        {props.nodes && props.nodes.map(node => <BlogPostPreview key={node.id} {...node} />)}
      </Carousel>
      {/* {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )} */}
    </div>
  )
}

BlogPostCarousel.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostCarousel
