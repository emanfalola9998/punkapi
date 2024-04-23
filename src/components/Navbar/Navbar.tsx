import {useState, useEffect} from 'react'
import './Navbar.scss'
import SearchBox from './SearchBox/SearchBox'
import FiltersList from './FiltersList/FiltersList'
import { BeerType } from '../../types/types'


type NavbarProps = {
  beers: BeerType[] | undefined;
  searchTerm: string;
  setSearchTerm:  React.Dispatch<React.SetStateAction<string>>
  isHighABV: boolean;
  setIsHighABV: React.Dispatch<React.SetStateAction<boolean>>
  isClassic: boolean;
  setIsClassic: React.Dispatch<React.SetStateAction<boolean>>
  isAcidic: boolean;
  setIsAcidic: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  currentPage: number

}

const Navbar = ({currentPage, setCurrentPage, isAcidic, setIsAcidic, setIsClassic, isClassic, beers, searchTerm, setSearchTerm, isHighABV, setIsHighABV} : NavbarProps) => {

  const handleIsAcidic = () => {
    setIsAcidic(!isAcidic)
  }

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
      <SearchBox handleIsAcidic={handleIsAcidic} isAcidic={isAcidic} handleIsClassic={handleIsClassic} isClassic={isClassic} isHighABV={isHighABV} handleIsHighABV={handleIsHighABV} searchTerm = {searchTerm} handleInput={handleInput}/>
      <FiltersList setCurrentPage={setCurrentPage} currentPage={currentPage} isAcidic={isAcidic} isClassic={isClassic} beers = {beers} searchTerm={searchTerm} isHighABV={isHighABV} />

    </div>
  )
}

export default Navbar
