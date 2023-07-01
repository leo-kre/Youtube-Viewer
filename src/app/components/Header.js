"use client";

import Link from "next/link";

export default function Header(props) {
      const page = props.page;

      let tabs = [];

      if (page == "home") {
            tabs.push(
                  <Link className="underline" href={"/"}>
                        Home
                  </Link>
            );
      } else {
            tabs.push(<Link href={"/"}>Home</Link>);
      }

      if (page == "about") {
            tabs.push(
                  <Link className="underline" href={"/about"}>
                        About
                  </Link>
            );
      } else {
            tabs.push(<Link href={"/about"}>About</Link>);
      }

      return (
            <div className="h-24 bg-gradient-to-b from-[#000000] ">
                  <div className="w-full h-16 flex justify-center items-center">
                        <div className="flex items-center justify-center text-xl gap-5">{tabs}</div>
                  </div>
            </div>
      );
}
