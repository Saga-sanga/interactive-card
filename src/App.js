import desktopBG from './images/bg-main-desktop.png';
import './App.css';
import CardDetailForm from './components/CardDetailForm';

function App() {
  return (
    <main className='w-screen max-w-1440 flex flex-row'>
      <img className='h-screen basis-1/3' src={desktopBG} alt='Purple gradient background'/>
      <CardDetailForm/>
    </main>
  );
}

export default App;
