import React from "react";

export default function CardDetailForm() {
  return (
    <section className="basis-2/3 flex justify-center items-center">
      <form className="flex flex-col gap-y-4 w-2/5 font-semibold">
        <fieldset className="flex flex-col gap-y-1">
          <label htmlFor="holderName" className="text-xs">CARDHOLDER NAME</label>
          <input 
            className="placeholder:text-light-grayish-violet placeholder:font-medium text-sm border border-solid rounded border-light-grayish-violet p-3" 
            id="holderName" 
            placeholder="e.g. Jane Appleseed"
            type="text" 
          />
        </fieldset>

        <fieldset className="flex flex-col gap-y-1">
          <label htmlFor="cardNo" className="text-xs">CARD NUMBER</label>
          <input 
            className="placeholder:text-light-grayish-violet placeholder:font-medium text-sm border border-solid rounded border-light-grayish-violet p-3" 
            id="cardNo" 
            placeholder="e.g. 1234 5678 9123 0000"
            type="text" 
          />
        </fieldset>

        <div className="flex flex-row">
          <fieldset className="flex flex-col gap-y-1 w-1/2">
            <label htmlFor="">EXP. DATE (MM/YY)</label>
            <div className="flex flex-row">
              <input
                className="flex-1 placeholder:text-light-grayish-violet placeholder:font-medium text-sm border border-solid rounded border-light-grayish-violet p-3"
                placeholder="MM"
                type="text"
              />
              <input
                className="flex-1 placeholder:text-light-grayish-violet placeholder:font-medium text-sm border border-solid rounded border-light-grayish-violet p-3"
                placeholder="YY"
                type="text" 
              />
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-y-1 w-1/2">
            <label htmlFor="">CVC</label>
            <input
              className="placeholder:text-light-grayish-violet placeholder:font-medium text-sm border border-solid rounded border-light-grayish-violet p-3"
              type="text" 
              placeholder="e.g. 123"
            />
          </fieldset>
        </div>
        <button className="bg-very-dark-violet text-white rounded py-3">Confirm</button>
      </form>
    </section>
  )
}