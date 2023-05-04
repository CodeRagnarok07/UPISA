import React from 'react'

export default function Video({url}) {


  return (
    <div class="container cont-video ">
      <iframe src={url} allow="autoplay" >
      </iframe>
    </div>
  )
}
