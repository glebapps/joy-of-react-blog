import React from 'react'

import BlogList from '@/components/BlogList'

import styles from './homepage.module.css'

function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      <BlogList />
    </div>
  )
}

export default Home
