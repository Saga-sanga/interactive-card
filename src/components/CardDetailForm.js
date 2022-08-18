import React from "react";
import Cleave from "cleave.js/react";

export default function CardDetailForm({onSubmitButton, setUserName, setCardNo, setCardMonth, setCardYear, setCVC}) {
  const errorMessage = "Can't be blank";
  
  const validateInput = (e) => (/[a-z]/ig.test(e.target.value) === true) || (e.target.value === '')? 
    e.currentTarget.classList.add('red-error-border'):
    e.currentTarget.classList.remove('red-error-border');

  const checkError = (e) => {
    e.preventDefault();
    console.log(e.target.same)
  }
  
  return (
    <section className="flex-[2_1_66.666667%] flex justify-center items-center">
      <form 
        className="flex flex-col gap-y-4 w-2/5 font-semibold ml-40"
        onSubmit={checkError}
      >
        <fieldset className="flex flex-col gap-y-1">
          <label htmlFor="holderName" className="text-xs">CARDHOLDER NAME</label>
          <input 
            onChange={(e) => {
              setUserName(e.target.value);
              e.target.value === "" ? e.currentTarget.classList.add('red-error-border'):
              e.currentTarget.classList.remove('red-error-border');
            }}
            className="
              placeholder:text-light-grayish-violet 
              placeholder:font-medium 
              border border-solid rounded-lg 
              border-light-grayish-violet px-3 py-2
              outline-none active-border" 
            id="holderName" 
            placeholder="e.g. Jane Appleseed"
            type="text"
            maxLength={30}
            name="same"
          />
          <span className="text-[12px] text-red-error tracking-normal">{errorMessage}</span>
        </fieldset>

        <fieldset className="flex flex-col gap-y-1">
          <label htmlFor="cardNo" className="text-xs">CARD NUMBER</label>
          <Cleave
            id="cardNo" 
            placeholder="e.g. 1234 5678 9123 0000"
            className="
              placeholder:text-light-grayish-violet 
              placeholder:font-medium border 
              border-solid rounded-lg border-light-grayish-violet 
              px-3 py-2 outline-none active-border" 
            // options={{creditCard: true}}
            options={{blocks: [4,4,4,4]}}
            onChange={(e) => {
              setCardNo(e.target.value);
              validateInput(e);
            }}
          />
        </fieldset>

        <div className="flex flex-row gap-x-4">
          <fieldset className="flex flex-col gap-y-1 w-1/2">
            <label className="text-xs" htmlFor="monthDate">EXP. DATE (MM/YY)</label>
            <div className="flex flex-row gap-x-2" id="monthDate">
              <input
                onChange={(e) => {
                  setCardMonth(e.target.value);
                  validateInput(e);
                }}
                className="
                  w-2/5 flex-1 placeholder:text-light-grayish-violet 
                  placeholder:font-medium border border-solid 
                  rounded-lg border-light-grayish-violet px-3 py-2
                  outline-none active-border"
                placeholder="MM"
                type="tel"
                pattern="/^\d*$/"
                maxLength={2}
              />
              <input
                onChange={(e) => {
                  setCardYear(e.target.value);
                  validateInput(e);
                }}
                className="
                  w-2/5 flex-1 placeholder:text-light-grayish-violet 
                  placeholder:font-medium border border-solid 
                  rounded-lg border-light-grayish-violet px-3 py-2
                  outline-none active-border"
                placeholder="YY"
                type="text"
                maxLength={2} 
              />
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-y-1 w-1/2">
            <label className="text-xs" htmlFor="">CVC</label>
            <input
              onChange={(e) => {
                setCVC(e.target.value);
                validateInput(e);
              }}
              className="
                w-full placeholder:text-light-grayish-violet 
                placeholder:font-medium border border-solid 
                rounded-lg border-light-grayish-violet px-3 py-2
                outline-none active-border"
              type="text" 
              placeholder="e.g. 123"
              maxLength={3}
            />
          </fieldset>
        </div>
        <button 
          type="submit"
          className="bg-very-dark-violet hover:bg-violet-900 text-white rounded-lg py-3 mt-4"
          // onClick={onSubmitButton}
        >Confirm</button>
      </form>
    </section>
  )
}