import { useState } from 'react';
import './App.css';

function App() {
    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <header>
                <h1 className='alignCenter'>Impact Analytics Assignment</h1>
            </header>
            <section className='center'>
                <h1 className='alignCenter'>Click on pentagon to change color</h1>
                <div
                    className={`pentagon ${toggle ? 'gray' : 'black'}`}
                    onClick={handleClick}
                >
                    <div className='content'>
                        <h1>Pentagon</h1>
                        <h3>Impact Analytics</h3>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
