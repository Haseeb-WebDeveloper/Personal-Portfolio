import { NextRequest, NextResponse } from "next/server";
import admin from "@/database/models/admin.model";
import { comparePassword, generateJWT } from "@/utils/jwt";
import connectDB from "@/database/connect";

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ 
        message: "Email and password are required" 
      }, { status: 400 });
    }

    await connectDB();
    const user = await admin.findOne({ email });
    if (!user) {
      return NextResponse.json({ 
        message: "User not found" 
      }, { status: 404 });
    }

    const isPasswordCorrect = await comparePassword(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json({ 
        message: "Invalid password" 
      }, { status: 401 });
    }

    const token = generateJWT({ id: user._id, role: "admin" });
    
    const response = NextResponse.json({ 
      success: true,
      message: "Login successful"
    });

    // Set cookie directly on the response
    response.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return response;

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ 
      success: false,
      message: "Internal server error" 
    }, { status: 500 });
  }
};
