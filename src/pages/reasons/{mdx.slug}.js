import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx"


export default function Reason({ data }) {
  console.log({ data });
  return (
    <Layout>
      <title>{data.mdx.frontmatter.title}</title>

      <h1 className="text-9xl">
        I can't run because {data.mdx.frontmatter.title}
      </h1>
    
        <div className="mt-4">
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
