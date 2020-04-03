import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import Slideshow from './slideshow'
import Type from 'Primitive/Type'
import Qoute from 'Primitive/Qoute'
import createGrid from './components/createGrid'
import createFigure from './components/createFigure'
import ButtonStandard from 'Primitive/ButtonStandard'
import SmartLink from 'Primitive/SmartLink'

const serializers = {
  marks: {
    button: ({ mark, children }) => {
      return children[0] && <ButtonStandard target={mark.blank && '_blank'} href={mark.href}>{children}</ButtonStandard>
    },
    link: ({ mark, children }) => {
      return children[0] && <SmartLink target={mark.blank && '_blank'} href={mark.href}>{children}</SmartLink>
    }
  },
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return (
            <Type as="h1" size="titleMedium" padded>
              {props.children}
            </Type>
          )

        case 'h2':
          return (
            <Type as="h2" size="title" padded>
              {props.children}
            </Type>
          )

        case 'h3':
          return (
            <Type as="h3" size="title" padded>
              {props.children}
            </Type>
          )

        case 'h4':
          return (
            <Type as="h4" size="title" padded>
              {props.children}
            </Type>
          )

        case 'blockquote':
          return <Qoute>{props.children}</Qoute>

        default:
          if (props.children.length > 1 || props.children[0] !== '')
            return (
              <Type as="p" size="base">
                {props.children}
              </Type>
            )
          else return <br />
      }
    },
    figure(props) {
      return createFigure(props.node)
    },
    slideshow(props) {
      return <Slideshow {...props.node} />
    },
    grid(props) {
      return createGrid(props.node)
    }
  }
}

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockContent
