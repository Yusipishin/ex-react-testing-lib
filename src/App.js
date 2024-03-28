import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false)
    const [value, setValue] = useState('')

    const onClick = () => setToggle(prev => !prev)

    useEffect(() => {
        setTimeout(() => {
            setData({})
        }, 100)
    }, []);

    return (
    <div>
        <h1 data-testid="value-elem">{value}</h1>

        {toggle && <div data-testid="toggle-elem" >toggle</div>}
        {data && <div style={{color: 'red'}}>DATA</div>}
        <h1>Hello World!</h1>
        <button data-testid="toggle-btn" onClick={onClick}>Click me!</button>
        <input onChange={e => setValue(e.target.value)} type="text" placeholder="input vfalue..."/>
    </div>
)
}

export default App;
