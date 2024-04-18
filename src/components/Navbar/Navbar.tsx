import {useState, useEffect} from 'react'
import './Navbar.scss'
import SearchBox from './SearchBox/SearchBox'
import FiltersList from './FiltersList/FiltersList'
import { BeerType } from '../../types/types'


type NavbarProps = {
  beers: BeerType[];
  searchTerm: string;
  setSearchTerm:  React.Dispatch<React.SetStateAction<string>>
  isHighABV: boolean;
  setIsHighABV: React.Dispatch<React.SetStateAction<boolean>>
  isClassic: boolean;
  setIsClassic: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({setIsClassic, isClassic, beers, searchTerm, setSearchTerm, isHighABV, setIsHighABV} : NavbarProps) => {

  const handleIsHighABV = () => {
    setIsHighABV(!isHighABV)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.trim().toLowerCase());
  };

  const handleIsClassic = () => {
    setIsClassic(!isClassic)
  }

  return (
    <div>
      <SearchBox handleIsClassic={handleIsClassic} isClassic={isClassic} isHighABV={isHighABV} handleIsHighABV={handleIsHighABV} searchTerm = {searchTerm} handleInput={handleInput}/>
      <FiltersList isClassic={isClassic} beers = {beers} searchTerm={searchTerm} isHighABV={isHighABV} />

    </div>
  )
}

export default Navbar
