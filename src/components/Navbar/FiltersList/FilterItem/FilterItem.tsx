import React from 'react'
import { BeerType } from '../../../../types/types'

type FilterItemProps = {
    filteredBeer : BeerType
}

const FilterItem = ({filteredBeer} : FilterItemProps) => {
    return (
    <div>

        <h1>{filteredBeer.name}</h1>
        <p>Abv: {filteredBeer.abv}</p>
        <p>First Brewed:{filteredBeer.first_brewed}</p>
        <p>Ph:{filteredBeer.ph}</p>
        {/* <p>{filteredBeer.name}</p> */}

    </div>
    )
}

export default FilterItem
