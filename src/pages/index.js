import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

// markup
const IndexPage = ({ data }) => {
  console.log({ data });
  const [reasons, setReasons] = React.useState(
    data.allMdx.edges.map(({ node }) => node)
  );
  console.log({ reasons });
  const [selectedReason, setSelectedReason] = React.useState(reasons[0]);
  const [showList, setShowList] = React.useState(false);
  console.log({ selectedReason });
  return (
    <Layout>
      <title>Home Page</title>
      <h1 className="text-8xl mb-2 font-medium">I can't run because ...</h1>
      {/* <ul>
  {reasons.map(a=><li key={a.id}>{a.frontmatter.title}</li>)}
      </ul> */}

      <div>
        {/* <label id="listbox-label" className="block text-sm font-medium text-gray-700">
    Assigned to
  </label> */}
        <div className="mt-2 relative">
          <button
            onClick={() => setShowList(!showList)}
            type="button"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <span className="flex items-center">
              <span className="ml-3 block truncate">
                {selectedReason.frontmatter.title}
              </span>
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className={`${
              showList
                ? "block opacity-100 transition ease-in duration-100"
                : "hidden opacity-0"
            } absolute mt-1 w-full rounded-md bg-white shadow-lg`}
          >
            <ul
              tabIndex="-1"
              role="listbox"
              aria-labelledby="reasons list"
              className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              {reasons.map((a) => (
                <li
                  key={a.id}
                  onClick={() => {
                    setShowList(false);
                    setSelectedReason(a);
                  }}
                  role="option"
                  className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:text-white hover:bg-purple-700"
                >
                  <div className="flex items-center">
                    <span className="ml-3 block font-normal truncate">
                      {a.frontmatter.title}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <h2 className="mt-4 text-4xl">What about: </h2>
      <p className="mt-4">
        {selectedReason.excerpt}
      </p>
      <div className="mt-4">
        <Link
          to={`/reasons/${selectedReason.slug}/`}
          className="py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none"
        >
          See more
        </Link>
      </div>
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
    allMdx(sort: {order: DESC, fields: frontmatter___title}){
      edges {
        node {
          frontmatter {
            title
          }
          id
          slug
          excerpt(truncate: true)
        }
      }
    }
  }
`;
