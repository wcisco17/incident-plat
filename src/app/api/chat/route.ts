import { ReplicateStream, StreamingTextResponse } from 'ai';
import Replicate from 'replicate';

// Create a Replicate API client (that's edge friendly!)
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || '',
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await replicate.predictions.create({
    // You must enable streaming.
    stream: true,
    // The model must support streaming. See https://replicate.com/docs/streaming
    // This is the model ID for Llama 2 70b Chat
    version: '02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3',
    input: {
      prompt: messages[0].content,
      debug: false,
      top_k: 50,
      top_p: 0.9,
      temperature: 0.83,
      max_new_tokens: 400,
      min_new_tokens: -1
    },
  });

  // Convert the response into a friendly text-stream
  const stream = await ReplicateStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}