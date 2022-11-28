
function App() {
  return (
    <div className="App">
      <div className='colLeft column'>
      </div>
      <div className='colRight column'>
        <form>
          <label>Cardholder name</label>
          <input type="text" placeholder="e.g. Jane Appleseed"></input>
          <label>Card number</label>
          <input type="number" placeholder="e.g. 1234 5678 1234 5678"></input>
          <div className="inputs">
            <div className="dates">
              <label>Exp. date (mm/y)</label>
              <div>
                <input type='number' placeholder="MM"></input>
                <input type='number' placeholder="YY"></input>
              </div>
            </div>
            <div>
              <label>CVC</label>
              <input type="number" placeholder="123"></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
