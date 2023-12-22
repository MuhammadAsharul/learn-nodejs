import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib-compress.mjs");
// compress
const result = zlib.gzipSync(source);
console.info(result.toString());

fs.writeFileSync("zlib-compress.mjs.txt", result);
