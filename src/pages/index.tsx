import Head from "next/head";
import Link from "next/link";

import React, { useState } from 'react';

import { api } from "~/utils/api";
import { generateText } from '~/utils/api';

export default function Home() {
  const [userQuestion, setUserQuestion] = useState('');
  const [claudeResponse, setClaudeResponse] = useState('');
  const handleChange = (event) => {
    setUserQuestion(event.target.value);
  }

  const handleSubmit = async () => {
    const prompt = `\n\nHuman: ${userQuestion}\n\nAssistant:`;
    
    // call Claude API here with prompt
    // Assuming the API call returns a promise that resolves with the generated text
    const response = await generateText(userQuestion);
    setClaudeResponse(response);
  };
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
             Generate new bedtime stories within seconds.
          </h1>
      
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Share with us a lesson you'd like to share with your child:
          </label>

          <input
            id="user-question" 
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            value={userQuestion}
          />

          {/* <button onClick={handleSubmit}>Submit</button> */}
          <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>

        </div>
      </main>
    </>
  );
}