import React from 'react'
import BlogSummaryCard from '@/components/BlogSummaryCard'
import { getBlogPostList } from '@/helpers/file-helpers'

async function BlogList() {
  const posts = await getBlogPostList()

  return (
    <>
      {posts.map(({ slug, ...delegated }) => (
        <BlogSummaryCard key={slug} slug={slug} {...delegated} />
      ))}
    </>
  )
}

export default BlogList
