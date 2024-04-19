import React from 'react'
import { BeerType } from '../../../../types/types'
import { Link } from 'react-router-dom';

type FilterItemProps = {
    filteredBeer : BeerType
}

const FilterItem = ({filteredBeer} : FilterItemProps) => {
    return (
    <div>
        <Link to={`/beers/${filteredBeer.id}`}>
            <h1>{filteredBeer.name}</h1>
        </Link>
        <p>Abv: {filteredBeer.abv}</p>
        <p>First Brewed:{filteredBeer.first_brewed}</p>
        <p>Ph:{filteredBeer.ph}</p>
        {/* <p>{filteredBeer.name}</p> */}

    </div>
    )
}

export default FilterItem
