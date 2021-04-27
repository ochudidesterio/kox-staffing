import React from 'react'
import ReacrRoundedImage from 'react-rounded-image'
import image from './img1.jpg'
function ImageOne() {
  return (
    <div>
      <ReacrRoundedImage image={image}
      imageWidth="130"
      imageHeight="130"
      />
    </div>
  )
}

export default ImageOne
