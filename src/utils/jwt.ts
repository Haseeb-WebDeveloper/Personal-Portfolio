import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET!;

export const generateJWT = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET, { 
    expiresIn: '30d' 
  });
};

export const verifyJWT = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};