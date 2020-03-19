import React from 'react'

import styles from './masonry-layout.module.css'
import PropTypes from 'prop-types'

function getColCount (width) {
  if (width > 750) {
    if (width > 1000) {
      return 3
    } else return 2
  } else return 1
}

export default class MasonryLayout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      colCount: this.props.colCount
    }
  }

  handleResize = () => this.setState({
    colCount: getColCount(window.innerWidth)
  });

  shouldComponentUpdate(nextProps, nextState) {
    if(this.state.colCount === nextState.colCount && this.props.children === nextProps.children) {
      return false
    } else return true
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
  const columnWrapper = {}
  const result = []
  // create columns
  for (let i = 0; i < this.state.colCount; i++) {
    columnWrapper[`column${i}`] = []
  }

  // divide children into columns
  for (let i = 0; i < this.props.children.length; i++) {
    const columnIndex = i % this.state.colCount
    columnWrapper[`column${columnIndex}`].push(
      <div style={{ marginBottom: `${this.props.gap}px` }} key={`column-${columnIndex}-${i}`}>
        {this.props.children[i]}
      </div>
    )
  }
  // wrap children in each column with a div
  for (let i = 0; i < this.state.colCount; i++) {
    result.push(
      <div
        style={{
          marginLeft: `${i > 0 ? '10px' : '0px'}`,
          flex: 1
        }}
        key={`masonry-column-${i}`}>
        {columnWrapper[`column${i}`]}
      </div>
    )
  }
    return (
      <div className={styles.masonryLayout}>
        {result}
      </div>
    )
  }
}

MasonryLayout.propTypes = {
  gap: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element)
}

MasonryLayout.defaultProps = {
  gap: 20,
  colCount: 3
}
