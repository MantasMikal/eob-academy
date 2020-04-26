import BaseBlockContent from '@sanity/block-content-to-react'
import React from 'react'
import Type from 'Primitive/Type'
import Qoute from 'Primitive/Qoute'
import createGrid from './components/createGrid'
import createFigure from './components/createFigure'
import ButtonStandard from 'Primitive/ButtonStandard'
import SmartLink from 'Primitive/SmartLink'
import createSlideshow from './components/createSlideshow'

const serializers = {
  marks: {
    button: ({ mark, children }) => {
      return (
        children[0] && (
          <ButtonStandard override target={mark.blank && '_blank'} href={mark.href}>
            {children}
          </ButtonStandard>
        )
      )
    },
    link: ({ mark, children }) => {
      return (
        children[0] && (
          <SmartLink target={mark.blank && '_blank'} href={mark.href}>
            {children}
          </SmartLink>
        )
      )
    }
  },
  types: {
    block (props) {
      switch (props.node.style) {
        // case 'h1':
        //   return (
        //     <Type as='h1' size='titleLarge' padded>
        //       {props.children}
        //     </Type>
        //   )

        case 'h2':
          return (
            <Type as='h2' size='titleLarge' padded>
              {props.children}
            </Type>
          )

        case 'h3':
          return (
            <Type as='h3' size='title' padded>
              {props.children}
            </Type>
          )

        case 'h4':
          return (
            <Type as='h4' size='subtitle' padded>
              {props.children}
            </Type>
          )

        case 'title':
          return (
            <Type as='div' size='displayLarge' padded>
              {props.children}
            </Type>
          )
        case 'large':
          return (
            <Type as='h4' size='titleLarge' padded>
              {props.children}
            </Type>
          )
        case 'medium':
          return (
            <Type as='h4' size='titleMedium' padded>
              {props.children}
            </Type>
          )
        case 'small':
          return (
            <Type as='h4' size='title' padded>
              {props.children}
            </Type>
          )
        case 'blockquote':
          return <Qoute>{props.children}</Qoute>

        default:
          if (props.children.length > 1 || props.children[0] !== '') {
            return (
              <Type as='p' size='base'>
                {props.children}
              </Type>
            )
          } else return <br />
      }
    },
    figure (props) {
      return createFigure(props.node)
    },
    slideshow (props) {
      //  ("slideshow -> props", props)

      return createSlideshow(props.node)
    },
    grid (props) {
      return createGrid(props.node)
    }
  }
}

const BlockContent = ({ blocks, className }) => <BaseBlockContent className={className} blocks={blocks} serializers={serializers} />

export default BlockContent
