import { Configuration, OpenAIApi } from "openai";

const config = useRuntimeConfig();

const configuration = new Configuration({
  basePath: 'https://mrslimslim.site/v1',
  apiKey: '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',
});

console.log('config', config.apiKey, config.basePath);

const openai = new OpenAIApi(configuration);

export default defineEventHandler(async (event) => {
  const { messages } = await readBody(event);
  console.log('messages', messages);

  const response = await openai.createChatCompletion(
    {
      model: "gpt-3.5-turbo-16k-0613", // or `gpt-3.5-turbo`
      temperature: 0,
      messages,
      stream: true,
    },
    { responseType: "stream" }
  );

  return response.data;
});