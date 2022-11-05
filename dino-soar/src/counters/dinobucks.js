import { React, useState } from 'react'

const DinoBucks = (props) => {
    const [counter, setCounter] = useState(0);
 
  //increase counter
    const increase = () => {
    setCounter(count => count + 1);
  }; 
    return (
        <div className="counter">
          <h1>Dino Bucks</h1>
          <h3>{counter}</h3>
            <span className="counter__output"></span>
            <div className="btn__container">
              <button className="control__btn" onClick={increase} >Get Bucks</button>
            </div>
        </div>
    )
}

export default DinoBucks