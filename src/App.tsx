import { useState, useEffect } from 'react'
// import './App.css'
import './App.scss'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import beers from './data/beers'
import {BeerType} from './types/types'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from './components/NavMenu/NavMenu'
import { UseSelector } from 'react-redux'
import CustomSearch from './components/CustomSearch/CustomSearch'



function App() {
const [searchTerm, setSearchTerm] = useState<string>(""); // not needed due to redux
const [isHighABV, setIsHighABV] = useState<boolean>(false) // not needed due to redux
const [isClassic, setIsClassic] = useState<boolean>(false) // not needed due to redux
const [isAcidic, setIsAcidic] = useState<boolean>(false) // not needed due to redux
const [hasBeerBeenSelected, setHasBeerBeenSelected] = useState<boolean>(false);
const [showNav, setShowNav] = useState(false); 
const [beerData, setBeerData] = useState<BeerType[]>() 
const [currentPage, setCurrentPage] = useState<number>(1) // not needed due to redux


  useEffect(() => {
    const getBeers = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/beers");
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


  // let beersUsed: BeerType[]= [];
  // !beerData ? (beersUsed = beers) : (beersUsed = beerData)
  const beersUsed: BeerType[] = beerData ?? beers;
  console.log("beerData: ", beerData)


  // console.log(beersUsed)
  
  return (
  <>
    <div className='app'>
        <NavMenu showNav={showNav} setShowNav={setShowNav} />
        <Routes>
          <Route
            path="/punkapi"
            element={
              !hasBeerBeenSelected && (
                <Navbar beersUsed= {beersUsed}
                />
              )
            }
          />
          <Route
            path="/punkapi/beers/:beerId"
            element={
              beersUsed && (
                <Main
                  setHasBeerBeenSelected={setHasBeerBeenSelected}
                  isAcidic={isAcidic}
                  isClassic={isClassic}
                  isHighABV={isHighABV}
                  beers={beersUsed}
                  searchTerm={searchTerm}
                />
              )
            }
          />

          <Route 
            path="/punkapi/customSearch"
            element={<CustomSearch/>}
          />
      </Routes>
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