import { NextRequest, NextResponse } from "next/server";
import TwitterApi from "twitter-api-v2";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const tweet = await prisma.automatedTweet.findFirst({
    where: {
      text: "This tweet was created by a Next.js API route! Then saved in a MongoDB database! Then tweeted by a Next.js API route!"
    },
  });

  const text = tweet?.text;

  console.log("INCOMING Tweet");
  // Instantiate with your wanted authentication method.
  // OAuth 1.0a (User context)
  const userClient = new TwitterApi({
    appKey: process.env.CONSUMER_KEY!,
    appSecret: process.env.CONSUMER_KEY_SECRET!,
    accessToken: process.env.ACCESS_TOKEN!,
    accessSecret: process.env.ACCESS_TOKEN_SECRET!,
  });

  const { data: createdTweet } = await userClient.v2.tweet({
    text: text,
  });

  console.log("Tweet", createdTweet.id, ":", createdTweet.text);

  return NextResponse.json({ status: 200 });
}
