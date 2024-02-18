import React, { useState } from "react";

export default function Calculadora() {
    const [total, setTotal] = useState();
    const [operacion, setOperacion] = useState("0");
    let signos = ["+","-","/","*"];


function botones(numero) {
    if (operacion === "0") {
        setOperacion(numero);
    } else {
        setOperacion(operacion + numero);
        setTotal();
    }
}

function vaciarDisplay() {//Funcion para vaciar la calculadora.
    setOperacion('0');
    setTotal();
}

function borrarDisplay() {//Funcion para borrar de 1 en 1 los numero o signos
    setOperacion(operacion.substring(0, operacion.length - 1));
}

return (
<>

<p>{total}</p>
<p>{operacion}</p>
<table>
    <tbody>
        <tr>
            <td><button onClick={vaciarDisplay}>AC</button></td>
            <td><button onClick={borrarDisplay}>DEL</button></td>
            <td> <button onClick={() => botones("(")}>(</button></td>
            <td><button onClick={() => botones(')')}>)</button></td>
        </tr>
        <tr>
            <td> <button onClick={() => botones("1")}>1</button></td>
            <td><button onClick={() => botones("2")}>2</button></td>
            <td> <button onClick={() => botones("3")}>3</button></td>
            <td><button onClick={() => botones('/')}>/</button></td>
        </tr>
        <tr>
            <td> <button onClick={() => botones("4")}>4</button></td>
            <td><button onClick={() => botones("5")}>5</button></td>
            <td> <button onClick={() => botones("6")}>6</button></td>
            <td><button onClick={() => botones('*')}>*</button></td>
        </tr>
        <tr>
            <td> <button onClick={() => botones("7")}>7</button></td>
            <td><button onClick={() => botones("8")}>8</button></td>
            <td> <button onClick={() => botones("9")}>9</button></td>
            <td><button onClick={() => botones('-')}>-</button></td>
        </tr>
        <tr>
            <td> <button onClick={() => botones('.')}>.</button></td>
            <td><button onClick={() => botones("0")}>0</button></td>
            <td> <button onClick={() => botones('=')}>=</button></td>
            <td><button onClick={() => botones('+')}>+</button></td>
        </tr>
    </tbody>        
</table>


</>
)
}