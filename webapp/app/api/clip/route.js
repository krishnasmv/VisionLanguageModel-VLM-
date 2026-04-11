export async function POST(req) {
  const { image_base64, task } = await req.json();
  const HF_TOKEN = process.env.HUGGINGFACE_API_KEY;

  if (!HF_TOKEN) {
    return Response.json({ error: "Missing HUGGINGFACE_API_KEY" }, { status: 400 });
  }

  if (!image_base64 || !task) {
    return Response.json({ error: "Missing image_base64 or task" }, { status: 400 });
  }

  try {
    const prompt = task === 'caption' 
      ? 'Generate a short caption for this image.' 
      : 'Summarize what you see in this image.';

    const response = await fetch(
      "https://api-inference.huggingface.co/models/Qwen/Qwen2.5-VL-7B-Instruct",
      {
        headers: { Authorization: `Bearer ${HF_TOKEN}` },
        method: "POST",
        body: JSON.stringify({
          inputs: prompt,
          image: image_base64,
        }),
      }
    );

    const result = await response.json();
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
