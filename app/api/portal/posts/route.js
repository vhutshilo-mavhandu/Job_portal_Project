// pages/api/posts.js

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("Database Connection Unsuccessful");
  }
}
export const POST = async (req) => {
  if (req.method === "POST") {
    try {
      //const bodies = await req.json();
      const { description, title, job_link, company, location } =
        await req.json();

      const post = await prisma.post.create({
        data: {
          title,
          description,
          job_link,
          company,
          location,
        },
      });

      return NextResponse.json(post);
    } catch (error) {
      console.error("Error creating post:", error);
      return NextResponse.json({
        error: "An error occurred while creating the post",
      });
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" });
  }
};

export const GET = async () => {
  try {
    await main();
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    NextResponse.json({ error: "An error occurred while fetching posts" });
  } finally {
    await prisma.$disconnect();
  }
};
