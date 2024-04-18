import React from 'react'
import { BeerType } from '../../../../types/types'

type FilterItemProps = {
    filteredBeer : BeerType
}

const FilterItem = ({filteredBeer} : FilterItemProps) => {
    return (
    <div>
        <h1>{filteredBeer.name}</h1>
        <p>{filteredBeer.abv}</p>
        <p>{filteredBeer.ibu}</p>
        <p>{filteredBeer.ph}</p>
        <p>{filteredBeer.name}</p>
    </div>
    )
}

export default FilterItem
