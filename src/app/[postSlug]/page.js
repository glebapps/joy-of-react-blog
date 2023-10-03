import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'

import BlogHero from '@/components/BlogHero'

import styles from './postSlug.module.css'
import { loadBlogPost } from '@/helpers/file-helpers'

async function BlogPost({ params }) {
  const post = await loadBlogPost(params.postSlug)
  const { title, publishedOn } = post.frontmatter

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}

export default BlogPost
