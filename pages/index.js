import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../components/main.module.css";

import Main from "../components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [questions, setQuestions] = useState([]);

  async function fetchData() {
    var response = await fetch("/api/getQuestions");
    response = await response.json();
    console.log("response: ", response.data);
    setQuestions(await response.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <Main questions={questions} />
      </div>
    </>
  );
}
