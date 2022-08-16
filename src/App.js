// import desktopBG from './images/bg-main-desktop.png';
import { useState } from 'react';
import './App.css';
import CardDetailForm from './components/CardDetailForm';
import CardGraphics from './components/CardGraphics';
import CompleteForm from './components/CompleteForm';

function App() {
  const [submit, setSubmit] = useState(false);
  const [userName, setUserName] = useState("Jane Appleseed");
  const [cardNo, setCardNo] = useState("0000 0000 0000 0000");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");
  const [cardCVC, setCVC] = useState("000");

  const onSubmitButton = () => {
    setSubmit(true);
  };

  return (
    <main className='w-screen h-screen max-w-1440 flex flex-row'>
      {/* <img className='h-screen flex-[1_1_33.333333%]' src={desktopBG} alt='Purple gradient background'/> */}
      <CardGraphics 
        userName={userName}
        cardNo={cardNo}
        cardMonth={cardMonth}
        cardYear={cardYear}
        cardCVC={cardCVC}
      />
      {
        submit === false ? 
          <CardDetailForm 
            setUserName={setUserName}
            setCardNo={setCardNo}
            setCardMonth={setCardMonth}
            setCardYear={setCardYear}
            setCVC={setCVC}
            onSubmitButton={onSubmitButton}/> : 
          <CompleteForm/>
      }     
    </main>
  );
}

export default App;
