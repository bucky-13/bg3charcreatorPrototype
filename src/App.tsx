import './App.css';
import { abilities } from './database/dbAbilities';
import { charBackgrounds } from './database/dbCharBackgrounds';
import { charClasses } from './database/dbCharClasses';

function App() {
  return (
    <>
      <div>
        <div>
          <p>{charClasses[0].subclasses[1]}</p>
          <img src={charClasses[7].imgSrc}></img>
          <h2>{charBackgrounds[0].name}</h2>
          <img src={charBackgrounds[0].imgSrc}></img>
          <p>{charBackgrounds[0].desc}</p>
        </div>
        {abilities.map((ability) => (
          <div>
            <h2>{ability.name}</h2>
            <img src={ability.imgSrc}></img>
            <p>{ability.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
