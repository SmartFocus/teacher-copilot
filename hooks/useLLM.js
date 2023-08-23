export const useLLM = ({
  onChunk = () => {},
  onReady = () => {},
  stream,
}) => {
  const data = ref("");
  resolveStream({
    data,
    onChunk,
    onReady,
    stream,
  });

  return {
    data: readonly(data),
  }

}

const resolveStream = async ({
    data,
    onChunk = () => {},
    onReady = () => {},
    stream,
  }) => {
    const reader = stream.pipeThrough(new TextDecoderStream()).getReader();
    while (true) {
      const stream = await reader.read();
      if (stream.done) break;
  
      // const chunks = stream?.value
      //   .replaceAll(/^data: /gm, "")
      //   .split("\n")
      //   .filter((c) => Boolean(c.length) && c !== "[DONE]")
      //   .map((c) => JSON.parse(c));


      let buffer = "";
  
      for (let chunk of stream?.value) {
        buffer += chunk;
        const lines = buffer.split("\n");

        if(buffer.endsWith("\n")) {
          buffer = "";
        } else {
          buffer = lines.pop()|| "";
        }

        for (let line of lines) {
          const message = line.trim().split("data: ")[1];
          if (message === "[DONE]") {
            break;
          }

          if(message){
            try {
              const json = JSON.parse(message);
              const content = json.choices[0].delta.content;
              if (!content) continue;
              data.value += content;
              onChunk({ data: content });
            }catch(e){
              console.error("Error parsing JSON message:", error);
            }
          }
        }

        // const content = chunk.choices[0].delta.content;
        // if (!content) continue;
        // data.value += chunk.choices[0].delta.content;
        // onChunk({ data: content });
      }
    }
  
    onReady({ data: data.value });
};