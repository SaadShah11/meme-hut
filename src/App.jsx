import './App.css'
import aladdinNose from '../assets/aladdinNoseSlap.gif'
import aladdinBeard from '../assets/jafarWeirdBeard.gif'
import MemeImage from './MemeImage'

function App() {

  return (
    <div className="App">
      <h1>Meme-Hut</h1>
      <MemeImage imageSrc={aladdinNose} />
      <MemeImage imageSrc={aladdinBeard} />
    </div>
  )
}

export default App
