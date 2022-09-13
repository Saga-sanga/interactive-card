import React from "react";
import cardFront from '../images/bg-card-front.png';
import cardBack from '../images/bg-card-back.png';
import cardLogo from '../images/card-logo.svg'
// import desktopBG from '../images/bg-main-desktop.png';

export default function CardGraphics({userName, cardNo, cardMonth, cardYear, cardCVC}) {
  return(
    <div className="md:h-screen md:basis-1/3 card-bg flex flex-col justify-center gap-y-9">
      
      <div className="relative z-20 left-1/3 card-front">
        <img className="absolute left-4 top-4 sm:left-7 sm:top-6 w-2/12" src={cardLogo} alt="Two white spheres" />
        <span className="absolute z-20 left-4 sm:left-7 bottom-1/3 text-white sm:text-[28px] tracking-widest card-no">{cardNo}</span>
        <div className="flex flex-row w-full justify-between absolute pl-4 sm:pl-7 pr-4 sm:pr-14 bottom-4 sm:text-[14px] text-white card-info">        
            <span className="uppercase">{userName}</span>
            <span>{cardMonth}/{cardYear}</span>
        </div>
        <img  src={cardFront} alt="Violet Credit Card Front"/>
      </div>

      <div className="relative left-1/2 card-back">
        <span className="text-white text-[14px] absolute z-10 top-[45%] right-[20%]">{cardCVC}</span>
        <img  src={cardBack} alt="Gray Credit Card Back"/>
      </div>
    </div>
  )
}