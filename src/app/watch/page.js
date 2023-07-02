"use client";

import { useSearchParams } from "next/navigation";
import Request from "./request";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Watch() {
      const [reload, setReload] = useState(false);

      const searchParams = useSearchParams();
      const search = searchParams.get("v");

      let path = "http://localhost:8080/videos/id-" + search + ".mp4";

      let isVideoPauesd = true;
      let isVideoFullscreen = false;
      let isVideoMuted = false;

      let volume = 0.4;

      useEffect(() => {
            const videoObj = document.querySelector("video");

            const keyDownHandler = (e) => {
                  switch (e.key) {
                        case " ":
                              isVideoPauesd = !isVideoPauesd;

                              if (isVideoPauesd) {
                                    videoObj.play();
                              } else {
                                    videoObj.pause();
                              }
                              break;
                        case "f":
                              isVideoFullscreen = !isVideoFullscreen;

                              if (isVideoFullscreen) {
                                    videoObj.closest();
                              } else {
                                    videoObj.requestFullscreen();
                              }

                              break;
                        case "m":
                              isVideoMuted = !isVideoMuted;

                              if (isVideoMuted) {
                                    videoObj.volume = 0;
                              } else {
                                    videoObj.volume = volume;
                              }

                              break;
                        case "ArrowLeft":
                              videoObj.currentTime -= 10;
                              break;
                        case "ArrowRight":
                              videoObj.currentTime += 10;
                              break;
                        case "ArrowDown":
                              if (volume - 0.1 >= 0) {
                                    volume -= 0.1;
                                    videoObj.volume = volume;
                              }
                              break;
                        case "ArrowUp":
                              if (volume + 0.1 <= 1) {
                                    volume += 0.1;
                                    videoObj.volume = volume;
                              }
                              break;
                  }
            };
            document.addEventListener("keydown", keyDownHandler);
      }, []);

      Request(search);

      return (
            <main className="w-full h-full">
                  <Header></Header>
                  <div className="w-full h-full flex flex-col items-center">
                        <video controls content="video" src={path}></video>

                        <button
                              className="text-white"
                              onClick={() => {
                                    window.location.reload();
                              }}
                        >
                              Reload
                        </button>
                  </div>
            </main>
      );
}
