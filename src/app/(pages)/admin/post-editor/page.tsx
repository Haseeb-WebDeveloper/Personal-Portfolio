'use client'
import { useState, useRef, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useRouter } from 'next/navigation'
import { uploadToCloudinary } from '@/lib/cloudinary'
import { 
  ScrollArea, 
  ScrollBar 
} from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button'
import { Progress } from "@/components/ui/progress"
import { 
  ImageIcon, 
  Loader2, 
  ArrowLeft,
  Globe,
  Tags,
  Languages,
  ListFilter,
  Star,
  FileText
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const CATEGORIES = [
  'Web Development',
  'Programming',
  'JavaScript',
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Database',
  'DevOps',
  'Tools',
  'Career',
  'Tutorial'
]

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'ur', name: 'Urdu' },
  { code: 'hi', name: 'Hindi' }
]

interface PostFormData {
  title: string
  content: string
  slug: string
  categories: string[]
  tags: string[]
  isPublished: boolean
  isFeatured: boolean
  language: string
  priority: number
  metaTitle: string
  metaDescription: string
  metaKeywords: string[]
  ogTitle: string
  ogDescription: string
  ogImage: string
}

export default function PostEditor() {
  const router = useRouter()
  const editorRef = useRef<any>(null)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [featuredImage, setFeaturedImage] = useState('')
  const [formData, setFormData] = useState<PostFormData>({
    title: '',
    content: '',
    slug: '',
    categories: [],
    tags: [],
    isPublished: false,
    isFeatured: false,
    language: 'en',
    priority: 0,
    metaTitle: '',
    metaDescription: '',
    metaKeywords: [],
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
  })

  // Auto-generate slug from title
  useEffect(() => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-')
    setFormData(prev => ({ ...prev, slug }))
  }, [formData.title])

  // Handle featured image upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = async () => {
      try {
        setLoading(true)
        const base64String = reader.result as string
        const uploadedImage = await uploadToCloudinary(base64String)
        setFeaturedImage(uploadedImage.secure_url)
        setFormData(prev => ({
          ...prev,
          ogImage: uploadedImage.secure_url
        }))
      } catch (error) {
        console.error('Error uploading image:', error)
      } finally {
        setLoading(false)
      }
    }
    reader.readAsDataURL(file)
  }

  // Handle TinyMCE image upload
  const handleEditorImageUpload = async (
    blobInfo: any,
    progress: (percent: number) => void
  ): Promise<string> => {
    try {
      const base64String = blobInfo.base64()
      progress(30)
      const uploadedImage = await uploadToCloudinary(
        `data:${blobInfo.blob().type};base64,${base64String}`
      )
      progress(90)
      if (!uploadedImage.secure_url) {
        throw new Error('Failed to upload image')
      }
      progress(100)
      return uploadedImage.secure_url
    } catch (error) {
      console.error('Error uploading image:', error)
      throw new Error('Image upload failed')
    }
  }

  // Handle form submission
  const handleSubmit = async () => {
    console.log("Submit button clicked");
    if (!formData.title || !editorRef.current) {
      alert('Title and content are required');
      return;
    }

    setLoading(true)
    setProgress(0)

    try {
      // Get content from TinyMCE
      const content = editorRef.current.getContent()
      
      // Prepare data
      const finalData = {
        ...formData,
        content,
        featuredImage,
        // Set meta title and description if not provided
        metaTitle: formData.metaTitle || formData.title,
        metaDescription: formData.metaDescription || content.slice(0, 160),
        ogTitle: formData.ogTitle || formData.title,
        ogDescription: formData.ogDescription || content.slice(0, 160),
      }

      // Progress simulation
      const interval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90))
      }, 200)

      const res = await fetch('/api/blog/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create post')
      }

      setProgress(100)
      clearInterval(interval)
      
      // Show success message
      alert('Post created successfully!')
      
      // Redirect to admin dashboard
      router.push('/admin')

    } catch (error: any) {
      console.error('Error creating post:', error)
      alert(error.message || 'Failed to create post')
    } finally {
      setLoading(false)
      setProgress(0)
    }
  }

  // Add this console log to check if the component is rendering
  useEffect(() => {
    console.log("PostEditor mounted");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1500px] mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-primary">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl font-bold">Create New Post</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="button"
              className="flex items-center justify-center px-4 py-2 rounded-md"
              onClick={() => {
                console.log("Button clicked");
                handleSubmit();
              }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Globe className="w-4 h-4 mr-2" />
                  Save Post
                </>
              )}
            </Button>
          </div>
        </div>

        {progress > 0 && (
          <Progress value={progress} className="mb-4" />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title */}
            <input
              type="text"
              placeholder="Post Title"
              className="w-full text-4xl font-bold bg-transparent border-none outline-none placeholder:text-foreground/50"
              value={formData.title}
              onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
            />

            {/* Featured Image */}
            <div className="relative group">
              {featuredImage ? (
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={featuredImage}
                    alt="Featured"
                    fill
                    className="object-cover aspect-video"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <label className="cursor-pointer text-white">
                      <ImageIcon className="w-8 h-8" />
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center h-[300px] border-2 border-dashed rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <ImageIcon className="w-8 h-8 mb-2" />
                  <span>Add Featured Image</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>

            {/* Editor */}
            <Editor
              apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
              onInit={(evt, editor) => editorRef.current = editor}
              init={{
                height: 500,
                menubar: true,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | blocks | ' +
                  'bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | image | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                images_upload_handler: handleEditorImageUpload,
                automatic_uploads: true,
                file_picker_types: 'image',
                images_reuse_filename: true,
                image_advtab: true,
                image_uploadtab: true,
                images_upload_base_path: '/uploads',
                images_upload_credentials: true,
              }}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ScrollArea className="h-[calc(100vh-200px)] rounded-md border p-4">
              {/* SEO Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">SEO Settings</h2>
                <Separator />
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Meta Title</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border bg-background"
                    value={formData.metaTitle}
                    onChange={e => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Meta Description</label>
                  <textarea
                    className="w-full p-2 rounded-md border bg-background h-24"
                    value={formData.metaDescription}
                    onChange={e => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Keywords</label>
                  <input
                    type="text"
                    placeholder="Separate with commas"
                    className="w-full p-2 rounded-md border bg-background"
                    value={formData.metaKeywords.join(', ')}
                    onChange={e => setFormData(prev => ({ 
                      ...prev, 
                      metaKeywords: e.target.value.split(',').map(k => k.trim()) 
                    }))}
                  />
                </div>
              </div>

              <Separator className="my-6" />

              {/* Post Settings */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Post Settings</h2>
                <Separator />

                <div className="space-y-2">
                  <label className="text-sm font-medium">Slug</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md border bg-background"
                    value={formData.slug}
                    onChange={e => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  />
                </div>


                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.isFeatured}
                      onChange={e => setFormData(prev => ({ ...prev, isFeatured: e.target.checked }))}
                    />
                    Featured Post
                  </label>
                </div>
              </div>

              {/* Enhanced Post Settings */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Post Settings</h2>
                <Separator />

                <div className="space-y-4">
                  {/* Status and Features */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Status
                      </label>
                      <select
                        className="w-full p-2 rounded-md border bg-background"
                        value={formData.isPublished ? 'published' : 'draft'}
                        onChange={e => setFormData(prev => ({ 
                          ...prev, 
                          isPublished: e.target.value === 'published' 
                        }))}
                      >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Star className="w-4 h-4" />
                        Priority
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        className="w-full p-2 rounded-md border bg-background"
                        value={formData.priority}
                        onChange={e => setFormData(prev => ({ 
                          ...prev, 
                          priority: parseInt(e.target.value) 
                        }))}
                      />
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <ListFilter className="w-4 h-4" />
                      Categories
                    </label>
                    <div className="flex flex-wrap gap-2 p-2 border rounded-md bg-background">
                      {CATEGORIES.map(category => (
                        <label
                          key={category}
                          className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-colors ${
                            formData.categories.includes(category)
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-foreground/10 hover:bg-foreground/20'
                          }`}
                        >
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={formData.categories.includes(category)}
                            onChange={e => {
                              const updatedCategories = e.target.checked
                                ? [...formData.categories, category]
                                : formData.categories.filter(c => c !== category)
                              setFormData(prev => ({ ...prev, categories: updatedCategories }))
                            }}
                          />
                          {category}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Tags className="w-4 h-4" />
                      Tags
                    </label>
                    <input
                      type="text"
                      placeholder="Add tags separated by commas"
                      className="w-full p-2 rounded-md border bg-background"
                      value={formData.tags.join(', ')}
                      onChange={e => setFormData(prev => ({ 
                        ...prev, 
                        tags: e.target.value.split(',').map(tag => tag.trim()) 
                      }))}
                    />
                  </div>

                  {/* Language */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <Languages className="w-4 h-4" />
                      Language
                    </label>
                    <select
                      className="w-full p-2 rounded-md border bg-background"
                      value={formData.language}
                      onChange={e => setFormData(prev => ({ 
                        ...prev, 
                        language: e.target.value 
                      }))}
                    >
                      {LANGUAGES.map(lang => (
                        <option key={lang.code} value={lang.code}>
                          {lang.name}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>
              </div>
              <ScrollBar />
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  )
}
