import { Metadata } from 'next'
import PostEditor from '../page'

export const metadata: Metadata = {
  title: 'Edit Post - Admin Dashboard',
  description: 'Edit your blog post'
}

interface Props {
  params: { id: string }
}

export default function EditPost({ params }: Props) {
  return <PostEditor postId={params.id} />
} 