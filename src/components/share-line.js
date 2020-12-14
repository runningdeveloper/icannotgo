import * as React from "react";

const ShareLine = ({ children }) => {
  return (
    <div className="mt-4">
      <span className="text-lg pr-4">{children}</span>
      <button
        onClick={() => navigator.clipboard.writeText(`${children}`)}
        className="py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none"
      >
        Copy
      </button>{" "}
      <button onClick={()=>alert(`TODO twitter: ${children}`)} className="py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none">
        Tweet
      </button>
    </div>
  );
};

export default ShareLine;
