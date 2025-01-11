import { NextRequest, NextResponse } from "next/server";
import admin from "@/database/models/admin.model";
import { hashPassword } from "@/utils/jwt";
import connectDB from "@/database/connect";

export const POST = async (req: NextRequest) => {
  const { name, email, password } = await req.json();
  
  if (!name || !email || !password) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  await connectDB();

  const user = await admin.findOne({ email });
  if (user) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await admin.create({ 
    name,
    email, 
    password: hashedPassword 
  });
  
  return NextResponse.json({ 
    message: "User created successfully", 
    data: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email
    }
  }, { status: 201 });
};