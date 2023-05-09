import React from 'react'
import Video from '@/components/Video'

import Head from 'next/head'
import Layer from '../components/layer'

export default function index() {



  console.log(process.env.NEXT_PUBLIC_API_URL);

  return (

    <>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layer >


        <div className="bg bg-primary">

          {/* <Video url={"https://drive.google.com/file/d/1E5qbD3NhY2VYfUpk5ORbGm99cdGOCMWh/preview"} /> */}

        </div>

   
      </Layer>

    </>
  )
}
