import React from 'react'
import './Main.scss'
import CardList from './CardList/CardList'
import { BeerType } from '../../types/types'

type MainTypes = {
    beers: BeerType[];
    searchTerm: string;
    isHighABV: boolean;
    isClassic:boolean
    isAcidic:boolean
}

const Main = ({isAcidic, beers, isClassic, searchTerm, isHighABV} : MainTypes) => {
  return (
    <div>
      {!isAcidic && !isClassic && !searchTerm && !isHighABV && <CardList beers={beers}/>}
    </div>
  )
}

export default Main
