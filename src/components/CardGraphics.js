import React from "react";
import cardFront from '../images/bg-card-front.png';
import cardBack from '../images/bg-card-back.png';
// import desktopBG from '../images/bg-main-desktop.png';

export default function CardGraphics() {
  return(
    <div className="h-screen basis-1/3">
      <img src={cardFront} alt="Violet Credit Card Front" height={'100%'}/>
      <img src={cardBack} alt="Gray Credit Card Back" height={'100%'}/>
    </div>
  )
}