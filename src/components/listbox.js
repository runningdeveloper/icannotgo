import * as React from "react";

const Listbox = ({ options, onSelected }) => {
  const reasons = options;
  const [selectedReason, setSelectedReason] = React.useState(null);
  const [showList, setShowList] = React.useState(false);

  React.useEffect(() => {
    if (selectedReason) {
      onSelected(selectedReason);
    }
  }, [selectedReason]);

  return (
    <>
      <div className="mt-2 relative max-w-md sm:w-1/3 w-full">
        <button
          onClick={() => setShowList(!showList)}
          type="button"
          aria-haspopup="true"
          aria-expanded={showList}
          aria-label="reasons dropdown list"
          className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        >
          <span className="flex items-center">
            <span className="ml-3 block truncate">
              {selectedReason ? selectedReason.frontmatter.title : "..."}
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
          role="listbox"
          aria-label="reasons list"
          aria-owns="reason-listbox"
        >
          <ul
            // ref={editFieldRef}
            id="reason-listbox"
            className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto sm:text-sm"
          >
            {reasons.map((a) => (
              <li key={a.id}>
                <div
                  className={`cursor-default select-none relative py-2 pl-3 pr-9 hover:text-white hover:bg-orange-700 ${
                    a.id === selectedReason?.id
                      ? `text-white hover bg-orange-700`
                      : `text-gray-900`
                  }`}
                  role="option"
                  aria-selected={
                    selectedReason && a.id === selectedReason.id ? true : false
                  }
                  onKeyDown={() => {
                    setShowList(false);
                    setSelectedReason(a);
                  }}
                  onClick={() => {
                    setShowList(false);
                    setSelectedReason(a);
                  }}
                >
                  <span className="ml-3 block font-normal truncate">
                    {a.frontmatter.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>{" "}
    </>
  );
};

export default Listbox;
