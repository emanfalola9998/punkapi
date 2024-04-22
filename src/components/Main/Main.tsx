import React from 'react'
import './Main.scss'
import CardList from './CardList/CardList'
import { BeerType } from '../../types/types'

type MainTypes = {
    beers: BeerType[] | undefined;
    searchTerm: string;
    isHighABV: boolean;
    isClassic:boolean
    isAcidic:boolean

    setHasBeerBeenSelected: React.Dispatch<React.SetStateAction<boolean>>
}

const Main = ({setHasBeerBeenSelected, isAcidic, beers, isClassic, searchTerm, isHighABV} : MainTypes) => {
  return (
    <div>
      {<CardList setHasBeerBeenSelected = {setHasBeerBeenSelected}beers={beers}/>}
    </div>
  )
}

export default Main
// !isAcidic && !isClassic && !searchTerm && !isHighABV && 