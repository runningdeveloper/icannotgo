import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx"


export default function Reason({ data }) {
  console.log({ data });
  return (
    <Layout>
      <title>{data.mdx.frontmatter.title}</title>

      <h1 className="text-8xl">
        I can't run because {data.mdx.frontmatter.title}
      </h1>
    
        <div className="mt-4">
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
      <div className="mt-5">
        
        <Link
          to={`/`}
          className="py-2 px-4 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none"
        >
          Back Home
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
