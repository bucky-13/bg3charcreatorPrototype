import './App.css';
import { abilities } from './database/dbAbilities';

function App() {
  return (
    <>
      <div>
        <h2>{abilities[0].name}</h2>
        <img src={abilities[2].iconSrc}></img>
        <p>{abilities[0].desc}</p>
        <img src="/icons/abilities/str_icon.png"></img>
      </div>
    </>
  );
}

export default App;
