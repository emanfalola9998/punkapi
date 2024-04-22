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
                <h3>{beer.tagline}</h3>
                <p><span className="beer-card__content-span">ABV:</span> {beer.abv}</p>
                <p><span className="beer-card__content-span">IBU:</span> {beer.ibu}</p>
                <p><span className="beer-card__content-span">Ph:</span> {beer.ph}</p>
                <p><span className="beer-card__content-span">Description:</span> {beer.description}</p>
            </div>
            <img className="beer-card__image"src={beer.image_url}/>
        </div>
    )
}

export default Card
