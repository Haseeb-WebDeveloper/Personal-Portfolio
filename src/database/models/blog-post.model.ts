import mongoose, { Schema, model, models } from "mongoose";

export interface IBlogPost {
    _id?: string;
    title: string; 
    content: string; 
    author: string;
    categories?: string[]; 
    tags?: string[]; 
    featuredImage?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isPublished: boolean; 
    slug: string;
    language: string;
    priority: number;
    isFeatured: boolean;
    // SEO Fields
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
    // Open Graph
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    // Additional SEO
    structuredData?: string;
}

const BlogPostSchema: Schema<IBlogPost> = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        author: { type: String, required: true },
        categories: { type: [String], default: [] },
        tags: { type: [String], default: [] },
        featuredImage: { type: String, default: null },
        isPublished: { type: Boolean, default: false },
        slug: { type: String, required: true, unique: true },
        isFeatured: { type: Boolean, default: false },
        // SEO Fields
        metaTitle: { type: String, default: "" },
        metaDescription: { type: String, default: "" },
        metaKeywords: { type: [String], default: [] },
        // Open Graph
        ogTitle: { type: String, default: "" },
        ogDescription: { type: String, default: "" },
        ogImage: { type: String, default: null },
        // Additional SEO
        structuredData: { type: String },
        language: { type: String, default: "en" },
        priority: { type: Number, default: 0 },
    },
    { 
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);


// Check if the model exists before creating a new one
export const BlogPostModel = models.BlogPost || model<IBlogPost>('BlogPost', BlogPostSchema);
