import React, {useState} from 'react';

const HelloWorld = () => {
    const [value, setValue] = useState('')
    const [visible, setVisible] = useState(false)

    const toggle = () => value === "hello" && setVisible(prev => !prev)
    const onChange = () => setValue(e.target.value)

    return (
        <div>
            <input onChange={onChange} id="search" type="text"/>
            <button onClick={toggle} id="toggle">HELLO WORLD</button>
            {visible && <div id="hello">HELLO WORLD</div>}
        </div>
    );
};

export default HelloWorld;