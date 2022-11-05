import { React, useState } from 'react'
import App from '../App';
import RocketShipModal from './RocketShipModal';
import styles from '../App.css';

const DinoBucks = (props) => {
    const [DinoCounter, setCounter] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

  //increase counter
    const increase = () => {
    setCounter(DinoBuckCount => DinoBuckCount + 1);

  }; 
    return (
        <div className="counter">
          <h1>Dino Bucks</h1>
          <h3>{DinoCounter}</h3>
            <span className="counter__output"></span>
            <div className="btn__container">
              <button className="control__btn" onClick={increase} >Get Bucks</button>
            </div>
            <div className="purchaseOptions">
                {DinoCounter >= 50 && 
                    <div className ="SampleModal">
                      <h3>You Have Enough Money to Go Shopping!</h3>
                      <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
                          Go Shopping
                      </button>
                        {isOpen && <RocketShipModal setIsOpen={setIsOpen} />}
      </div>
                }
            </div>
        </div>
    )
}

export default DinoBucks