import './App.css'
import React, {useState} from 'react';

import Phrase from './components/Phrase';
import EmptyBlock from './components/EmptyBlock';

const adjectivesArr = [
    "абсолютный",
    "адский",
    "азартный",
    "активный",
    "ангельский",
    "астрономический",
    "баснословный",
    "безбожный",
    "безбрежный",
    "безвозвратный",
    "безграничный",
    "бездонный",
    "бездушный",
    "безжалостный",
    "замечательно",
    "замечательный",
    "записной",
    "запредельный",
    "заядлый",
    "звериный",
    "зверский",
    "зеленый",
    "злой",
    "злостный",
    "значительный",
    "неоспоримый",
    "неотразимый",
    "неоценимый",
    "непередаваемый"
  ];

  const nounsArr = [
    "лгун",
    "день",
    "конь",
    "олень",
    "человек",
    "программист",
    "ребёнок",
    "конец",
    "город",
    "дурак"
  ];

function App() {
    
      const Generate =() => {
          let firstAdjective = adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)]
          let secondtAdjective = adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)]

          let noun = nounsArr[Math.floor(Math.random() * nounsArr.length)]

          setPhrases([...phrases, {phrase : `${firstAdjective} ${secondtAdjective} ${noun}`}])
      }

      const clearPhrases = () => {
        setPhrases([])
      }

      const [phrases, setPhrases] = useState([
          {phrase: "непередаваемый неотразимый олень"},
          {phrase: "значительный зверский город"},
      ])

  return (
    <div className="wrapper">
      {phrases.length ? <Phrase phrases = {phrases}/> : <EmptyBlock />}
      <button onClick = {Generate} className="btn btn_generate">Сгенерировать</button>
      <button onClick = {clearPhrases}className="btn btn_clear">Очистить</button>
    </div>
  );
}

export default App;
