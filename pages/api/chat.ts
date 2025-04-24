import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { question, history = [] } = req.body;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "你是德国球票咨询助手。" },
        ...history,
        { role: "user", content: question }
      ]
    }),
  });

  const data = await response.json();
  res.status(200).json({ reply: data.choices?.[0]?.message?.content || "暂无回复。" });
}
