import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function ButtonCount() {
  const [count, setCount] =useState(0);

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times 
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.-
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}


const user = {
  name: 'Kendrick Hughes',
  imageUrl: '/yXOvdOSs.jpg',
  imageSize: 100,
}
// yXOvdOSs

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className='avatar'
        src={user.imageUrl}
        alt={` ${user.name}`}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function MyButton2() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}


export default function MyApp() {
  return (
    <div>
      <App />
      <h1>Welcome to my app</h1>
      <ButtonCount />
      <ButtonCount />
      <ButtonCount />
      <MyButton />
      <AboutPage />
      <Profile />
      <MyButton2 />
    </div>
  );
}

// export default App;
// export default MyApp;
