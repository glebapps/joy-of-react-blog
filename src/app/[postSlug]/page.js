import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

import { BLOG_TITLE } from '@/constants'
import BlogHero from '@/components/BlogHero'

import styles from './postSlug.module.css'
import { loadBlogPost } from '@/helpers/file-helpers'
import COMPONENT_MAP from '@/helpers/mdx-components'

const getBlogPost = React.cache(async (slug) => {
  return loadBlogPost(slug)
})

export async function generateMetadata({ params }) {
  const post = await getBlogPost(params.postSlug)

  if (!post) {
    return null
  }

  const { title, abstract } = post.frontmatter

  return {
    title: `${title} • ${BLOG_TITLE}`,
    description: abstract,
  }
}

async function BlogPost({ params }) {
  const post = await getBlogPost(params.postSlug)
  if (!post) {
    notFound()
  }
  const { title, publishedOn } = post.frontmatter

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <MDXRemote source={post.content} components={COMPONENT_MAP} />
      </div>
    </article>
  )
}

export default BlogPost
