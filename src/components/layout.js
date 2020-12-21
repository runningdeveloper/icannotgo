import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container mx-auto px-4 max-w-screen-md font-display flex-1">
        {children}
      </main>
      <footer className="container mx-auto px-4 max-w-screen-md font-display mt-5 mb-5 flex">
        <Link to={`/about/`} className="text-orange-700 font-semibold mr-5">
          About
        </Link>

        <span className="flex-grow">
          © {new Date().getFullYear()} <span>I can't run because</span>
        </span>
        <a
          href="https://www.gatsbyjs.com"
          className="text-orange-700 font-semibold"
        >
          Built with Gatsby
        </a>
      </footer>
    </div>
  );
};

export default Layout;
