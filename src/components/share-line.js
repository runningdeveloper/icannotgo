import * as React from "react";

const ShareLine = ({ children }) => {
  return (
    <div className="mt-4 p-4 shadow-md bg-white rounded-md">
      <div>
        <span className="text-lg pr-4">{children}</span>
        <div className="mt-2">
          <button
            onClick={() => navigator.clipboard.writeText(`${children}`)}
            className="py-2 px-4 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none"
          >
            Copy
          </button>{" "}
          <button
            onClick={() => alert(`TODO twitter: ${children}`)}
            className="py-2 px-4 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareLine;
