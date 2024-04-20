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
    hasBeerBeenSelected: boolean;
    setHasBeerBeenSelected: React.Dispatch<React.SetStateAction<boolean>>
}

const Main = ({setHasBeerBeenSelected, hasBeerBeenSelected, isAcidic, beers, isClassic, searchTerm, isHighABV} : MainTypes) => {
  return (
    <div>
      {<CardList hasBeerBeenSelected = {hasBeerBeenSelected} setHasBeerBeenSelected = {setHasBeerBeenSelected}beers={beers}/>}
    </div>
  )
}

export default Main
// !isAcidic && !isClassic && !searchTerm && !isHighABV && 