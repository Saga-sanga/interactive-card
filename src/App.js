// import desktopBG from './images/bg-main-desktop.png';
import { useState } from 'react';
import './App.css';
import CardDetailForm from './components/CardDetailForm';
import CardGraphics from './components/CardGraphics';
import CompleteState from './components/CompleteState';

function App() {
  const [submit, setSubmit] = useState(false);

  const onSubmitButton = () => {
    setSubmit(true);
  };

  return (
    <main className='w-screen h-screen max-w-1440 flex flex-row'>
      {/* <img className='h-screen flex-[1_1_33.333333%]' src={desktopBG} alt='Purple gradient background'/> */}
      <CardGraphics/>
      {
        submit === false ? <CardDetailForm onSubmitButton={onSubmitButton}/> : <CompleteState/>
      }     
    </main>
  );
}

export default App;
