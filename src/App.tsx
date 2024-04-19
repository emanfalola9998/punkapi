import { useState } from 'react'
import './App.css'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import beers from './data/beers'
import {BeerType} from './types/types'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from './components/NavMenu/NavMenu'


function App() {
const [searchTerm, setSearchTerm] = useState<string>("");
const [isHighABV, setIsHighABV] = useState<boolean>(false)
const [isClassic, setIsClassic] = useState<boolean>(false)
const [isAcidic, setIsAcidic] = useState<boolean>(false)
const [hasBeerBeenSelected, setHasBeerBeenSelected] = useState<boolean>(false);
const [showNav, setShowNav] = useState(false);


console.log("hasBeerBeenSelected:", hasBeerBeenSelected)

  return (
    <>
<BrowserRouter>
  <NavMenu showNav={showNav} setShowNav={setShowNav} />
  <Routes>
    <Route
      path="/"
      element={
        !hasBeerBeenSelected && (
          <Navbar
            isAcidic={isAcidic}
            setIsAcidic={setIsAcidic}
            setIsClassic={setIsClassic}
            isClassic={isClassic}
            isHighABV={isHighABV}
            setIsHighABV={setIsHighABV}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            beers={beers}
          />
        )
      }
    />
    <Route
      path="/beers/:beerId"
      element={
        <Main
          setHasBeerBeenSelected={setHasBeerBeenSelected}
          hasBeerBeenSelected={hasBeerBeenSelected}
          isAcidic={isAcidic}
          isClassic={isClassic}
          isHighABV={isHighABV}
          beers={beers}
          searchTerm={searchTerm}
        />
      }
    />
  </Routes>
</BrowserRouter>

    </>
  )
}

export default App



{/* <BrowserRouter>
  {!hasBeerBeenSelected && (
    <Navbar
      isAcidic={isAcidic}
      setIsAcidic={setIsAcidic}
      setIsClassic={setIsClassic}
      isClassic={isClassic}
      isHighABV={isHighABV}
      setIsHighABV={setIsHighABV}
      setSearchTerm={setSearchTerm}
      searchTerm={searchTerm}
      beers={beers}
    />
  )} */}