import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    console.log("Creating Tweet");

    const tweet = await prisma.automatedTweet.create({
      data: {
        text: "This tweet was created by a Next.js API route! Then saved in a MongoDB database! Then tweeted by a Next.js API route!",
      },
    });

    console.log("Tweet: ", tweet);

    return NextResponse.json({ message: "Success", tweet }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
