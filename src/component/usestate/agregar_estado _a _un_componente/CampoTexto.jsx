import {useState} from 'react';

export default function CampoTexto() {

    const [text, setText] = useState('hola');

    function handlechange(e) {
        setText(e.target.value);
    }

    return (
        <>
        <h4>En este ejemplo, la variable de estado texto contiene una cadena. Cuando escribes,handleChange lee el último valor ingresado al elemento input del DOM desde el navegador y llama  setTexto para actualizar el estado. Esto te permite mostrar el actual texto abajo.
            <a href="https://codesandbox.io/p/sandbox/react-dev-t8sm82?file=%2Fsrc%2FApp.js&utm_medium=sandpack"> Ver codigo</a>
        </h4>
        
        <input value={text} onChange={handlechange} />
        <p>Escribiste: {text}</p>
        <button onClick={() => setText('hola')}>
            Reiniciar
        </button>
        </>
    )
    
}