import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Navbar from '@/components/Navbar';
import { Button, Stack, Typography, TextField } from '@mui/material';
import { Container } from '@mui/system';
import { getRandomInt } from "@/utils";
import { Hiragana } from "@/types";

export default function SimpleHiragana() {

  const [hiragana, setHiragana] = useState<Array<Hiragana>>([]);
  const [currentHiragana, setCurrentHiragana] = useState<Hiragana | null>(null);
  const [started, setStarted] = useState<boolean>(false);
  const [userInput, setUserInput] = useState<string>('');
  const [numCorrect, setNumCorrect] = useState<number>(0);
  const [numAttempts, setNumAttempts] = useState<number>(0);

  useEffect( () => {
    async function fetchData() {
      try {
        const queryResult = await fetch(`http://localhost:3000/api/hiragana`);
        const json = await queryResult.json();
        setHiragana(json.result);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  function startApp () {
    changeCurrentHiragana();
    setStarted(true);
  }

  function changeCurrentHiragana () {
    const rndIndx = getRandomInt(hiragana.length);
    setCurrentHiragana(hiragana[rndIndx]);
  }

  function evaluateAnswer() {
    if (userInput === currentHiragana?.romanji) {
      changeCurrentHiragana();
      setNumCorrect(numCorrect + 1);
    }
    setNumAttempts(numAttempts + 1);
    setUserInput('');
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      evaluateAnswer();
    }
  }

  let topContent = null;
  let bottomContent = null;
  if (started === true && currentHiragana !== null) {
    topContent = <Typography variant='h1'>{ currentHiragana.symbol}</Typography>;
    // TODO: parameterize colors of text field
    bottomContent = <>
      <TextField 
        sx={{ input: { color: '#11D0EE', caretColor: '#11D0EE' } }}
        color='primary' 
        focused 
        label='Romanji'
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}>
      </TextField>
      <Typography variant='h3'>{numCorrect}/{numAttempts}</Typography>
    </>
  } else {
    topContent = <Typography variant='h3'>Simple Hiragana</Typography>
    bottomContent = <Button onClick={startApp}>Start</Button>;
  }


  return (
    <>
      <Head>
        <title>Simple Hiragana</title>
      </Head>
      <Navbar />
      <Container>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
        >
          { topContent }
          { bottomContent }
        </Stack>
      </Container>
    </>
  )
}