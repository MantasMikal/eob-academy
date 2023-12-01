import BaseBlockContent from '@sanity/block-content-to-react'
import classNames from 'classnames'
import SmartLink from '@/components/Primitive/SmartLink'

import createFigure from './components/createFigure'
import createGrid from './components/createGrid'
import createMediaComponent from './components/createMedia'
import Button from '@/components/Common/Button'
import { PDFGrid } from '@/components/Common/PDFGrid'

// TODO: MIGRATE TO https://github.com/portabletext/react-portabletext/blob/main/MIGRATING.md

/**
 * Component for transforming sanity editor data into components
 */
const serializers = () => ({
  marks: {
    button: ({ mark, children }: any) => {
      return (
        children[0] && (
          <Button target={mark.blank && '_blank'} href={mark.href}>
            {children}
          </Button>
        )
      )
    },
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
          return (
            <h2 className="text-2xl md:text-3xl text-secondary">
              {props.children}
            </h2>
          )
        case 'h3':
          return (
            <h3 className="text-xl md:text-2xl text-secondary">
              {props.children}
            </h3>
          )

        case 'h4':
          return <h4 className="text-xl text-secondary">{props.children}</h4>

        case 'baseLarge':
          return <p className="text-xl md:text-3xl">{props.children}</p>

        case 'baseMedium':
          return <p className="text-md md:text-xl">{props.children}</p>

        case 'small':
          return <p className="text-sm">{props.children}</p>

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>

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
    },
    pdfGrid(props: any) {
      return <PDFGrid items={props.node.pdfs} />
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
