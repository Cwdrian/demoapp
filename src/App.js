import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)
  
  const increment = () => {
    setCounter(currentValue => {
      return currentValue +1
    })
  }

  const decrement = () => {
    if (counter > 0) {
      setCounter((currentValue) => currentValue - 1);
    }
  };

  return (
<div>
  <h1>Counter: {counter}</h1>
 <button onClick={decrement}>-</button>
 <button onClick={increment}>+</button>
</div>
  );
}

export default App;


// don't manipulate the DOM directly
// don't ever ever ever change a stateful variable directly