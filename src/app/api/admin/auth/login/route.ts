import { NextRequest, NextResponse } from "next/server";
import admin from "@/database/models/admin.model";
import { comparePassword, generateJWT, setCookie } from "@/utils/jwt";
import connectDB from "@/database/connect";

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
  }
  await connectDB();
  const user = await admin.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const isPasswordCorrect = await comparePassword(password, user.password);
  if (!isPasswordCorrect) {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }


  const token = generateJWT({ id: user._id, role: "admin" });
  setCookie("token", token, { httpOnly: true, secure: true, sameSite: "strict" });

  return NextResponse.json({ message: "Login successful", token, data: user }, { status: 200 })
};
