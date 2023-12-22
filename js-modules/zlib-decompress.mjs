import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib-compress.mjs.txt");
// decompress
const result = zlib.unzipSync(source);
console.info(result.toString());

fs.writeFileSync("zlib-compress.mjs.txt", result);
