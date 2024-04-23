import { useState, useEffect } from 'react'
// import './App.css'
import './App.scss'
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
const [beerData, setBeerData] = useState<BeerType[]>()
const [currentPage, setCurrentPage] = useState<number>(1)
// console.log(beerData);

// if (!beerData) return <p>Beer API not working! </p>

  useEffect(() => {
    const getBeers = async () => {
        try {
            const response = await fetch("http://localhost:3333/v2/beers?page=2&per_page=30");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data: BeerType[] = await response.json();
            setBeerData(data);
        } catch (error) {
            console.error("API call failed:", error);
        }
    };

  if (!beerData) {
      getBeers();
  }
}, [beerData, setBeerData]);
  



  return (
  <>
    <div className='app'>
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
          beers={beerData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )
    }
  />
  <Route
    path="/beers/:beerId"
    element={
      beerData && ( // Render Main component only if beerData is available
        <Main
          setHasBeerBeenSelected={setHasBeerBeenSelected}
          isAcidic={isAcidic}
          isClassic={isClassic}
          isHighABV={isHighABV}
          beers={beerData}
          searchTerm={searchTerm}
        />
      )
    }
  />
</Routes>
      </BrowserRouter>

    </div>

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