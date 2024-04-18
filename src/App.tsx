import { useState } from 'react'
import './App.css'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import beers from './data/beers'
import {BeerType} from './types/types'

function App() {
// console.log("beers", beers);
const [searchTerm, setSearchTerm] = useState<string>("");



  return (
    <>
      <Navbar setSearchTerm = {setSearchTerm}searchTerm ={searchTerm} beers={beers}/>
      <Main beers={beers} searchTerm={searchTerm} />
    </>
  )
}

export default App
