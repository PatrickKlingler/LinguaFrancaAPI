// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Popup } from "./components/Popup/Popup";



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
      
//         <p>
//           Start your chat with bot_name.
//         </p>
//         <form>
//   <label>
//     User:
//     <input type="text" name="name" />
//   </label>
//   <button onclick="myFunction()">Chat</button>
// </form>
//       </header>
//     </div>
//   );
// }

// export default App;
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Start your chat with bot_name.
        </p>
        <button onClick={() => setOpen(true)}> Click to Open Popup</button>
        {open ? <Popup text="Hello there!" closePopup={() => setOpen(false)} /> : null}
      </header>
    </div>
  );
};
export default App;