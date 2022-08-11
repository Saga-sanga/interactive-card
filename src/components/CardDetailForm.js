import React from "react";

export default function CardDetailForm() {
  return (
    <section className="basis-2/3 flex justify-center items-center">
      <form className="flex flex-col gap-y-4 font-semibold">
        <fieldset className="flex flex-col gap-y-1">
          <label htmlFor="holderName" className="text-xxs">CARDHOLDER NAME</label>
          <input 
            className="placeholder:text-light-grayish-violet placeholder:font-medium text-[14px] border border-solid rounded border-light-grayish-violet px-3 py-2" 
            id="holderName" 
            placeholder="e.g. Jane Appleseed"
            type="text" 
          />
        </fieldset>
        <fieldset className="flex flex-col gap-y-1">
          <label htmlFor="cardNo" className="text-xxs">CARD NUMBER</label>
          <input 
            className="placeholder:text-light-grayish-violet placeholder:font-medium text-[14px] border border-solid rounded border-light-grayish-violet px-3 py-2" 
            id="cardNo" 
            placeholder="e.g. 1234 5678 9123 0000"
            type="text" 
          />
        </fieldset>
      </form>
    </section>
  )
}