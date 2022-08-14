// import desktopBG from './images/bg-main-desktop.png';
import './App.css';
import CardDetailForm from './components/CardDetailForm';
import CardGraphics from './components/CardGraphics';

function App() {
  return (
    <main className='w-screen h-screen max-w-1440 flex flex-row'>
      {/* <img className='h-screen flex-[1_1_33.333333%]' src={desktopBG} alt='Purple gradient background'/> */}
      <CardGraphics/>
      <CardDetailForm/>
    </main>
  );
}

export default App;
