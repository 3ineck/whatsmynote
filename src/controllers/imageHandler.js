import { getNumberOfFiles, readImageAsBase64, writeMDFile } from "../models/fileModel.js";
import { callsApi } from "../models/apiModel.js";
import { createMDContent, generateFileName } from "../views/markdownView.js";

export async function handler() {
  //Get the number of files  
  const files = await getNumberOfFiles();
  
  //Loop for all the files
  for (let i = 0; i < files.length; i++) {
    
    //Get the file path
    const imagePath = `../public/${files[i]}`;
    
    //Calls the function to turn the image into base64
    const base64 = readImageAsBase64(imagePath);

    //Calls the API and returns the extracted text
    const extractedText = await callsApi(base64);

    //Customize the filename
    const fileName = generateFileName(i + 1);

    //Creates the md content
    const markdown = createMDContent(fileName, extractedText);

    //Creates the md file
    await writeMDFile(process.env.FILE_DIRECTORY + fileName, markdown);

    //Logs that the file is created
    console.log(`Created: ${fileName}`);
  }
}