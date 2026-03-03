//Generates the file name
export function generateFileName(index) {
  //Checks the date  
  const dateNow = new Date();
  
  //Create a file name. Format: WhatsMyNote(file NUMBER) - YYYYMMDDHHMMSS.md
  return `WhatsMyNote(file ${index}) - ${
    dateNow.getFullYear()
  }${String(dateNow.getMonth() + 1).padStart(2, "0")}${String(
    dateNow.getDate()
  ).padStart(2, "0")}${dateNow.getHours()}${dateNow.getMinutes()}${dateNow.getSeconds()}.md`;
}

//Creates the content
export function createMDContent(fileName, text) {
  return `
# ${fileName}

${text}
`;
}
