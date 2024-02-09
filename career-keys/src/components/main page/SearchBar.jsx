import React from "react";

export default function SearchBar() {
  return (
    <>
      <form>
          <div className="relative w-full">
            {/*REQUIRED PARAMETER*/}
            <input
              type="search"
              className="location block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your location"
              required/>
            {/*RADIUS (NUMBER) PARAMETER*/}
            <input
              type="search"
              className="location block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Number"/>
            {/*JOB TITLE PARAMETER*/}
            <input
              type="search"
              className="jsearch block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Job Name"/> 
            {/*DATE POSTED PARAMETER*/}
            <div className="flex">
              <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
                  type="button">
              Date Posted
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"/>
                </svg>
            </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul
              className="py-2 text-sm text-gray-700"
              aria-labelledby="dropdown-button">
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100">
                  all
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  today
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  3days
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  week
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  month
                </button>
              </li>
            </ul>
          </div>
                {/* REMOTE JOBS ONLY PARAMETER BOLEAN VALUE*/}
                    <div className="flex">
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
            type="button"
          >
            Remote Jobs Only {" "}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
          >
            <ul
              className="py-2 text-sm text-gray-700"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  true
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  false
                </button>
              </li>
            </ul>
          </div>
                {/* EMPLOYMENT TYPES PARAMETER*/}
                <div className="flex">
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
            type="button"
          >
            Emplotyment Type{" "}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
          >
            <ul
              className="py-2 text-sm text-gray-700"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  FULLTIME
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  CONTRACTOR
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  PARTTIME
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100"
                >
                  INTERN
                </button>
              </li>
            </ul>
          </div>
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
