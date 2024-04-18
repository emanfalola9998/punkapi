import React from 'react'
import { BeerType } from '../../../../types/types';

type CardTypes = {
    beer: BeerType;    
};


const Card = ({beer}: CardTypes) => {

    return (
        <div>
            <h1>{beer.name}</h1>
            <p>{beer.abv}</p>
            <p>{beer.ibu}</p>
            <p>{beer.ph}</p>
            <p>{beer.name}</p>
        </div>
    )
}

export default Card
