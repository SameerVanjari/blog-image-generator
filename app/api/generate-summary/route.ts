import { OpenAI } from "openai";

export const dynamic = "force-dynamic";
export const runtime = "edge";

const prompt = (content: string, title: string) =>
  `Summarize the following blog post titled ${title} and capture the main points in 3-4 sentences. Focus on the key ideas, any actionable tips, and the overall theme of the post. The blog content is - ${content}`;

const summaryPrompt = (summary: string) =>
  `
  Summary: ${summary}

  based on the summary above, generate an image prompt that captures the essence of the blog post.

  Use keywords from the summary to describe the scene or concept.
  If the post offers tips, consider including a person following those tips in the image.
  Maintain a consistent style with the blog (e.g., playful for a lifestyle blog, professional for a business blog).`;

export const POST = async (req: Request) => {
  const { content, title } = await req.json();

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

  try {
    // Call OpenAI's API to generate summary
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct", // Choose the engine according to your preference
      prompt: prompt(content, title),
      max_tokens: 150, // Set the maximum number of tokens for the summary
    });
    const summary = response.choices[0].text.trim();

    const summaryPmt = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct", // Choose the engine according to your preference
      prompt: summaryPrompt(summary),
      max_tokens: 150, // Set the maximum number of tokens for the summary
    });

    const imagePrompt = summaryPmt.choices[0].text.trim();

    // Return the summary
    return Response.json({ prompt: imagePrompt });
  } catch (error) {
    console.error("Error:", error);
    // Response.error("Failed to generate summary");
    throw new Error("Something wnet wrong");
  }
};
