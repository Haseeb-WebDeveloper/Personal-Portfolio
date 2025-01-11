import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRATION = process.env.JWT_EXPIRATION!;
const COOKIE_EXPIRATION = process.env.COOKIE_EXPIRATION!;

export const generateJWT = (payload: any) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
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

export const setCookie = (name: string, value: string, options: any) => {
  cookies().set(name, value, { ...options, maxAge: COOKIE_EXPIRATION });
};

export const getCookie = (name: string) => {
  return cookies().get(name)?.value;
};

export const deleteCookie = (name: string) => {
  cookies().delete(name);
};
