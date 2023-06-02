
import './App.css';
import { Navbar } from 'flowbite-react';
import Greet from './components/footer';
import Welcome from './components/header';
import Main from './components/main';
import AdresseTable from './components/api/fetch'
import Message from './components/message';
import Counter from './components/counter';

export default function App() {
  return(
    <div className='App'> 
   

<Welcome />
<AdresseTable />
<Greet />





    </div>
  );
}

