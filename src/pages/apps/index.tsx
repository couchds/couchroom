import Head from 'next/head'
import Navbar from '@/components/Navbar';
import styles from '@/styles/Home.module.css'
import { Typography } from '@mui/material';

export default function Apps() {
  return (
    <>
      <Head>
        <title>Apps</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Typography variant='h3'>Apps</Typography>
      </main>
    </>
  )
}