import fs from "fs";
import { readdir } from "fs/promises";

//Check number of files
export async function getNumberOfFiles() {
  try {
    //Reads the folder and returns the number of files
    const files = await readdir('../public');

    return files;
    
  } catch (err) {
    console.error(err);
    throw err;
  }
}

//Turn the image into base64
export function readImageAsBase64(path) {
  return fs.readFileSync(path, { encoding: "base64" });
}

//Writes the MD file
export function writeMDFile(path, content) {
  return fs.promises.writeFile(path, content);
}