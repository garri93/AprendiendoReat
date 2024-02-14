import { useState } from "react";

export default function Formulario2variables(){
    const [name, setName] = useState('Carlos');
    const [age, setAge] = useState(42)

    return (
        <>
        <h4>
Se puede declarar más de una variable de estado en el mismo componente. Cada variable de estado es completamente independiente.
            <a href="https://codesandbox.io/p/sandbox/react-dev-66kwhq?file=%2Fsrc%2FApp.js&utm_medium=sandpack">Ver Codigo</a>
        </h4>

        <input 
            value={name}
            onChange={e => setName(e.target.value)} />

            <button onClick={() = setAge(age + 1)}
            Incrementar edad>

            </button>
            <p>Hola, {name}. TIEMEE</p>
        </>

    );
}