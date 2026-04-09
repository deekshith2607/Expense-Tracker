import { RiSearchLine } from "@remixicon/react";
import React from "react";

const Searchbar = ({ setSearchVal, SearchVal }) => {
  const searchhandel = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full px-2 sm:px-4">
      <form
        className="flex w-full items-center border-2 rounded-2xl overflow-hidden bg-white"
        onSubmit={searchhandel}
      >
        <RiSearchLine className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 ml-2" />
        <input
          type="text"
          placeholder="Search Transactions By Category"
          className="flex-1 h-10 sm:h-12 px-2 sm:px-3 outline-none placeholder:text-xs sm:placeholder:text-sm placeholder:font-medium text-gray-800"
          onChange={(e) => setSearchVal(e.target.value)}
          value={SearchVal}
        />
      </form>
    </div>
  );
};

export default Searchbar;