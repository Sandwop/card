import React from "react";
import {useState} from "react";
import valid from './img/icon-complete.svg'


function App() {

  const [number, setNumber] = useState('');
  const format = number.match(/.{1,4}/g);

  const [name, setName] = useState('');

  const [month, setMonth] = useState('');

  const [year, setYear] = useState('');

  const [cvc, setCvc] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmit(true);
  }

  const [isSubmit, setIsSubmit] = useState(false);



  return (
    <div className={isSubmit ? "App submit" : "App notSubmit"}>
      <div className="firstCard">
        <p className="cardNumber" >{Array.isArray(format) ? format.join(' ') : '0000 0000 0000 0000'}</p>
        <p className="cardName" >{name.length > 0 ? name : 'Jane Appleseed'}</p>
        <p className="cardDate" >{month.length > 0 ? month : 'oo'}/{year.length > 0 ? year : 'oo'}</p>
      </div>
      <div className="secondCard">
        <p className="cardCvc" >{cvc.length > 0 ? cvc : 'ooo'}</p>
      </div>
      <div className='colLeft column'>
      </div>
      <div className='colRight column'>
        <form  onSubmit={handleSubmit}>
          <label>Cardholder name</label>
          <input type="text" placeholder="e.g. Jane Appleseed" value={name} onChange={e => setName(e.target.value)}></input>
          <label>Card number</label>
          <input type="tel" pattern="\d*" maxlength="16" value={number} placeholder="e.g. 1234 5678 1234 5678" onChange={e => setNumber(e.target.value)}></input>
          <div className="inputs">
            <div className="dates">
              <label>Exp. date (mm/y)</label>
              <div>
                <input type='tel' maxlength="2" placeholder="MM" value={month} onChange={e => setMonth(e.target.value)}></input>
                <input type='tel' maxlength="2" placeholder="YY" value={year} onChange={e => setYear(e.target.value)}></input>
              </div>
            </div>
            <div>
              <label>CVC</label>
              <input type="tel" maxlength="3" placeholder="123" value={cvc} onChange={e => setCvc(e.target.value)}></input>
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
        <div className="formComplete">
          <p>Form completed</p>
          <img src={valid} alt='Form completed' />
        </div>
      </div>
    </div>
  );
}

export default App;
