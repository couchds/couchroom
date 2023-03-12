import Head from 'next/head'
import Navbar from '@/components/Navbar';
import styles from '@/styles/Home.module.css'
import { Typography } from '@mui/material';
import AppCard from '@/components/AppCard';
import { Container } from '@mui/system';

export default function Apps() {
  return (
    <>
      <Head>
        <title>Apps</title>
      </Head>
      <Navbar />
      <Container>
        <Typography variant='h3'>Apps</Typography>
        <AppCard appName='First App' />
      </Container>
    </>
  )
}