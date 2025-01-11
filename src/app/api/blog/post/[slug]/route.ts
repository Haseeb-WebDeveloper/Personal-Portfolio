import { NextRequest, NextResponse } from "next/server";
import { BlogPostModel } from "@/database/models/blog-post.model";
import connectDB from "@/database/connect";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB();
    const post = await BlogPostModel.findOne({ 
      slug: params.slug,
      isPublished: true 
    }).lean();
    
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
} 