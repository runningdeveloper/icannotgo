import * as React from "react";

const ShareLine = ({ children }) => {
  const [copied, setCopied] = React.useState(false);
  return (
    <div className="mt-4 p-4 shadow-lg border-black border rounded-md text-center min-w-min">
      <div className="mt-2 flex flex-col">
        <span className="text-lg">{children}</span>
        <div className="mt-4">
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${children}`);
              setCopied(true);
            }}
            className="py-2 px-4 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none text-base"
          >
            {copied ? "Copied to clipboard" : "Copy"}
          </button>{" "}
          <a
            href={`https://twitter.com/share?url=${
              typeof window !== `undefined` ? window.location.href : ""
            }&text=${encodeURIComponent(children)}&via=geoff4l`}
            style={{ appearance: "auto" }}
            className="py-2 px-4 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none text-base"
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShareLine;
