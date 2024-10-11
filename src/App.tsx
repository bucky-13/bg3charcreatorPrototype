import './App.css';
import { abilities } from './database/dbAbilities';

function App() {
  return (
    <>
      <div>
        {abilities.map((ability) => (
          <div>
            <h2>{ability.name}</h2>
            <img src={ability.iconSrc}></img>
            <p>{ability.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
