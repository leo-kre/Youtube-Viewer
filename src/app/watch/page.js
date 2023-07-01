"use client";

import { useSearchParams } from "next/navigation";
import Request from "./request";

let video = <video></video>;

export default function Watch() {
      const searchParams = useSearchParams();

      const search = searchParams.get("v");

      Request(search);

      return (
            <main>
                  <h1>{search}</h1>
                  {video}
            </main>
      );
}

export function setVideoUrl(url) {
      console.log(url);
      video = <video controls src={url}></video>;
}
