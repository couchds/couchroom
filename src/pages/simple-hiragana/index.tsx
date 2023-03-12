import Head from 'next/head'
import Navbar from '@/components/Navbar';
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

export default function SimpleHiragana() {
  return (
    <>
      <Head>
        <title>Simple Hiragana</title>
      </Head>
      <Navbar />
      <Container>
        <Typography variant='h3'>Simple Hiragana</Typography>
        <Button>Start</Button>
      </Container>
    </>
  )
}