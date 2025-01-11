/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_TINYMCE_API_KEY: process.env.NEXT_PUBLIC_TINYMCE_API_KEY,
    NEXT_PUBLIC_TINYMCE_BASE_URL: process.env.NEXT_PUBLIC_TINYMCE_BASE_URL,
  },
  images: {
    domains: ['res.cloudinary.com'], // Allow images from Cloudinary
  },
};

export default nextConfig;
