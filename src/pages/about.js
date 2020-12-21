import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ShoeHeader from "../components/shoe-header";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About"
        description="About the website I can't go running because..."
      />

      <ShoeHeader headingText="About" />

      <div className="mt-4">
        <p className="pb-2">
          This is a silly fun little project done for the Gatsby Silly Site
          Challenge.
        </p>
        <p className="pb-2">
          This basic idea is as follows. I need to get out and run more but I
          tend to come up with many stupid excuses. So if I had a simple
          repository of excuses and some encouraging alternative solutions it
          could help me get out and run.
        </p>
        <p className="pb-2">
          You could use it for yourself or you could send this as a response to
          someone making an excuse.
        </p>
        <p className="pb-2">You could also use this site to find excuses.</p>

        <p className="pb-2">Hope it make some kind of sense.</p>

        <p>Done by:</p>
        <a
          href="https://twitter.com/geoff4l"
          className="text-orange-700 font-semibold"
        >
          Geoffrey
        </a>

        <p className="pt-2">
          Why not contribute some more ideas and excuses, source on Github:
        </p>
        <a
          href="https://github.com/runningdeveloper/icannotgo"
          className="text-orange-700 font-semibold"
        >
          https://github.com/runningdeveloper/icannotgo
        </a>
      </div>

      <div className="mt-5">
        <Link
          to={`/`}
          className="py-2 px-4 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none"
        >
          Go Home
        </Link>
      </div>
    </Layout>
  );
}
