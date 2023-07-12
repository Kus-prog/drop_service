import Header from './components/Header/Header';

import './App.css';
import './index.css';
import Service from './components/Service/Service';
import Banner from './components/Banner/Banner';
import Projects from './components/Projects/Projects';

import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <div className="App">
    <div>
      <div className="white-gradient" />

     <Header/>
     <Banner/>
  
     </div>
     <div className='service'><Service/></div>
    <div className='service'><Projects /></div>
    <div className='w-full h-auto  text-lightText px-4'>
    <div className="max-w-screen-xl mx-auto">
      <Contact/>
    
    </div>
      </div>
      <div className="w-full mx-auto service"><Footer/></div>
   
    
    </div>
    
    
    
  );
}

export default App;
