import React from 'react'
import { BeerType } from '../../../../types/types'

type FilterItemProps = {
    filteredBeer : BeerType
    handleIsHighABV: () => void;
    isHighABV: boolean;
}

const FilterItem = ({filteredBeer, handleIsHighABV, isHighABV} : FilterItemProps) => {
    return (
    <div>

        <h1>{filteredBeer.name}</h1>
        <p>Abv: {filteredBeer.abv}</p>
        {/* <p>{filteredBeer.ibu}</p> */}
        {/* <p>{filteredBeer.ph}</p> */}
        {/* <p>{filteredBeer.name}</p> */}

    </div>
    )
}

export default FilterItem
