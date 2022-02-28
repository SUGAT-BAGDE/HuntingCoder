import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blogs = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <div className={styles.blogitem}>
            <Link href='/blogpost/learn-javascript'>
            <a>
              <h3>How to learn Javascript in 2022?</h3>
              <p>Javascript is language used to write logic for web apps</p>
            </a>
            </Link>
          </div>
          <div className="blockitem">
            <h3>How to learn Javascript in 2022?</h3>
            <p>Javascript is language used to write logic for web apps</p>
          </div>
          <div className="blockitem">
            <h3>How to learn Javascript in 2022?</h3>
            <p>Javascript is language used to write logic for web apps</p>
          </div>
      </main>
    </div>
  )
}

export default Blogs