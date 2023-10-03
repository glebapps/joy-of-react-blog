import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { BLOG_TITLE } from '@/constants'
import BlogHero from '@/components/BlogHero'

import styles from './postSlug.module.css'
import { loadBlogPost } from '@/helpers/file-helpers'
import COMPONENT_MAP from '@/helpers/mdx-components'

const getBlogPost = React.cache(async (slug) => {
  return loadBlogPost(slug)
})

export async function generateMetadata({ params }) {
  const { frontmatter } = await getBlogPost(params.postSlug)

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  }
}

async function BlogPost({ params }) {
  const post = await getBlogPost(params.postSlug)
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
