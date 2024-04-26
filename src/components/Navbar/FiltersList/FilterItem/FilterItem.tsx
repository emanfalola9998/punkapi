import React from 'react'
import { BeerType } from '../../../../types/types'
import { Link } from 'react-router-dom';
import "./FilterItem.scss"

type FilterItemProps = {
    filteredBeer : BeerType
}

const FilterItem = ({filteredBeer} : FilterItemProps) => {
    const shortenedTitle = () => {
        if(filteredBeer.name.length > 24){
            let sliceAt = filteredBeer.name.indexOf(".", 24)
            const slicedString = filteredBeer.name.substring(0,sliceAt) 
            return slicedString
        }
        else {
            return filteredBeer.name
        }
    }

    return (
    <div className="filteritem-beer-card">
        <div className="filterItem-beer-card__content">

            <div className='filteritem-beer-card__content-text'>

            <Link to={`/beers/punkapi/${filteredBeer.id}`}>
                <h1 className='filteritem-beer-card__content-text-heading'>
                {filteredBeer.name.length > 24
                ? (() => {
                    let sliceAt = filteredBeer.name.indexOf(" ", 12);
                    if (sliceAt === -1) {
                    sliceAt = 24;
                    }
                    return filteredBeer.name.substring(0, sliceAt);
                })()
                : filteredBeer.name ?? "No Name given"}
                </h1>

            </Link>
            <p><span className='filteritem-beer-card-span'>Abv:</span> {filteredBeer.abv}</p>
            <p><span className='filteritem-beer-card-span'>First Brewed:</span>   {filteredBeer.first_brewed}</p>
            <p><span className='filteritem-beer-card-span'>Ph:   </span>{filteredBeer.ph}</p>
            </div>

            <img className="filteritem-beer-card__content-image" src={filteredBeer.image_url} alt={filteredBeer.name} />
        </div>

    </div>
    )
}

export default FilterItem

