import * as React from "react";
import { Listbox, Transition } from "@headlessui/react";

const ReasonListbox = ({ options, onSelected }) => {
  const reasons = options;
  const [selectedReason, setSelectedReason] = React.useState(null);

  React.useEffect(() => {
    if (selectedReason) {
      onSelected(selectedReason);
    }
  }, [selectedReason, onSelected]);

  return (
    <>
      <div className="mt-2 relative max-w-md sm:w-1/3 w-full">
        <Listbox value={selectedReason} onChange={setSelectedReason} as="div">
          {({ open }) => (
            <>
              <Listbox.Button
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
              </Listbox.Button>
              <Transition
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
              >
                <Listbox.Options
                  as="ul"
                  className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto sm:text-sm focus:outline-none"
                >
                  {reasons.map((a) => (
                    <Listbox.Option key={a.id} value={a}>
                      {({ active }) => (
                        <div
                          className={`cursor-default select-none relative py-2 pl-3 pr-9 hover:text-white hover:bg-orange-700 ${
                            active
                              ? `text-white hover bg-orange-700`
                              : `text-gray-900`
                          }`}
                        >
                          <span className="ml-3 block font-normal truncate">
                            {a.frontmatter.title}
                          </span>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </>
          )}
        </Listbox>
      </div>
    </>
  );
};

export default ReasonListbox;
