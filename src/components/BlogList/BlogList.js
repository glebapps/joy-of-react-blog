import React from 'react'
import BlogSummaryCard from '@/components/BlogSummaryCard'
import { getBlogPostList } from '@/helpers/file-helpers'

async function BlogList() {
  const posts = await getBlogPostList()

  return (
    <>
      {posts.map(({ slug, title, abstract, publishedOn }) => (
        <BlogSummaryCard
          key={slug}
          slug={slug}
          title={title}
          abstract={abstract}
          publishedOn={publishedOn}
        />
      ))}
    </>
  )
}

export default BlogList
