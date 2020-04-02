import React, { useState, useEffect } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout/Layout'
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
  const wasDark =
    typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('isDark')) : false
  const [isDark, setDark] = useState(wasDark)
  const [isStripVisible, setStrip] = useState(false)
  console.log('ssa')

  useEffect(() => {
    // Dpuble check if dark
    const wasDark = JSON.parse(window.localStorage.getItem('isDark'))
    console.log("LayoutContainer -> wasDark", wasDark)
    console.log("LayoutContainer -> isDark", isDark)
    if(isDark !== wasDark) setDark(wasDark)
  })

  // useEffect(() => {
  //   console.log('LayoutContainer -> wasVisible', wasVisible)
  //   if (wasVisible === null) {
  //     setStrip(true)
  //   } else setStrip(wasVisible)
  // }, [])

  function handleDark() {
    window.localStorage.setItem('isDark', !isDark)
    setDark(!isDark)
  }

  function hideStrip() {
    window.localStorage.setItem('isStripVisible', false)
    setStrip(false)
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
              isStripVisible={isStripVisible}
              hideStrip={hideStrip}
            />
          </DarkContextProvider>
        )
      }}
    />
  )
}

export default LayoutContainer
