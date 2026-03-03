import OpenAI from "openai";

export async function callsApi(base64Image) {
  //Initiate a client  
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  
  //Sends the base64 and waits for the response
  const response = await client.responses.create({
    model: "gpt-4.1",
    input: [
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: "Extraia TODO o texto que esteja sublinhado em verde e retorne APENAS o texto puro. NÃO alterar o texto original.",
          },
          {
            type: "input_image",
            image_url: `data:image/jpg;base64,${base64Image}`,
          },
        ],
      },
    ],
  });

  return response.output_text;
}