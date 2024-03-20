import './App.css'
import {BirdCard} from './BirdCard.jsx'
import { Navbar } from './Navbar.jsx'
import { Banner } from './Banner.jsx'
import { BirdFavorite } from "./BirdFavorite"


function App() {

  return (
    
  <section>

    <Navbar/>
    <Banner/>

    <div className='am-birdfavorite-scene'>
      <BirdFavorite birdname="patotrangoni" birdprice="$100" birdstate="Ex"/>
      <BirdFavorite birdname="patotrangoni" birdprice="$100" birdstate="Ex"/>
      <BirdFavorite birdname="patotrangoni" birdprice="$100" birdstate="Ex"/>
      <BirdFavorite birdname="patotrangoni" birdprice="$100" birdstate="Ex"/>
    </div>
    

    <div className='am-birdcard-scene'>
      <BirdCard birdname="lucasperez" birdprice="$100" birdstate="Ex"/>
      <BirdCard birdname="patotrangoni" birdprice="$100" birdstate="Ex"/>
      <BirdCard birdname="marcosvarela" birdprice="$100" birdstate="Ex"/>
      <BirdCard birdname="panapana" birdprice="$100" birdstate="Ex"/>
      <BirdCard birdname="juanlanata" birdprice="$100" birdstate="Ex"/>
      <BirdCard birdname="damianbettanin" birdprice="$1000" birdstate="Ed"/>
      <BirdCard birdname="emanuel" birdprice="$100" birdstate="Ex"/>
      <BirdCard birdname="kikobeast" birdprice="$100" birdstate="Ex"/>
    </div>

  </section>    

   
  )
}

export default App
