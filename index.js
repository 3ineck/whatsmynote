import dotenv from 'dotenv';
import OpenAI from "openai";
import fs from "fs";

dotenv.config();

//Create new OpenAI client using the API key
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

//Converted image to a Base64 string
const base64Image = fs.readFileSync("public/imagem.jpg", {
  encoding: "base64",
});

//Send a request to the OpenAI API
const response = await client.responses.create({
  model: "gpt-4.1",
  input: [
    {
      role: "user",
      content: [
        { type: "input_text", text: "Extraia todo o texto que esteja sublinhado em verde e retorne APENAS o texto puro." },
        {
          type: "input_image",
          image_url: `data:image/jpg;base64,${base64Image}`,
        },
      ],
    },
  ],
});

//Log Response
console.log(response.output_text);

//Create a file name. Format: WhatsMyNote - YYYYMMDDHHMMSS.md
let dateNow = new Date();
let fileName = `WhatsMyNote - ${dateNow.getFullYear()}${(dateNow.getMonth()+1) < 10 ? '0'+(dateNow.getMonth()+1) : (dateNow.getMonth()+1)}${dateNow.getDate() < 10 ? '0' + dateNow.getDate() : dateNow.getDate()}${dateNow.getHours()}${dateNow.getMinutes()}${dateNow.getSeconds()}.md`

//Obsidian file creation
const content = `
# ${fileName}

${response.output_text}
`;

fs.writeFile(process.env.FILE_DIRECTORY + fileName, content, (err) => {
  if (err) {
    console.error('Creating file Error:', err);
    return;
  }
  console.log('The .md file was created.');
});