import React from "react";

export default function CardDetailForm({onSubmitButton}) {
  return (
    <section className="flex-[2_1_66.666667%] flex justify-center items-center">
      <form className="flex flex-col gap-y-4 w-2/5 font-semibold ml-40">
        <fieldset className="flex flex-col gap-y-1">
          <label htmlFor="holderName" className="text-xs">CARDHOLDER NAME</label>
          <input 
            className="
              placeholder:text-light-grayish-violet 
              placeholder:font-medium 
              text-sm border border-solid rounded-lg 
              border-light-grayish-violet px-3 py-2
              outline-none active-border" 
            id="holderName" 
            placeholder="e.g. Jane Appleseed"
            type="text" 
          />
        </fieldset>

        <fieldset className="flex flex-col gap-y-1">
          <label htmlFor="cardNo" className="text-xs">CARD NUMBER</label>
          <input 
            className="
              placeholder:text-light-grayish-violet 
              placeholder:font-medium text-sm border 
              border-solid rounded-lg border-light-grayish-violet 
              px-3 py-2 outline-none active-border" 
            id="cardNo" 
            placeholder="e.g. 1234 5678 9123 0000"
            type="text" 
          />
        </fieldset>

        <div className="flex flex-row gap-x-4">
          <fieldset className="flex flex-col gap-y-1 w-1/2">
            <label className="text-xs" htmlFor="">EXP. DATE (MM/YY)</label>
            <div className="flex flex-row gap-x-2">
              <input
                className="
                  w-2/5 flex-1 placeholder:text-light-grayish-violet 
                  placeholder:font-medium text-sm border border-solid 
                  rounded-lg border-light-grayish-violet px-3 py-2
                  outline-none active-border"
                placeholder="MM"
                type="text"
              />
              <input
                className="
                  w-2/5 flex-1 placeholder:text-light-grayish-violet 
                  placeholder:font-medium text-sm border border-solid 
                  rounded-lg border-light-grayish-violet px-3 py-2
                  outline-none active-border"
                placeholder="YY"
                type="text" 
              />
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-y-1 w-1/2">
            <label className="text-xs" htmlFor="">CVC</label>
            <input
              className="
                w-full placeholder:text-light-grayish-violet 
                placeholder:font-medium text-sm border border-solid 
                rounded-lg border-light-grayish-violet px-3 py-2
                outline-none active-border"
              type="text" 
              placeholder="e.g. 123"
            />
          </fieldset>
        </div>
        <button 
          type="submit"
          className="bg-very-dark-violet text-white rounded-lg py-3 mt-4"
          onClick={onSubmitButton}
        >Confirm</button>
      </form>
    </section>
  )
}