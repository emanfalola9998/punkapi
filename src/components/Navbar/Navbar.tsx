import {useState, useEffect} from 'react'
import './Navbar.scss'
import SearchBox from './SearchBox/SearchBox'
import FiltersList from './FiltersList/FiltersList'
import { BeerType } from '../../types/types'


type NavbarProps = {
  beers: BeerType[];
  searchTerm: string;
  setSearchTerm:  React.Dispatch<React.SetStateAction<string>>
}

const Navbar = ({beers, searchTerm, setSearchTerm} : NavbarProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.trim().toLowerCase());
  };

  return (
    <div>
      <SearchBox searchTerm = {searchTerm} setSearchTerm={setSearchTerm} handleChange={handleChange}/>
      {searchTerm && <FiltersList beers = {beers} searchTerm={searchTerm}/>}
    </div>
  )
}

export default Navbar
