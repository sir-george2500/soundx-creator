import React from 'react'
import { useLottie } from "lottie-react";
import googleLoad from "../public/assets/animations/googleanimate.json"

export const GoogleAnimationView = () => {

 

  const textLoading={
    padding:28,
    paddingTop:48,
    paddingLeft:18,
  }

  const style = {
    height: 50,
    marginTop: "20px",
    width: 50
  }

  const options = {
    animationData: googleLoad,
    loop: true
  };

  const { View } = useLottie(options, style);

  return (
    <div className='flex justify-between items-center'>
      <div>
       {View}
      </div>
      <div>
        <p style={textLoading}>Loading</p>
      </div>
    </div>
  )
}
