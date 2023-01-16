import React, {useState} from 'react'
import './App.css';
import LoopContainer from './loopcontainer'

function App() {

  const [data, setData]= useState([]);

  fetch("https://seeing.onrender.com/api/nature")
  .then((response)=>
       response.json())
  .then((data)=>{
    setData(natures =>{
      return data
    })
  })
  return (
    <>
      <header className="App-header">
      <h1>Nature's pics</h1>
        <h3>Escape to nature with our breathtaking landscapes and discover the wonders of earth with
            our stunning imagery </h3>
        <p> <strong>NOTE</strong> :all the images displayed on this site are from <a href="https://www.pexels.com/">pexels.com</a></p>
      </header>
      <main>
        <div id="dataContainer">
          <LoopContainer  data={data} setData={setData} />
        </div>
      </main>
    </>
  );
}

export default App;
