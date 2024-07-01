import { useState } from 'react';
import './App.css';

import { useAutoAnimate } from '@formkit/auto-animate/react';

function App() {
  const [items, setItems] = useState([]);
  const [userInput, setUserInput] = useState('');

  const [listRef] = useAutoAnimate();

  const add = () => {
    const newObj = {id: items.length, title: userInput}
    const newArr = [...items, newObj];
    setItems(newArr)
    setUserInput('')
  }

  const deleteItem = (index) => {
    const newArr = [...items]
    const arrFilter = newArr.filter((e) => e.id !== index)
    setItems(arrFilter)
  }

  return (
    <div className="root">
      <div className="input-wrapper">
        <input type="text" placeholder="Enter Sentence" className="input" onChange={(e) => setUserInput(e.target.value)} value={userInput}/>
      </div>
      <button className="add-btn" onClick={add}>Add item</button>

      <ul className="list" ref={listRef} >
        {items.map((item) => (
          <li key={item.id}>
            <span className="label">{item.title}</span>
            <button className="delete-btn" onClick={() => deleteItem(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
