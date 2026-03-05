# WhatsMyNote

> Extracts highlighted text from images and converts it into Obsidian .md file. 

---

## 📚 Table of Content

- [About](https://github.com/3ineck/whatsmynote?tab=readme-ov-file#-about)
- [Installation](https://github.com/3ineck/whatsmynote?tab=readme-ov-file#%EF%B8%8F-installation)
- [Future Development](https://github.com/3ineck/whatsmynote?tab=readme-ov-file#-future-development)
- [Version Control](https://github.com/3ineck/whatsmynote?tab=readme-ov-file#-version-control)

---

## 🧠 About

I am someone who, despite loving technology, still prefers reading physical books rather than digital ones. However, whenever I read a book, I like to take notes so that in the future I can revisit them and remember what I’ve read. I always write these notes in Obsidian, where I store all my notes.

As you can imagine, typing out all these notes takes time. So I started thinking about a way to automate this process: while reading, I highlight passages with a marker, then take a photo of the page. After that, I developed this program that converts the highlighted text from the photo (via OpenAI API) into an Obsidian file, allowing me to later review, expand, and refine my notes.

If you struggle with this same issue, this program might be very useful for you.

### UPDATE: LOCAL AIs

With the release of the smalls Qwen 3.5 models, which are very good and small, making it ideal for learning how to work with local AI, I decided to adapt my tool to support local AI models. Even though they may not be quite as powerful as ChatGPT, for this purpose, their quality is similar. Models like Qwen 3.5 4B are lightweight enough to run locally, making it a free service with privacy, if that matters to you. To run a local LLM with WhatsMyNote, I use LM Studio and followed the [official documentation](https://lmstudio.ai/docs/developer/rest) to set up a local API.

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/3ineck/whatsmynote.git
```

### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the root directory:

`OPENAI_API_KEY`: You must set your OpenAI API key or the API key of another AI service that you use.

`FILE_DIRECTORY`: This is the Obsidian file directory where the .md file will be created.

If you are using local LLMs with LM Studio, set the environment variables:

`LOCAL_API_FETCH`= Your API adress, like: "http:// IP : PORT /api/v1/chat"

`LOCAL_API_MODEL`= The model you are using, like: "qwen3.5-4b"

```
OPENAI_API_KEY=your_api_key_here
FILE_DIRECTORY="/your/output/directory/"
LOCAL_API_FETCH="http://IP:PORT/api/v1/chat"
LOCAL_API_MODEL="llm_model"
```

### 4️⃣ Paste the images to the public folder
Paste ALL the images to the `public` folder.

You must save the images as a **.JPG file**.

### 5️⃣ Set the type of LLM you are using
`cd` to the `/src` folder and open the `index.js` file.

Inside this folder you will see the variable:

```
const typeOfAi = NUMBER;
```

If you are using local AI, change the value of the variable typeOfAi to 1.

If you are using the ChatGPT API, change the value of the variable typeOfAi to 2.

### 6️⃣ Run the application
`cd` to the `/src` folder and

```
node index.js
```

## 🚀 Future Development

The project roadmap includes the following improvements:

- **Add Automated Tests**  
  Implement unit and integration tests to ensure reliability and stability.

- **Support Multiple Highlight Colors**  
  Add detection for different highlighter colors to trigger different actions (e.g., green = notes, yellow = titles, etc.).

## 📌 Version Control
| Version | Changes                                                                   | Date       |
| ------- | ------------------------------------------------------------------------- | ---------- |
| 0.1.0   | Initial release with image text extraction and Obisidian file generation. | 2026-02-26 |
| 0.2.0   | Added to run in a loop for all images inside the /public folder.          | 2026-03-01 |
| 0.3.0   | Refactoring                                                               | 2026-03-02 |
| 0.4.0   | Added Local LLMs support                                                  | 2026-03-05 |