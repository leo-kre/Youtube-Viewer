import Image from "next/image";

import SearchBar from "./SearchBar";
export default function Home() {
      return (
            <div className="items-center flex-col flex h-full">
                  <div className="h-[5%]"></div>
                  <div className="flex flex-col items-center">
                        <div className="font-bold text-[15vw] lg:text-[9vw] m-5">
                              <h1 className="text-[#FF0000]">Youtube</h1>
                              <h1>video viewer</h1>
                        </div>

                        <SearchBar></SearchBar>
                  </div>

                  <div className="h-10"></div>
            </div>
      );
}
