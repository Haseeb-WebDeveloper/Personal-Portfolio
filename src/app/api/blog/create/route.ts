import { NextRequest, NextResponse } from "next/server";
import { BlogPostModel } from "@/database/models/blog-post.model";
import connectDB from "@/database/connect";

export async function POST(req: NextRequest) {
  try {

    console.log("Creating blog post...")
    await connectDB();
    
    const data = await req.json();

    // Validate required fields
    if (!data.title || !data.content) {
      return NextResponse.json({ 
        error: "Title and content are required" 
      }, { status: 400 });
    }

    // Create new blog post
    const post = await BlogPostModel.create({
      ...data,
      author: "Haseeb Ahmed", // TODO: Get from authenticated user
    });

    return NextResponse.json({ 
      message: "Post created successfully", 
      post 
    }, { status: 201 });

  } catch (error: any) {
    console.error("Error creating post:", error);
    
    // Handle duplicate slug error
    if (error.code === 11000) {
      return NextResponse.json({ 
        error: "A post with this slug already exists" 
      }, { status: 400 });
    }

    return NextResponse.json({ 
      error: error.message || "Failed to create post" 
    }, { status: 500 });
  }
} 