import React, { useState, useEffect } from 'react';
// import history from '../../History';
import { Consumer } from '../../Context';

const Products = (props) => {
  // console.log('Products Props >>', props);
  const [count, setCount] = useState(0);
  const [decr, setDecrement] = useState(50);

  const handleInc = (() => {
    setCount(count + 1)
  })
  const handleDec = (() => {
    setDecrement(decr - 1)
  })

  useEffect(() => {
    console.log('useEffect Called');
  }, [])


  return (
    <div className="App">
      <h1>Wellcome To The "Products" Page</h1>
      <br></br>
      <h3>Adding : {count}</h3>
      <button onClick={handleInc}>Increment</button>
      <br></br>
      <h3>Down : {decr}</h3>
      <button onClick={handleDec}>Decrement</button>
      <Consumer>
        {value => (
          // console.log('Provider Data >>', value.a)
          <div>
            <h4>Value First : {value.a}</h4>
            <h4>Value Second : {value.b}</h4>
          </div>
        )}
      </Consumer>
    </div>
  );
}

export default Products;
