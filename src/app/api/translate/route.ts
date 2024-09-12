import { NextResponse } from "next/server";
import { Translate } from "@google-cloud/translate/build/src/v2";

type GoogleCloudError = {
  code: number;
  message: string;
};

export async function POST(request: Request) {
  const { text, targetLanguage: target } = await request.json();

  const translate = new Translate({
    projectId: process.env.NEXT_PUBLIC_GOOGLE_APPLICATION_PROJECT_ID,
    key: process.env.NEXT_PUBLIC_GOOGLE_APPLICATION_CREDENTIALS,
  });

  try {
    const [translated] = await translate.translate(text, target);
    return NextResponse.json({ translated });
  } catch (error: unknown) {
    const { code, message } = error as GoogleCloudError;
    return NextResponse.json({ error: message }, { status: code });
  }
}
