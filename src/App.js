import React, { useState } from 'react'
import './index.css';



const App = () => {

  // concept of useState
  // const state = useState();
  const [count, newVal] = useState(0);

  // let count = 0;
  const IncVal = () => {
    // let x = Math.floor(Math.random() * 10);
    newVal(count + 1);

    // newVal(x);
    // console.log("Clicked " + count++);

  };



  const DeVal = () => {
    if (count > 0) {
      newVal(count - 1);
      // console.log("Clicked " + count++);
    } else {
      alert('Sorry!, Zero Limit Reached');
      newVal(0);
    }
  };


  // Hooks for Time State
  let time = new Date().toLocaleTimeString();

  const [curTime, UpdateTime] = useState(time);

  // Callback Fun
  let dyTime = () => {
    time = new Date().toLocaleTimeString();
    UpdateTime(time);
  }

  // Setting Interval
  setInterval(dyTime, 1000);


  // Changing The Mode 
  let color = "#192734";
  const [bg, newBg] = useState(color);
  const [name, newName] = useState('Click To White Mode');
  const [newColor, txtColor] = useState('white');
  const [tcolor, nColor] = useState('darkgray');



  const bgDark = () => {
    newBg("#fff");
    newName('Doouble Click To Dark Mode');
    txtColor('black');
    nColor('black');
  };

  // On Double Click Back To Normal
  const bgBack = () => {
    newBg("#192734");
    newName('Click To White Mode');
    txtColor('white');
    nColor('darkgray');
  }


  // useEffect
  // useEffect(()=>{
  //   alert("I am Clicked");
  // }, [count]);

  return (
    <>
      <div style={{ backgroundColor: bg }}>

        <div className='container'>
          <h2 style={{ color: newColor }}>Increament / Decreament The Value</h2>

          {/* Show Time */}
          <div>
            <h1 className='showTime'>
              Current Time : <span style={{ backgroundColor: tcolor }}>{curTime}</span>
              <button onClick={bgDark} onDoubleClick={bgBack}> {name} </button>
            </h1>
          </div>

          {/* Show Content */}
          <div className='mainDiv'>
            <h1>{count}</h1>
            <div className='btn'>
              <button className='sinbtn' onClick={IncVal}>+</button>
              <button className='sinbtn' onClick={DeVal}>-</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;