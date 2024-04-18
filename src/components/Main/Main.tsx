import React from 'react'
import './Main.scss'
import CardList from './CardList/CardList'
import { BeerType } from '../../types/types'

type MainTypes = {
    beers: BeerType[];
    searchTerm: string;
    isHighABV: boolean;
}

const Main = ({beers, searchTerm, isHighABV} : MainTypes) => {
  return (
    <div>
      {!searchTerm && !isHighABV && <CardList beers={beers}/>}
    </div>
  )
}

export default Main
