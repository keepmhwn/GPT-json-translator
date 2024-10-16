import type { OpenAIError } from "@/types/error";

import { NextResponse } from "next/server";

import OpenAI from "openai";

export const maxDuration = 60;

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const command = process.env.NEXT_PUBLIC_SYSTEM_CONTENT;

export async function POST(request: Request) {
  const { sourceJson, targetLanguage } = await request.json();

  try {
    const completion = await openai.chat.completions.create({
      model: process.env.NEXT_PUBLIC_GPT_MODEL as string,
      messages: [
        {
          role: "system",
          content: `${command}: ${targetLanguage}`,
        },
        {
          role: "user",
          content: sourceJson,
        },
      ],
    });

    return NextResponse.json({
      translated: completion.choices[0].message,
    });
  } catch (e) {
    const openaiError = e as OpenAIError;

    return NextResponse.json(
      {
        error: {
          code: openaiError.status,
          message: openaiError.error.message,
        },
      },
      {
        status: openaiError.status,
      }
    );
  }
}
