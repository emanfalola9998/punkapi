import React from 'react'
import { BeerType } from '../../../../types/types';
import { Link } from 'react-router-dom';
import './Card.scss'


type CardTypes = {
    beer: BeerType;    
    beerIngredients: () => {
        malt: JSX.Element[];
        hops: JSX.Element[];
        yeast: JSX.Element;
    }
};


const Card = ({beer, beerIngredients}: CardTypes) => {
    const ingredients = beerIngredients()
    const malt = ingredients
    
    return (
        <div className='beer-card'>
            <div className='beer-card__content'>
                <h1 className='beer-card__content-heading'>{beer.name}</h1>
                <h3>{beer.tagline}</h3>
                <p><span className="beer-card__content-span">ABV:</span> {beer.abv}</p>
                <p><span className="beer-card__content-span">IBU:</span> {beer.ibu}</p>
                <p><span className="beer-card__content-span">Ph:</span> {beer.ph}</p>
                <p><span className="beer-card__content-span">Description:</span> {beer.description}</p>
                {/* <h3>Ingredients</h3> */}
                {/* <div className='beer-card__content__ingredients'>
                    <div className='beer-card__content__ingredients-malt'><span className="beer-card__content-span ">Malt:</span> {ingredients.malt}</div>
                    <div className='beer-card__content__ingredients-hops'><span className="beer-card__content-span">Hops:</span> {ingredients.hops}</div>
                    <div className='beer-card__content__ingredients-yeast'><span className="beer-card__content-span">Yeast:</span> {ingredients.yeast}</div>
                </div> */}
            </div>
            <img className="beer-card__image" src={beer.image_url} alt={beer.name} />
        </div>
    )
}

export default Card
