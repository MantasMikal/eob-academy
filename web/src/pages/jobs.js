import React from "react";
import { mapEdgesToNodes } from "lib/helpers";

import { graphql } from "gatsby";
import BlockSection from "Section/BlockSection";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query JobsPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)jobs/" }) {
      id
      title
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const JobsPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data && data.page;

  if (!page) {
    throw new Error(
      'Missing "Jobs" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={page.title} slug="/jobs" />
      <BlockSection title={page.title} blockContent={page._rawBody || []} />
    </Layout>
  );
};

export default JobsPage;
