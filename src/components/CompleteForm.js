import completeIcon from '../images/icon-complete.svg';

export default function CompleteForm() {
  return (
    <section className="flex-[2_1_66.666667%] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-y-4 md:w-2/5 font-semibold md:ml-40 md:p-0 p-6 mt-14 sm:mt-0 text-center">
        <img className='self-center max-w-max' src={completeIcon} alt="Dark violet circle with a white tick mark" />
        <span className='text-[28px] tracking-[0.15em] mt-4'>THANK YOU!</span>
        <span className='text-dark-grayish-violet tracking-wide'>We've added your card details</span>
        <button 
            type="submit"
            className="bg-very-dark-violet hover:bg-violet-900 text-white rounded-lg py-3 mt-6 w-full"
        >Continue</button>
      </div>   
    </section>
  )
}