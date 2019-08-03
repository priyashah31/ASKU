// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

// export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from './components/ButtonAppBar.js';
import SignupCard from './components/SignupCard.js';


class App extends React.Component{
  
render(){
  return(
    <div>
    <ButtonAppBar />,
    <SignupCard />
</div>
  )
}
}

export default App;