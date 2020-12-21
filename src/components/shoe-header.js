import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ShoeHeader = ({ headingText, large = false }) => {
  const data = useStaticQuery(graphql`
    query ShoeQuery {
      file(relativePath: { eq: "shoe1.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="flex justify-center mt-6 mb-8 animate-wiggle">
        <Img fixed={data.file.childImageSharp.fixed} alt="A running shoe" />
      </div>
      <h1 className={`${large ? `text-8xl` : `text-7xl`} mb-2 text-center`}>
        {headingText}
      </h1>
    </>
  );
};

export default ShoeHeader;
