import Head from 'next/head'
import Navbar from '@/components/Navbar';
import { Typography } from '@mui/material';
import AppCard from '@/components/AppCard';
import { Container } from '@mui/system';
import { appList } from '@/globals';

export default function Apps() {
  return (
    <>
      <Head>
        <title>Apps</title>
      </Head>
      <Navbar />
      <Container>
        <Typography variant='h3'>Apps</Typography>
        {
          appList.map((app) => 
            <AppCard key={app.appName} {...app} />
          )
        }
      </Container>
    </>
  )
}