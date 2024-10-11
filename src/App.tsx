import './App.css';
import { abilities } from './database/dbAbilities';

function App() {
  return (
    <>
      <div>
        <img src={abilities[0].iconSrc}></img>
      </div>
    </>
  );
}

export default App;
