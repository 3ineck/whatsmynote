export async function callsLocalAi(base64Image) {
  const res = await fetch(process.env.LOCAL_API_FETCH, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.LOCAL_API_MODEL,
      input: [
      {
        "type": "text",
        "content": "Extract ONLY the text that is highlighted in green. DO NOT alter the original text."
      },
      {
        "type": "image",
        "data_url": `data:image/jpg;base64,${base64Image}`
      }
            ],
    })
  });

  const response = await res.json();

  return response.output[0].content;
}