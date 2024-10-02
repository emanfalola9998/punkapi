import { useState, useEffect } from 'react'
// import './App.css'
import './App.scss'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import beers from './data/beers'
import {BeerType, BeerTypeServer} from './types/types'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavMenu from './components/NavMenu/NavMenu'
import AddBeerForm from './components/Create/AddBeerForm'

// all react functionality is stored in app.tsx to allow props to pass data more easily

function App() {
const [searchTerm, setSearchTerm] = useState<string>("");
const [isHighABV, setIsHighABV] = useState<boolean>(false)
const [isClassic, setIsClassic] = useState<boolean>(false)
const [isAcidic, setIsAcidic] = useState<boolean>(false)
const [hasBeerBeenSelected, setHasBeerBeenSelected] = useState<boolean>(false);
const [showNav, setShowNav] = useState(false);
const [beerData, setBeerData] = useState<BeerType[]>()
const [currentPage, setCurrentPage] = useState<number>(1)

const [newBeer, setNewBeer] = useState<BeerTypeServer>({
  id:0,
  name: "",
  firstBrewed: "",
  description: "",
  imageUrl: "",
  abv:0,
  ph:0
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [formError, setFormError] = useState<string | null>(null);



  useEffect(() => {
    const getBeers = async () => {
        try {
            // server (play framework port)
            const response = await fetch("http://localhost:9000/beers?page=2&per_page=60");
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


  let beersUsed: BeerType[]= [];
  !beerData ? (beersUsed = beers) : (beersUsed = beerData)

  
  return (
  <>
    <div className='app'>
        <NavMenu showNav={showNav} setShowNav={setShowNav} />
        <Routes>
          <Route
            path="/punkapi"
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
                  beers={beersUsed}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
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
           path="/punkapi/beers/create"
           element={
            <AddBeerForm
            newBeer={newBeer}
            setNewBeer={setNewBeer}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            formError={formError}
            setFormError={setFormError}
            />
           } 
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