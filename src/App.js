import React, { useState, useEffect } from 'react';
import './App.css';
import ccs from './pic/CCS-tran.png'
import lang from './pic/lang-button.png'
import price from './pic/price-button.png'
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev === 100) {
          return 0; // Reset to 0 to create a looping effect
        }
        return prev + 1; // Increment progress
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
         <div className="head1"><h1>Welcome</h1></div>
         <div className="head2"><h2>Select a connector to start</h2></div>
         <div className="mid">
            <div className="mid1"> 
                <div><p className="mid-div-p" style={{display:'flex',justifyContent:'center'}}>A</p></div>
                <div style={{display:'flex',justifyContent:'center'}}>CCS-1</div>
                <div style={{display:'flex',justifyContent:'center'}} ><img src={ccs} alt="CCS" className="ccs-img"   /></div>
                <div>
                  <p className="mid-div-p" style={{color:'#08c208',display:'flex',justifyContent:'center'}}>
                   Available</p>
                </div>
                <div><p className="mid-div-p"style={{display:'flex',justifyContent:'center'}} >240KW</p> </div>
            </div>
            <div className="mid2">
                <div><p className="mid-div-p" style={{display:'flex',justifyContent:'center'}} >B</p></div>
                <div style={{display:'flex',justifyContent:'center'}} >CCS-2</div>
                <div>
                <div style={{ width: 100   }}>
                  <CircularProgressbar
                    value={progress}
                    text={`${progress}%`}
                    styles={buildStyles({
                      pathColor: '#0c96d6',
                      textColor: '#0c96d6',
                      trailColor: '#d6d6d6',
                    })}
                  />
                </div>
                </div>
                <div><p className="mid-div-p" style={{color:'#0c96d6',display:'flex',justifyContent:'center'}} >Charging</p> </div>
                <div><p className="mid-div-p" style={{display:'flex',justifyContent:'center'}} >142.5 kW</p> </div>
            </div>
         </div>
         <div className="last">
            <div></div>
            <div  ><button className="b-1" style={{marginRight:'20px'}}><img src={lang}  alt="langauge" /><p className="mid-div-p">Language</p> </button></div>
            <div><button className="b-2"><img src={price} alt="price"  /><p className="mid-div-p">Pricing</p> </button></div>
            <div></div>
         </div>
         <footer>
          <hr></hr>
            <p>© MAK Controls</p>
         </footer>
       
    </div>
  );
}

export default App;
