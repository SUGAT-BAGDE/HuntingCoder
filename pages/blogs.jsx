import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import Head from 'next/head'
import * as fs from 'fs'
import InfiniteScroll from 'react-infinite-scroll-component'

export async function getServerSideProps(context) {
  let data = await fs.promises.readdir('./blogdata');

  let myFile;
  let allBlogs = [];

  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    myFile = await fs.promises.readFile(`blogdata/${element}`, 'utf-8');
    allBlogs.push(JSON.parse(myFile));
  }
  return { props: { allBlogs } }
}

const Blogs = (props) => {

  const [blogs, setBlogs] = useState(props.allBlogs)
  const [hasMore, setHasMore] = useState(true)

  async function fetchData (){
    let num = 0;
    console.log("g"); 
    setTimeout(()=>{
    
      if (blogs.length < 12) {
          blogs.push({title: `${num}`, metadesc:"hello", slug:`${num}`})
          setBlogs(blogs); 
          num = num + 1
      }
      else setHasMore(false)
  }, 500)

  }  

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Blogs | Hunting Coder
        </title>
      </Head>
      <main className={styles.main}>


        <div className={styles.container}>
          <InfiniteScroll
            dataLength={blogs.length} //This is important field to render the next data
            next={fetchData}
            // fetchData={fetchData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          // below props only if you need pull down functionality
          refreshFunction={fetchData}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
          }
          releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
          }
          >


            {blogs.map((blog) => {
              return <div className={styles.blogitem} key={blog.slug}>
                <Link href={`/blogpost/${blog.slug}`}>
                  <a>
                    <h3>{blog.title}</h3>
                    <p>{blog.metadesc.substr(0, 140)}</p>
                  </a>
                </Link>
              </div>
            })}
          </InfiniteScroll>
        </div>
      </main>
    </div>
  )
}

export default Blogs