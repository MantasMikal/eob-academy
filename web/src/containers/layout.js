import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout'
import { DarkContextProvider } from '../components/Context/DarkContext'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
    companyInfo: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
      name
      address1
      address2
      zipCode
      city
      country
    }
  }
`

function LayoutContainer(props) {
  const [showNav, setShowNav] = useState(false)
  const [isDark, setDark] = useState(true)

  function handleDark() {
    setDark(!isDark)
  }

  function handleShowNav() {
    setShowNav(true)
  }
  function handleHideNav() {
    setShowNav(false)
  }
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          )
        }
        if (!data.companyInfo) {
          throw new Error(
            'Missing "Company info". Open the studio at http://localhost:3333 and add "Company info" data'
          )
        }
        return (
          <DarkContextProvider isDark={isDark}>
            <Layout
              {...props}
              showNav={showNav}
              companyInfo={data.companyInfo}
              siteTitle={data.site.title}
              onHideNav={handleHideNav}
              onShowNav={handleShowNav}
              onToggleDark={handleDark}
            />
          </DarkContextProvider>
        )
      }}
    />
  )
}

export default LayoutContainer
