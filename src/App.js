// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './game'


export default function MyApp() {
  // const [count, setCount] = useState(0);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/game' element={<Game />} />
      </Routes>
    </BrowserRouter>
    
    // <div>
    //   <App />
    //   <h1>Welcome to my app</h1>
    //   <div>
    //     <MyButton count={count} onClick={handleClick} />
    //     <MyButton count={count} onClick={handleClick} />
    //   </div>
    //   <MyButton />
    //   <AboutPage />
    //   <Profile />
    //   <MyButton2 />
    // </div>
  );
}

// function MyButton({ count, onClick }) {

//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.-
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );

// }




// function AboutPage() {
//   return (
//     <>
//       <h1>About</h1>
//       <p>Hello there.<br />How do you do?</p>
//     </>
//   );
// }


// const user = {
//   name: 'Kendrick Hughes',
//   imageUrl: '/yXOvdOSs.jpg',
//   imageSize: 100,
// }
// // yXOvdOSs

// function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className='avatar'
//         src={user.imageUrl}
//         alt={` ${user.name}`}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// function MyButton2() {
//   function handleClick() {
//     alert('You clicked me!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }




// // export default App;
// // export default MyApp;
