import React, {useState, useEffect} from 'react';
import './App.css';
import CleanUp from './CleanUp';

const App: React.FC = () => {
  const [status, setStatus] = useState<string | number>("text")
  const [input, setInput] = useState("")
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setInput(e.target.value)
  };
  const [counter, setCounter] = useState(0)
  const [display, setDisplay] = useState(true)

  useEffect(() => {
    console.log('useEffect in App');
    document.title = `このサイトのカウンターは ${counter}`
  }, [counter])
  return (
    <div className="App">
      <header className="App-header">
        <h4>{status}</h4>
        <button onClick={() => setStatus(1)}>Button</button>
        <h4>{input}</h4>
        <input type="text" value={input} onChange={onChangeHandler}/>
        <h4>{counter}</h4>
        <button onClick={() => setCounter((preCounter) => preCounter + 1)}>Increment</button>
        {display && <CleanUp/>}
        <button onClick={() => setDisplay((!display))}>toggle display</button>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
