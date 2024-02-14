
import {useState} from 'react';

export default function Contador(){

    const [count, setCount] = useState(0)

    function handleClick() {
      setCount (count + 1);
    }
    return(
        <>
        <h4>En este ejemplo, la variable contador contiene un número. Al hacer click en el botón lo incrementa.  <a href="https://codesandbox.io/p/sandbox/react-dev-4hk8js?file=%2Fsrc%2FApp.js&utm_medium=sandpack"> Ver codigo</a></h4>
      <button onClick={handleClick}>
        Hiciste click {count} veces
      </button>
        </>
    )
  }