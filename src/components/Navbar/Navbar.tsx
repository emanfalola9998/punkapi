import './Navbar.scss'
import SearchBox from './SearchBox/SearchBox'
import FiltersList from './FiltersList/FiltersList'
import { BeerType } from '../../types/types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store';
import {
  setIsAcidic,
  setIsClassic,
  setIsHighABV,
  setSearchTerm,
  setCurrentPage,
} from '../../store/beerSlice';
import beers from '../../data/beers'

type NavBarProps = {
  beersUsed: BeerType[]
}



const Navbar = ({beersUsed}: NavBarProps) => {

  
      const searchTerm = useSelector((state: RootState) => state.beer.searchTerm)
      const isAcidic = useSelector((state: RootState) => state.beer.isAcidic)
      const isClassic = useSelector((state: RootState) => state.beer.isClassic)
      const isHighABV = useSelector((state: RootState) => state.beer.isHighABV)

  const dispatch = useDispatch()

  const handleIsAcidic = () => {
    dispatch(setIsAcidic(!isAcidic))
  }

  const handleIsHighABV = () => {
    dispatch(setIsHighABV(!isHighABV))
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value.trim().toLowerCase()));
  };

  const handleIsClassic = () => {
    setIsClassic(!isClassic)
  }

  return (
    <div>
      <SearchBox handleIsAcidic={handleIsAcidic} handleIsClassic={handleIsClassic} handleIsHighABV={handleIsHighABV} handleInput={handleInput}/>
      <FiltersList beersUsed = {beersUsed} />

    </div>
  )
}

export default Navbar
