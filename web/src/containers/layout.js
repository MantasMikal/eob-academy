import React, { useState, useEffect } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout/Layout'
import { DarkContextProvider } from '../components/Context/DarkContext'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      facebookUrl
      twitterUrl
    }
    companyInfo: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
      name
      address1
      address2
      zipCode
      city
      country
    }
    sponsors: allSanitySponsors {
      edges {
        node {
          sponsorList {
            _key
            name
            qouteHeading
            qouteBody
            url
            isFeatured
            image {
              asset {
                fluid(maxWidth: 600) {
                  ...GatsbySanityImageFluid
                }
              }
              alt
            }
          }
        }
      }
    }
  }
`

function LayoutContainer (props) {
  const [showNav, setShowNav] = useState(false)
  const wasDark =
    typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('isDark')) : false
  const [isDark, setDark] = useState(wasDark)
  const [isStripVisible, setStrip] = useState(false)

  function handleDark () {
    window.localStorage.setItem('isDark', !isDark)
    setDark(!isDark)
  }

  function hideStrip () {
    window.localStorage.setItem('isStripVisible', false)
    setStrip(false)
  }

  function handleShowNav () {
    setShowNav(true)
  }
  function handleHideNav () {
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
        const social = {
          facebook: data.site.facebookUrl || null,
          twitter: data.site.twitterUrl || null
        }
        return (
          <DarkContextProvider isDark={isDark}>
            <Layout
              {...props}
              showNav={showNav}
              companyInfo={data.companyInfo}
              siteTitle={data.site.title}
              social={social}
              onHideNav={handleHideNav}
              onShowNav={handleShowNav}
              onToggleDark={handleDark}
              isStripVisible={isStripVisible}
              hideStrip={hideStrip}
              sponsors={data.sponsors.edges[0].node.sponsorList}
            />
          </DarkContextProvider>
        )
      }}
    />
  )
}

export default LayoutContainer
