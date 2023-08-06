import { Configuration, OpenAIApi } from "openai";

const config = useRuntimeConfig();

const configuration = new Configuration({
  apiKey: config.apiKey,
  basePath: config.basePath,
});

const openai = new OpenAIApi(configuration);

export default defineEventHandler(async (event) => {
  const { messages } = await readBody(event);
  const response = await openai.createChatCompletion(
    {
      model: "gpt-3.5-turbo-16k-0613", // or `gpt-3.5-turbo`
      temperature: 0,
      messages,
      stream: true,
    },
    { responseType: "stream" }
  );

  return sendStream(event, response.data);
});