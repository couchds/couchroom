import React, { useEffect } from "react"
import Head from 'next/head'
import Navbar from '@/components/Navbar';
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';

export default function SimpleHiragana() {

  useEffect( () => {
    async function fetchData() {

      try {
        const queryResult = await fetch(`http://localhost:3000/api/hiragana`);
        const json = await queryResult.json();
        console.log(json)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  });

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