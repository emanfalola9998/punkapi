import React from 'react'
import './Main.scss'
import CardList from './CardList/CardList'
import { BeerType } from '../../types/types'

type MainTypes = {
    beers: BeerType[];
    searchTerm: string;
}

const Main = ({beers, searchTerm} : MainTypes) => {
  return (
    <div>
      {!searchTerm && <CardList beers={beers}/>}
    </div>
  )
}

export default Main
