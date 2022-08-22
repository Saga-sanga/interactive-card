import React, { useState } from "react";
import Cleave from "cleave.js/react";

export default function CardDetailForm({onSubmitButton, setUserName, setCardNo, setCardMonth, setCardYear, setCVC}) {
  // const [errorMessage, setErrorMessage] = useState("Can't be blank");
  let errorMessage = "Can't be blank";
  const form = document.forms[0];
  
  // const validateInput = (e) => (/[a-z]/ig.test(e.target.value) === true) || (e.target.value === '')? 
  //   e.currentTarget.classList.add('red-error-border'):
  //   e.currentTarget.classList.remove('red-error-border');

  const checkError = (e) => {
    e.preventDefault();
    const errorSpan = e.target.querySelectorAll('span');

    //Name error Validation
    if (form.name.value === "") {
      form.name.classList.add('red-error-border');
      errorSpan[0].classList.remove('hidden');
      errorSpan[0].innerHTML = "Can't be blank";
    } else {
      form.name.classList.remove('red-error-border');
      errorSpan[0].classList.add('hidden');
    }

    //Card Number error validation
    if (/[a-z]/ig.test(form.card.value) === true) {
      // setErrorMessage("Wrong format, numbers only");
      form.card.classList.add('red-error-border');
      errorSpan[1].classList.remove('hidden');
      errorSpan[1].innerHTML = "Wrong format, numbers only";
    } else if (form.card.value === '') {
      errorSpan[1].innerHTML = "Can't be blank";
      form.card.classList.add('red-error-border');
      errorSpan[1].classList.remove('hidden');
    } else {
      form.card.classList.remove('red-error-border');
      errorSpan[1].classList.add('hidden');
    }

    //Card Expiry Month error validation
    if (form.month.value === "") {
      form.month.classList.add('red-error-border');
    } else {
      form.month.classList.remove('red-error-border');
    }

    //Card Expiry Year error validation
    if (form.year.value === "") {
      form.year.classList.add('red-error-border');
    } else {
      form.year.classList.remove('red-error-border');
    }

    if (form.month.value === "" || form.year.value === "") {
      errorSpan[2].classList.remove('hidden');
      errorSpan[2].innerHTML = "Can't be blank";
    } else {
      errorSpan[2].classList.add('hidden');
    }

    //Card CVC error validation
    if (form.cvc.value === "") {
      form.cvc.classList.add('red-error-border');
      errorSpan[3].classList.remove('hidden');
      errorSpan[3].innerHTML = "Can't be blank";
    } else {
      form.cvc.classList.remove('red-error-border');
      errorSpan[3].classList.add('hidden');
    }

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
              // e.target.value === "" ? e.currentTarget.classList.add('red-error-border'):
              // e.currentTarget.classList.remove('red-error-border');
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
            name="name"
          />
          <span className="text-[12px] text-red-error tracking-normal hidden"></span>
        </fieldset>

        <fieldset className="flex flex-col gap-y-1">
          <label htmlFor="cardNo" className="text-xs">CARD NUMBER</label>
          <Cleave
            id="cardNo" 
            name="card"
            placeholder="e.g. 1234 5678 9123 0000"
            className="
              placeholder:text-light-grayish-violet 
              placeholder:font-medium border 
              border-solid rounded-lg border-light-grayish-violet 
              px-3 py-2 outline-none active-border" 
            // options={{creditCard: true}}
            options={{blocks: [4,4,4,4]}}
            onChange={e => setCardNo(e.target.value)}
          />
          <span className="text-[12px] text-red-error tracking-normal hidden"></span>
        </fieldset>

        <div className="flex flex-row gap-x-4">
          <fieldset className="flex flex-col gap-y-1 w-1/2">
            <label className="text-xs" htmlFor="monthDate">EXP. DATE (MM/YY)</label>
            <div className="flex flex-row gap-x-2" id="monthDate">
              <input
                onChange={e => setCardMonth(e.target.value)}
                className="
                  w-2/5 flex-1 placeholder:text-light-grayish-violet 
                  placeholder:font-medium border border-solid 
                  rounded-lg border-light-grayish-violet px-3 py-2
                  outline-none active-border"
                placeholder="MM"
                type="tel"
                // pattern="/^\d*$/"
                name="month"
                maxLength={2}
              />
              <input
                onChange={e => setCardYear(e.target.value)}
                className="
                  w-2/5 flex-1 placeholder:text-light-grayish-violet 
                  placeholder:font-medium border border-solid 
                  rounded-lg border-light-grayish-violet px-3 py-2
                  outline-none active-border"
                placeholder="YY"
                type="text"
                name="year"
                maxLength={2} 
              />
            </div>
            <span className="text-[12px] text-red-error tracking-normal hidden">{errorMessage}</span>
          </fieldset>

          <fieldset className="flex flex-col gap-y-1 w-1/2">
            <label className="text-xs" htmlFor="">CVC</label>
            <input
              onChange={e => setCVC(e.target.value)}
              className="
                w-full placeholder:text-light-grayish-violet 
                placeholder:font-medium border border-solid 
                rounded-lg border-light-grayish-violet px-3 py-2
                outline-none active-border"
              type="text" 
              placeholder="e.g. 123"
              name="cvc"
              maxLength={3}
            />
            <span className="text-[12px] text-red-error tracking-normal hidden">{errorMessage}</span>
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