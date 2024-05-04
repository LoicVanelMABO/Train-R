const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function ToDoList() {
  return (
    <ul>
      {months.map((month, index) => (<li key={index}>{month}</li>))}
    </ul>
  );
}

function Button(props){
    const buttonStyle = {
        color: props.color,
        fontSize: props.fontSize + 'px'
    };
    return (
        <button style={buttonStyle}>{props.text}</button>
    );
}

// function Button2(color, fontSize, text){
//     const buttonStyle2 = {
//         color: color,
//         fontSize: fontSize + 'px'
//     };
//     return (
//         <button style={buttonStyle2}>{text}</button>
//     );
// }
// Button2.defaultProps ={
//     text: "click",
//     color: "blue",
//     fontSize: 15
// };

// export default function App(){
//     return(
//         <div>
//             <Button text="Click me" color="blue" fontSize={12}/>
//             <Button text="dont rr Click me" color="red" fontSize={12}/>
//             <Button text="Click me" color="blue" fontSize={20}/>
//             {/* <Button2 /> */}
//             {/* <Button /> */}
//         </div>
//     );
// };

///
// function Button({ text, color, fontSize }) {
//     const buttonStyle = {
//       color: color,
//       fontSize: fontSize + "px"
//     };
  
//     return <button style={buttonStyle}>{text}</button>;
//   }
  
//   Button.defaultProps = {
//     text: "Click Me!",
//     color: "blue",
//     fontSize: 12
//   };
  
//   export default function App() {
//     return (
//       <div>
//         <Button />
//         <Button text="Don't Click Me!" color="red" />
//         <Button fontSize={20} />
//       </div>
//     );
//   }


import React, { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple','red'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[4]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;