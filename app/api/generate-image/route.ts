import { OpenAI } from "openai";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export const POST = async (req: Request) => {
  const { prompt } = await req.json();

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
  console.log("image ==> ", prompt);

  try {
    // Call OpenAI's API to generate summary
    //   const imagePrompt = summaryPmt.choices[0].text.trim();

    const image = await openai.images.generate({
      prompt: prompt,
      model: "dall-e-3",
      n: 1,
      size: "1024x1024",
    });

    // Return the summary
    return Response.json({ image });
  } catch (error) {
    console.error("Error:", error);
    // Response.error("Failed to generate summary");
    throw new Error("Something wnet wrong");
  }
};
