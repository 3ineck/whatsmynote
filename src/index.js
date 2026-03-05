import dotenv from "dotenv";
import { handler } from "./controllers/imageHandler.js";

//Initiate the .env file
dotenv.config();

///If you are using local AI, change the value of the variable typeOfAi to 1.
///If you are using the ChatGPT API, change the value of the variable typeOfAi to 2.
///Don't forget to set the environment variables, for more info, read the README.md

const typeOfAi = 1;

//Calls the handler
handler(typeOfAi);