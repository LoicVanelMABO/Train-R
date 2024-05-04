import { Fragment } from "react";
import { useState } from "react";
import { render } from "react-dom";
const title = "hello <i>guys</i>"
const title2 = "tu vas win"
const style = { color: 'blue'}
const shoxT = false
const todos = [
  'Presenter toi',
  'Presenter Moi',
  'Presenter Vous',
  'Presenter Nous'
]
function App() {
  const handleClick = (e) => {
    // e.stopPropagation()
    // console.log(e);
    e.preventDefault();
    alert('la click');
  }
  const [compteur, setcompteur] = useState(0)
  const [person, setperson] = useState({
    firstname: 'John',
    lastName: 'Doe',
    age: 18
  })
  const increment = () =>{
    console.log('render')
    setcompteur (compteur + 1)
  }
  const Page = () =>{
    setperson({...person, age: person.age + 1})
  }

  const p ={
    id: 'title',
    className: 'titlrckl'
  }
  return (
    <>
     {shoxT && <h1 {...p} style={style}>MABOMESI Loic Vanel  {title2}</h1>}
     {shoxT ? 
        <h1 id="title" className="titlrckl" style={style}>MABOMESI Loic Vanel  {title2}</h1>:
        <h4>Pas de show title</h4>
      }
      <h1 onClick={handleClick} id="title2" className="titlrckl" dangerouslySetInnerHTML={{__html:title}}></h1>
      <input type="text"/>
      <br />
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <ul>
        {todos.map(todo =>(<li key={todo}>{todo}</li>))}
      </ul>
      <p>Compteur : {compteur}</p>
      <button onClick={increment}>+ compteur</button>
      <p>Name {person.lastName} et age : {person.age}</p>
      <button onClick={Page}>Age + 1</button>
    </>
  );
}

export default App
