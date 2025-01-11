import connectDB from "@/database/connect";
import { BlogPostModel } from "@/database/models/blog-post.model";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB();
        const posts = await BlogPostModel.find({})
            .sort({ createdAt: -1 })
            .lean();

        return NextResponse.json({ 
            message: "Posts fetched successfully", 
            posts 
        }, { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json({ 
            message: "Error fetching posts" 
        }, { status: 500 });
    }
}

export const DELETE = async (req: NextRequest) => {
    const { id } = await req.json();
    await BlogPostModel.findByIdAndDelete(id);
    return NextResponse.json({ message: "Post deleted successfully" }, { status: 200 });
}
