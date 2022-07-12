import BaseBlockContent from '@sanity/block-content-to-react'
import classNames from 'classnames'
import SmartLink from '@/components/Primitive/SmartLink'

import createFigure from './components/createFigure'
import createGrid from './components/createGrid'
import createMediaComponent from './components/createMedia'

// TODO: MIGRATE TO https://github.com/portabletext/react-portabletext/blob/main/MIGRATING.md

/**
 * Component for transforming sanity editor data into components
 */
const serializers = () => ({
  marks: {
    link: ({ mark, children }: any) => {
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
    block(props: any) {
      switch (props.node.style) {
        case 'h2':
          return <h2 className="text-secondary">{props.children}</h2>
        case 'h3':
          return <h3 className="text-secondary">{props.children}</h3>

        case 'h4':
          return <h4 className="text-secondary">{props.children}</h4>

        case 'blockquote':
          return <p>{props.children}</p> // TODO

        default:
          return <p>{props.children}</p>
      }
    },
    figure(props: any) {
      return createFigure(props.node)
    },
    grid(props: any) {
      return createGrid(props.node)
    },
    video(props: any) {
      return createMediaComponent(props.node)
    }
  }
})

const BlockContent = ({ blocks, className }: any) => (
  <BaseBlockContent
    className={classNames(className)}
    blocks={blocks}
    serializers={serializers()}
  />
)

export default BlockContent
