import React, { useEffect, useState } from 'react'
import styles from '../../styles/BlogPost.module.css'
import Head from 'next/head'
import * as fs from 'fs'
import Error from 'next/error'


const Blog = (props) => {

  function createMarkup(content) {
    return {__html: content};
  }

  return (
    <div className={styles.container}>
      { props.err ? 
      <>
        <Error statusCode={404} title={props.err}/>
        <Head>
          <title>{props.err}</title>
        </Head>
      </>
      :
      <>
        <Head>
          <title>{props.blog && props.blog.title} | Hunting Coder</title>
        </Head>         
        <main className={`${styles.main} ${styles.container}`}>
          <h1>{props.blog && props.blog.title}</h1>
          {props.blog && <div id='myid' dangerouslySetInnerHTML={createMarkup(props.blog.content)}/>}
        </main>
      </>
      }  
 
    </div>
  )
}

export async function getServerSideProps(context) {
  try{
    let blog = await fs.promises.readFile(`blogdata/${context.query.slug.concat(".json")}`, 'utf-8') 
    return {
      props: {blog : JSON.parse(blog)}, // will be passed to the page component as props
    }
  }
  catch(err){
    return {
      props: { err: "No such blog found" }, // will be passed to the page component as props
    }
  }
}

export default Blog;
