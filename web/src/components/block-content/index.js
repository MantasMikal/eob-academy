import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import Figure from './figure'
import Slideshow from './slideshow'
import Type from 'Primitive/Type'
import Qoute from 'Primitive/Qoute'

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return (
            <Type as="h2" size="titleMedium" padded>
              {props.children}
            </Type>
          )

        case 'h2':
          return (
            <Type as="h3" size="title" padded>
              {props.children}
            </Type>
          )

        case 'h3':
          return (
            <Type as="h4" size="title" padded>
              {props.children}
            </Type>
          )

        case 'h4':
          return (
            <Type as="h5" size="title" padded>
              {props.children}
            </Type>
          )

        case 'blockquote':
          return <Qoute>{props.children}</Qoute>

        default:
          return props.children[0] !== '' ? (
            <Type as="p" size="base">
              {props.children}
            </Type>
          ) : (
            <br />
          )
      }
    },
    figure(props) {
      return <Figure {...props.node} />
    },
    slideshow(props) {
      return <Slideshow {...props.node} />
    }
  }
}

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockContent
