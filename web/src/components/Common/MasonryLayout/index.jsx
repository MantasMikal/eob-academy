import React from 'react'
import { array, number } from 'prop-types'
import LazyLoader from 'lib/lazy-loader/lazyLoader'
import MasonryLayout from 'lib/masonry/masonry-layout'

export default class Masonry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loaded: 10,
      amountToLoad: 10,
      hasMore: true
    }
  }

  loadMore = () => {
    const itemsLeft = this.props.items.length - this.state.loaded // Items left
    const totalAmount = this.state.loaded + this.state.amountToLoad // Total amount of items to load

    if (itemsLeft > 0) {
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
    const displayedItems = []
    let items = this.props.items

    for (let i = 0; i < this.state.loaded; i++) {
      items[i] && displayedItems.push(items[i])
    }
    return (
      <LazyLoader loadMore={this.loadMore} hasMore={this.state.hasMore}>
        <MasonryLayout gap={this.props.gap} colCount={3}>
          {displayedItems}
        </MasonryLayout>
      </LazyLoader>
    )
  }
}

Masonry.propTypes = {
  items: array,
  gap: number
}
