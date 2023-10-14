import React from 'react'
import { useLottie } from "lottie-react";
import googleLoad from "../public/assets/animations/googleanimate.json"

export const GoogleAnimationView = () => {

    //Style for the Error animation
  const style = {
        height:50,
        marginTop:"30px",
        width:50
      }

  //get me the animation data
  const options = {
    animationData: googleLoad,
    loop:true
  };

  const { View } = useLottie(options,style);


  return (
    <>

    {View}
    </>
  )
}