import * as React from "react";

const ShareLine = ({ children }) => {
  return (
    <div className="mt-4 p-4 shadow-lg border-black border rounded-md text-center min-w-min">
      <div className="mt-2 flex flex-col">
        <span className="text-lg">{children}</span>
        <div className="mt-4">
          <button
            onClick={() => navigator.clipboard.writeText(`${children}`)}
            className="py-2 px-4 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none"
          >
            Copy
          </button>{" "}
          <a
            href={`https://twitter.com/share?url=${
              typeof window !== `undefined` ? window.location.href : ""
            }&text=${encodeURIComponent(children)}&via=geoff4l`}
            className="py-2 px-4 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none"
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareLine;
