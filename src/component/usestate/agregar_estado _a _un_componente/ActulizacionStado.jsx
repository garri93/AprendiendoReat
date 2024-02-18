import { useState } from 'react';

export default function ActulizacionStado() {
  const [age, setAge] = useState(0);
  const [age2, setAge2] = useState(0);

  function increment() {
    setAge(a => a + 1);
  }

  function sinIncrement() {
    setAge2(age2 + 1);
  }

  return (
    <>
      <h1>Tu edad con actualizacion: {age}</h1>

      <label>
            <input
            type ="checkbox"
       
            onChange={increment} />
        </label>

        <label>
            <input
            type ="checkbox"
     
            onChange={increment} />
        </label>

        <label>
            <input
            type ="checkbox"
   
            onChange={increment} />
        </label>


        <label>
            <input
            type ="checkbox"
   
            onChange={increment} />
        </label>

        <label>
            <input
            type ="checkbox"

            onChange={increment} />
        </label>


      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <button onClick={() => {
        increment();
      }}>+1</button>

      <br />


      <h1>Tu edad sin actualizacion: {age2}</h1>

<label>
      <input
      type ="checkbox"
 
      onChange={sinIncrement} />
  </label>

  <label>
      <input
      type ="checkbox"

      onChange={sinIncrement} />
  </label>

  <label>
      <input
      type ="checkbox"

      onChange={sinIncrement} />
  </label>


  <label>
      <input
      type ="checkbox"

      onChange={sinIncrement} />
  </label>

  <label>
      <input
      type ="checkbox"

      onChange={sinIncrement} />
  </label>


<button onClick={() => {
  sinIncrement();
  sinIncrement();
  sinIncrement();
}}>+3</button>
<button onClick={() => {
  sinIncrement();
}}>+1</button>
    </>
    
  );



  
}
