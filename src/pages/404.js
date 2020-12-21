import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ShoeHeader from "../components/shoe-header";

export default function NotFound() {
  return (
    <Layout>
      <SEO title="404" />

      <ShoeHeader headingText="404 Not Found" />

      <div className="mt-4">
        <p className="pb-2">Can't find the page you looking for.</p>
      </div>

      <div className="mt-5">
        <Link
          to={`/`}
          className="py-2 px-4 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 hover:text-white"
        >
          Go Home
        </Link>
      </div>
    </Layout>
  );
}
