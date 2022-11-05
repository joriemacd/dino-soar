
import { React, useState} from 'react'
import styles from './App.css';
import DinoBucks from './components/dinobucks';
import RocketShipModal from './components/RocketShipModal';

function App() {

  const [isOpen, setIsOpen] = useState(false);
 
 
  return (
    <div className="App">
      <DinoBucks></DinoBucks>
    
      <div className ="SampleModal">
      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <RocketShipModal setIsOpen={setIsOpen} />}
      </div>
      {/* <div className="counter">
          <h1>Dino Bucks</h1>
          <h3>{counter}</h3>
            <span className="counter__output"></span>
            <div className="btn__container">
              <button className="control__btn" onClick={increase} >Get Bucks</button>
      </div>
  </div> */}

    </div>

  );
}

export default App;
