const Calculator = () => (
  <div className="wrapper">
    <h2>Lets do some Maths!</h2>
    <div className="container">
      <div className="output">
        <p>0</p>
      </div>
      <div className="buttons">
        <button type="button" name="AC">AC</button>
        <button type="button" name="+/-"> +/-</button>
        <button type="button" name="%">%</button>
        <button type="button" name="/" className="operator">፥</button>
        <br />
        <button type="button" name="7">7</button>
        <button type="button" name="8"> 8</button>
        <button type="button" name="9">9</button>
        <button type="button" name="x" className="operator">x</button>
        <br />
        <button type="button" name="4">4</button>
        <button type="button" name="5"> 5</button>
        <button type="button" name="6">6</button>
        <button type="button" name="+" className="operator">-</button>
        <br />
        <button type="button" name="1">1</button>
        <button type="button" name="2"> 2</button>
        <button type="button" name="3">3</button>
        <button type="button" name="+" className="operator">+</button>
        <br />
        <button type="button" name="0" className="zero">0</button>
        <button type="button" name="."> .</button>
        <button type="button" name="=" className="operator">=</button>
        <br />
      </div>
    </div>
  </div>
);
export default Calculator;
