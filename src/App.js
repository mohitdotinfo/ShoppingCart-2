import './App.css';
import Incrementbutton from './components/increment_decreement';
import ShoppingCart from './ShoppingCart';


function App() {
  return (
    <>
      <ShoppingCart />
      {/* <Incrementbutton /> */}

    </>
  );
}





export default App;

// import { useState } from 'react';
// function ButtonIncrement(props) {

//    return (
//      <button onClick={props.onClickFunc}>+1 </button>
//    )
// }
// function ButtonDecrement(props) {

//   return (
//     <button onClick={props.onClickFunc}>-1</button>
//   )
// }
// function Display(props) {
//   return (
//     <label>{props.message}</label>
//   )
// }
// function App() {
//   const [counter, setCounter] = useState(1);
//   const incrementCounter = () => setCounter(counter + 1);
//   let decrementCounter = () => setCounter(counter - 1);
//   if(counter<=1) {
//     decrementCounter = () => setCounter(0);
//   }
//   return (
//     <div> 
//       <ButtonIncrement onClickFunc={incrementCounter}/>
//       <Display message={counter}/> 
//       <ButtonDecrement onClickFunc={decrementCounter}/>
//     </div>
//   );
// }
// export default App;