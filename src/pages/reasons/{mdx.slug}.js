import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../../components/seo";
import ShoeHeader from "../../components/shoe-header";

export default function Reason({ data }) {
  return (
    <Layout>
      <SEO
        title={data.mdx.frontmatter.title}
        description={`I can't run because ${data.mdx.frontmatter.title}`}
      />

      <ShoeHeader
        headingText={`I can't run because ${data.mdx.frontmatter.title}`}
      />

      <div className="mt-4">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>

      <div className="mt-5">
        <Link
          to={`/`}
          className="py-2 px-4 bg-orange-500 font-semibold rounded-lg shadow-md hover:bg-orange-700"
        >
          Go Home
        </Link>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      slug
      body
      frontmatter {
        title
        category
      }
    }
  }
`;
