"use client";

import React from "react";
import { Search } from "lucide-react";

const SearchM = () => {
  return (
    <div
      className="
                border
                w-full
                md:w-auto
                py-2
                rounded-full
                shadow-sm
                hover:shadow-md
                transition
                cursor-pointer
                "
    >
      <div
        className="
                flex 
                items-center
                justify-between
            "
      >
        <div className="text-sm px-6">Anywhere</div>
        <div
          className="
                    hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x
                    flex-1
                    text-center
                "
        >
          Any Week
        </div>
        <div
          className="
                text-sm
                pl-6
                pr-2
                text-gray-600
                flex
                items-center
                gap-3
                "
        >
          <div className="hidden sm:block">Add Guests</div>
          <div className="p-1.5 bg-purple-500 rounded-full text-white">
            <Search size={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchM;
