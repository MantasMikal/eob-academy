import React from 'react'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Container size="wide" center gutter spacious as="section">
      <Type as="h2" size="displayLarge">
        Not found
      </Type>
      <Type as="p" size="baseLarge">
        You just hit a route that doesn&#39;t exist... the sadness.
      </Type>
    </Container>
  </>
)

export default NotFoundPage
