"use server";

const fs = require("fs");
const ytdl = require("ytdl-core");

import videoPage from "./page";

export default async function Request(id) {
      let url = "http://www.youtube.com/watch?v=" + id;

      let path = "./public/videos/";

      const stream = ytdl(url);

      try {
            if (fs.existsSync(path + "video.mp4")) {
                  console.log("file exists");
                  return;
            } else {
                  stream.pipe(fs.createWriteStream(path + "video.mp4"));
            }
      } catch (e) {}

      let finished = false;

      stream.on("readable", () => {
            if (finished) {
                  return;
            }

            console.log("finished");
            videoPage.setVideoUrl(path + "video.mp4");

            finished = true;
      });
}
