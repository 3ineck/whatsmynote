import dotenv from "dotenv";
import { handler } from "./controllers/imageHandler.js";

//Initiate the .env file
dotenv.config();

//Calls the handler
handler();