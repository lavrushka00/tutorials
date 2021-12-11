import '../App.css'

function Phrase({phrases}){
    console.log(phrases)
    return(
        <div className="list">
          {phrases.map(item => 
          <div className="block"><h3>{item.phrase}</h3></div>)}
        </div>
    )   
}

export default Phrase;