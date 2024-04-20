import React from 'react'
import { BeerType } from '../../../../types/types';
import { Link } from 'react-router-dom';
import './Card.scss'


type CardTypes = {
    beer: BeerType;    
};


const Card = ({beer}: CardTypes) => {
    console.log("beer.name", beer.name);
    

    return (
        <div className='beer-card'>
            <div className='beer-card__content'>
                <h1 className='beer-card__content-heading'>{beer.name}</h1>
                <p>ABV: {beer.abv}</p>
                <p>IBU: {beer.ibu}</p>
                <p>Ph: {beer.ph}</p>
                <p>Description: {beer.description}</p>
            </div>
            <img className="beer-card__image"src={beer.image_url}/>
        </div>
    )
}

export default Card
