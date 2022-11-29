import React from "react";
import {useState} from "react";


function App() {

  const [number, setNumber] = useState('');
  const format = number.match(/.{1,4}/g);

  const [name, setName] = useState('');

  const [month, setMonth] = useState('');

  const [year, setYear] = useState('');


  return (
    <div className="App">
      <div className="firstCard">
        <p className="cardNumber" >{Array.isArray(format) ? format.join(' ') : '0000 0000 0000 0000'}</p>
        <p className="cardName" >{name.length > 0 ? name : 'Jane Appleseed'}</p>
        <p className="cardDate" >{month.length > 0 ? month : '00'}/{year.length > 0 ? month : '00'}</p>
        
      </div>
      <div className='colLeft column'>
      </div>
      <div className='colRight column'>
        <form>
          <label>Cardholder name</label>
          <input type="text" placeholder="e.g. Jane Appleseed" value={name} onChange={e => setName(e.target.value)}></input>
          <label>Card number</label>
          <input type="tel" pattern="\d*" maxlength="16" value={number} placeholder="e.g. 1234 5678 1234 5678" onChange={e => setNumber(e.target.value)}></input>
          <div className="inputs">
            <div className="dates">
              <label>Exp. date (mm/y)</label>
              <div>
                <input type='number' placeholder="MM" value={month} onChange={e => setMonth(e.target.value)}></input>
                <input type='number' placeholder="YY" value={year} onChange={e => setYear(e.target.value)}></input>
              </div>
            </div>
            <div>
              <label>CVC</label>
              <input type="number" placeholder="123"></input>
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default App;
