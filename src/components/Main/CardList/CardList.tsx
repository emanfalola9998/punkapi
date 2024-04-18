import React from "react";
import { BeerType } from "../../../types/types";
import Card from "./Card/Card";

type CardListTypes = {
    beers: BeerType[];    
};

const CardList = ({ beers }: CardListTypes) => {
    

    return (
    <div>
        {beers.map(beer => {
            return(
            <div key={beer.id}>
                <Card beer={beer}/>
            </div>
            )
        })}

    </div>
    );
};

export default CardList;
