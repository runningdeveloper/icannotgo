import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/seo";
import ShoeHeader from "../components/shoe-header";
import Listbox from "../components/listbox";

const IndexPage = ({ data }) => {
  const reasons = data.allMdx.edges.map(({ node }) => node);
  const [selectedReason, setSelectedReason] = React.useState(null);
  const [showList, setShowList] = React.useState(false);
  // const editFieldRef = React.useRef(null);
  // React.useEffect(() => {
  //   if (showList) {
  //     console.log({...editFieldRef.current.children})
  //     editFieldRef.current.children[0].focus();
  //   }
  // }, [showList]);

  return (
    <Layout>
      <SEO />

      <ShoeHeader headingText="I can't run because " large={true} />
      <div className="flex justify-center">
        <Listbox
          options={reasons}
          onSelected={(option) => setSelectedReason(option)}
        />
      </div>

      {!selectedReason && (
        <>
          <div className="mt-8 text-center">
            <h2 className="mt-4 text-4xl">We have excuses!</h2>
            <p className="mt-4 text-2xl">
              Find some alternatives and get out there
            </p>
          </div>
        </>
      )}

      {selectedReason && (
        <>
          <div className="mt-4">
            <MDXRenderer>{selectedReason.body}</MDXRenderer>
          </div>
          <p className="mt-4 text-sm">
            Want to send link this reason to a friend, go to the page with a
            single reason.
          </p>
          <div className="mt-5">
            <Link
              to={`/reasons/${selectedReason.slug}/`}
              className="py-2 px-4 bg-orange-500 font-semibold rounded-lg shadow-md hover:bg-orange-700 hover:text-white"
            >
              Go to page
            </Link>
          </div>
        </>
      )}
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
        title
      }
    }
    file(relativePath: { eq: "shoe1.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMdx(sort: { order: DESC, fields: frontmatter___title }) {
      edges {
        node {
          frontmatter {
            title
          }
          id
          slug
          excerpt(truncate: true)
          body
        }
      }
    }
  }
`;
