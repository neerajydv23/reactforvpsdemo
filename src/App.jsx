import React, { useState } from "react";

const App = () => {
  // let age = 12;
  const [age,setage] = useState(12);
  // 0th index is read only and 1st index is used for changing the state
  const changeage = () => {
    setage(13)
    console.log(age);
  };
  const [time,setTime] = useState(Date.now);
  const changeTime = ()=>{
    setTime(time)
  }
  return (
    <>
      <h1>{age}</h1>
      <button onClick={changeage}>Change Age</button>
      <div>app</div>
    </>
  );
};

export default App;
