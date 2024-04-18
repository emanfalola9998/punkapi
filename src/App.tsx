import { useState } from 'react'
import './App.css'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import beers from './data/beers'
import {BeerType} from './types/types'

function App() {
const [searchTerm, setSearchTerm] = useState<string>("");
const [isHighABV, setIsHighABV] = useState<boolean>(false)
const [isClassic, setIsClassic] = useState<boolean>(false)
const [isAcidic, setIsAcidic] = useState<boolean>(false)

  return (
    <>
      <Navbar isAcidic={isAcidic} setIsAcidic={setIsAcidic} setIsClassic = {setIsClassic} isClassic={isClassic} isHighABV={isHighABV} setIsHighABV={setIsHighABV} setSearchTerm = {setSearchTerm}searchTerm ={searchTerm} beers={beers}/>
      <Main isAcidic={isAcidic} isClassic={isClassic} isHighABV = {isHighABV} beers={beers} searchTerm={searchTerm} />
    </>
  )
}

export default App
