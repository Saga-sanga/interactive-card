import React from "react";
import cardFront from '../images/bg-card-front.png';
import cardBack from '../images/bg-card-back.png';
import cardLogo from '../images/card-logo.svg'
// import desktopBG from '../images/bg-main-desktop.png';

export default function CardGraphics({userName, cardNo, cardMonth, cardYear, cardCVC}) {
  return(
    <div className="h-screen md:basis-1/3 card-bg flex flex-col justify-center gap-y-9">
      
      <div className="relative left-1/3">
        <img className="absolute left-7 top-6 w-2/12" src={cardLogo} alt="Two white spheres" />
        <span className="absolute z-10 left-7 bottom-1/4 text-white text-[28px] tracking-widest">{cardNo}</span>
        <div className="flex flex-row w-full justify-between absolute pl-7 pr-14 bottom-4 text-[14px] text-white">        
            <span className="uppercase">{userName}</span>
            <span>{cardMonth}/{cardYear}</span>
        </div>
        <img  src={cardFront} alt="Violet Credit Card Front" height={'100%'}/>
      </div>
      <div className="relative left-1/2">
        <span className="text-white text-[14px] absolute z-10 top-[45%] right-[20%]">{cardCVC}</span>
        <img  src={cardBack} alt="Gray Credit Card Back" height={'100%'}/>
      </div>
    </div>
  )
}