
import './App.css';
// import { Navbar } from 'flowbite-react';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import AdresseTable from './components/api/fetch'
import Message from './components/message';
import Counter from './components/counter';

export default function App() {
  return(
    <div className='App'> 
   

<Header />
<AdresseTable />
<Footer />





    </div>
  );
}

