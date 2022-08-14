import completeIcon from '../images/icon-complete.svg';

export default function CompleteState() {
  return (
    <section className="flex-[2_1_66.666667%] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-y-4 w-2/5 font-semibold ml-40 text-center">
        <img className='self-center max-w-max' src={completeIcon} alt="Dark violet circle with a white tick mark" />
        <span className='text-[28px] tracking-[0.15em] mt-4'>THANK YOU!</span>
        <span className='text-dark-grayish-violet tracking-wide'>We've added your card details</span>
        <button 
            type="submit"
            className="bg-very-dark-violet text-white rounded-lg py-3 mt-6 w-full"
        >Continue</button>
      </div>   
    </section>
  )
}