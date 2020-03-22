import React from 'react'
import BlogPostPreview from 'Common/BlogPostPreview'
import LazyLoader from 'lib/lazy-loader/lazyLoader'
import MasonryLayout from 'lib/masonry/masonry-layout'
import { array, bool } from 'prop-types'

export default class BlogPreviewLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: 10,
      amountToLoad: 10,
      hasMore: true
    }
  }

  loadMore = () => {
    const postsLeft = this.props.nodes.length - this.state.loaded // Posts left
    const totalAmount = this.state.loaded + this.state.amountToLoad // Total amount of posts to load

    if (postsLeft > 0) {
      this.setState({
        loaded: totalAmount,
        hasMore: true
      })
    } else {
      this.setState({
        hasMore: false
      })
    }
  }

  render() {
    const posts = []
    let nodes = this.props.nodes

    for (let i = 0; i < this.state.loaded; i++) {
      nodes[i] &&
        posts.push(
          <BlogPostPreview
            mainImage={nodes[i].mainImage}
            slug={nodes[i].slug}
            key={nodes[i].id}
            surround={this.props.surround}
            publishedAt={nodes[i].publishedAt}
            excerpt={nodes[i]._rawExcerpt}
          />
        )
    }
    return (
      <LazyLoader loadMore={this.loadMore} hasMore={this.state.hasMore}>
        <MasonryLayout gap={20} colCount={3}>
          {posts}
        </MasonryLayout>
      </LazyLoader>
    )
  }
}

BlogPreviewLayout.propTypes = {
  nodes: array,
  surround: bool
}
