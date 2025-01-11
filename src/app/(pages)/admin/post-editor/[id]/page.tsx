'use client'
import { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import PostEditor from '../page'

export default function EditPost() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  return <PostEditor postId={id} />
} 