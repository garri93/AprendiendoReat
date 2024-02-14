import {useState} from 'react';

export default function Checkbox() {
    const [liked,setliked] = useState(true);

    function handleChange(e) {
        setliked(e.target.checked);
    }

    return (
        <>
        <h4>
        En este ejemplo, la variable de estado liked contiene un valor booleano.  Al hacer click en el checkbox, setLiked actualiza la variable de estado liked si es que la entrada del checkbox del navegador fue marcada. La variable liked se utiliza para representar el texto debajo del checkbox.
        <a href="https://codesandbox.io/p/sandbox/react-dev-xkcl89?file=%2Fsrc%2FApp.js&utm_medium=sandpack">Ver codigo</a>
        </h4>
        <label>
            <input
            type ="checkbox"
            checked={liked}
            onChange={handleChange} />
        Me gusto esto
        <p>{liked ? 'Te' : 'No te'} gusto esto.</p>
        </label>

        </>
    )
}