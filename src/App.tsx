import { useState, useEffect } from 'react'
// import './App.css'
import './App.scss'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import beers from './data/beers'
import {BeerType} from './types/types'
import {Routes, Route, Navigate } from "react-router-dom";
import NavMenu from './components/NavMenu/NavMenu'
import CustomSearch from './components/CustomSearch/CustomSearch'
import { API_BASE_URL } from './utils/api'


function App() {
const [searchTerm] = useState<string>(""); // not needed due to redux
const [isHighABV] = useState<boolean>(false) // not needed due to redux
const [isClassic] = useState<boolean>(false) // not needed due to redux
const [isAcidic ] = useState<boolean>(false) // not needed due to redux
const [hasBeerBeenSelected, setHasBeerBeenSelected] = useState<boolean>(false);
const [showNav, setShowNav] = useState(false); 
const [beerData, setBeerData] = useState<BeerType[]>() 
const [shouldRefetch, setShouldRefetch] = useState(false)

useEffect(() => {
  const getBeers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/beers`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: BeerType[] = await response.json();
      setBeerData(data);
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  getBeers(); // Always call it on mount
}, [shouldRefetch]); // <- empty dependency array



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
          <Route path="/" element={<Navigate to="/punkapi" replace />} />
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
            path="/beers/:beerId"
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
            path="/customSearch"
            element={<CustomSearch
              setShouldRefetch={setShouldRefetch}
            />}
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