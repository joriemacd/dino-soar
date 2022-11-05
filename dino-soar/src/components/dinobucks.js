import { React, useState } from 'react'

const DinoBucks = (props) => {
    const [DinoCounter, setCounter] = useState(0);
 
  //increase counter
    const increase = () => {
    setCounter(DinoBuckCount => DinoBuckCount + 1);

    // let purchase;
    // if (DinoCounter >= 50) {
    //     purchase = <h3>Would you life to purchase a rocket ship?</h3>
    //   } else {
    //     purchase = <h3>There is nothing you can afford. </h3>
    //   }

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
                    <h3>Would you like to purchase a rocket ship?</h3>
                    // <button className="buyShip">Buy Ship</button>
                }
            </div>
        </div>
    )
}

export default DinoBucks