import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [input, setInput] = useState('');
  const [markdown, setMarkdown] = useState('')

  const saveMarkdown = () => {
      const text = unified()
        .use(remarkParse)
        .use(remarkHtml)
        .processSync(input)
    
    setMarkdown(String(text))
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div dangerouslySetInnerHTML={{__html: markdown}} />
        <div className={styles.container}>
          <textarea 
            className={styles.input} 
            value={input} 
            onChange={(e) => {setInput(e.target.value)}}
             />
          <button
            className={styles.button}
            onClick={saveMarkdown}
          >Post</button>
        </div>
      </main>
    </>
  )
}
