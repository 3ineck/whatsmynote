import { getNumberOfFiles, readImageAsBase64, writeMDFile } from "../models/fileModel.js";
import { callsApi } from "../models/apiModel.js";
import { callsLocalAi } from "../models/localAiModel.js";
import { createMDContent, generateFileName } from "../views/markdownView.js";

export async function handler(typeOfAi) {
  //Get the number of files  
  const files = await getNumberOfFiles();
  
  //Loop for all the files
  for (let i = 0; i < files.length; i++) {
    
    //Get the file path
    const imagePath = `../public/${files[i]}`;
    
    //Calls the function to turn the image into base64
    const base64 = readImageAsBase64(imagePath);

    //Calls the API and returns the extracted text
    let extractedText;

      //LOCAL AI
      if (typeOfAi === 1) {
        extractedText = await callsLocalAi(base64);

      //CHAT GPT API AI
      } else if (typeOfAi === 2) {
        extractedText = await callsApi(base64);
      
      //ERROR FOR WRONG TYPE
      } else {
        throw new Error("Invalid typeOfAi declaration. Check README.md");
      }

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