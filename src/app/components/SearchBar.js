"use client";

import { useState } from "react";
import Image from "next/image";

import magnifyingGlass from "../../../public/magnifying-glass.svg";

export default function SearchBar() {
      const [searchValue, setSearchValue] = useState(null);

      let searchIcon = <div className="w-8 h-8 mx-1.5 fill-white"></div>;

      if (searchValue != null) {
            let text = searchValue.target.value;

            if (text != "") {
                  searchIcon = <Image src={magnifyingGlass} className="w-8 h-8 mx-1.5" alt="magnifyingGlass"></Image>;
            }
      }

      return (
            <div className="w-full max-w-[35rem] h-12 pl-3 text-blue-50 rounded-lg bg-[#FFFFFF20] outline outline-1 outline-[#FFFFFF35] flex justify-between items-center">
                  <input
                        className="w-full outline-none text-2xl bg-transparent"
                        placeholder="https://www.youtube.com"
                        onInput={(text) => {
                              setSearchValue(text);
                        }}
                  ></input>

                  {searchIcon}
            </div>
      );
}
