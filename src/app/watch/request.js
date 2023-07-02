"use server";

const fs = require("fs");
const ytdl = require("ytdl-core");

const path = "./public/videos/";

const deleteTimeInMinutes = 60;

export default async function Request(id) {
      let url = "http://www.youtube.com/watch?v=" + id;

      const stream = ytdl(url, { filter: (format) => format.hasAudio && format.hasVideo });

      let fileName = "id-" + id + ".mp4";
      try {
            if (fs.existsSync(path + fileName)) {
                  return;
            } else {
                  stream.pipe(fs.createWriteStream(path + fileName));

                  stream.on("progress", (chunkLength, downloaded, total) => {
                        let percentage = (downloaded / total) * 100;
                  });
            }
      } catch (e) {}

      setTimeout(() => {
            deleteVideo(id);
      }, deleteTimeInMinutes * 60 * 1000);
}

export async function deleteVideo(id) {
      const file = path + "id-" + id + ".mp4";
      try {
            if (fs.existsSync(file)) {
                  fs.unlinkSync(file);
                  console.log("file deleted");
            }
      } catch (e) {}
}
