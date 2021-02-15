import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes } from "../lib/helpers";

import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import CoursePromo from "../components/Section/CoursePromo";
import ContactHero from "../components/Common/ContactHero";
import Seperator from "../components/Primitive/Seprator";
import SponsorCarousel from "../components/Common/SponsorCarousel";

export const query = graphql`
  query BracknellPageQuery {
    page: sanityCoursePromoPage(
      _id: { regex: "/(drafts.|)bracknellPage/" }
    ) {
      title
      subtitle
      _rawBody(resolveReferences: { maxDepth: 5 })
      subtitle
      description
      address
      email
      phone
      pdf {
        asset {
          url
        }
      }
      heroImage {
        asset {
          fluid(maxWidth: 2000) {
            ...GatsbySanityImageFluid
          }
        }
      }
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
            image {
              asset {
                fluid(maxWidth: 600) {
                  ...GatsbySanityImageFluid
                }
              }
              alt
            }
          }
          videos {
            videoType
            videoId
            caption
          }
        }
      }
    }
  }
`;

const Bracknell = (props) => {
  const { data, errors } = props;
  console.log("🚀 ~ file: alternative-provision-bracknell-berkshire.js ~ line 69 ~ Bracknell ~ data", data)

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  if (!data.page) {
    throw new Error("Could not page data");
  }

  const page = data.page;

  const sponsors = (data || {}).sponsors
    ? mapEdgesToNodes(data.sponsors)[0]
    : [];

  const contactInfo = {
    description: data.page.description,
    pdf: data.page.pdf.asset.url,
    phone: data.page.phone,
    email: data.page.email,
    address: data.page.address
  }
  console.log("🚀 ~ file: alternative-provision-bracknell-berkshire.js ~ line 96 ~ Bracknell ~ contactInfo", contactInfo)

  return (
    <Layout>
      <SEO
        title={page.title}
        description={page.subtitle}
        slug="/alternative-provision-page-berkshire"
      />
      <ContactHero
        image={page.heroImage}
        title={page.title}
        subtitle={page.subtitle}
        contactInfo={contactInfo}
      />
      <CoursePromo
        blockContent={page._rawBody && page._rawBody}
        sponsors={sponsors.sponsorList}
      />
    </Layout>
  );
};

export default Bracknell;
