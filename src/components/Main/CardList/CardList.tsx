import { useEffect } from "react";
import { BeerType } from "../../../types/types";
import Card from "./Card/Card";
import { useParams } from "react-router";

type CardListTypes = {
    beers: BeerType[] | undefined;
    setHasBeerBeenSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardList = ({beers, setHasBeerBeenSelected,}: CardListTypes) => {
    if(!beers) return <p>No beers!</p>
    const { beerId } = useParams();

    if (!beerId) return <p>Error</p>;
    const selectedBeer = beers.find((beer) => beer.id === parseInt(beerId));
    // console.log("selectedBeer:", selectedBeer);
    
    
    useEffect(() => {
        return () => {
            setHasBeerBeenSelected(false);
        };
    }, [setHasBeerBeenSelected]); 

    if (!selectedBeer) return <h1>No beer selected</h1>;

    const beerIngredients = () => {
        const malt = selectedBeer.ingredients.malt.map((malt,index) => (
            <p key={index}>
            {malt.name},
            </p>
            
        ));
        const hops = selectedBeer.ingredients.hops.map((hops, index) => (
            <p key={index}>
            {hops.name},
            </p>
            ))
        const yeast = <p>{selectedBeer.ingredients.yeast}</p>
        return { malt, hops, yeast };
    }

    const foodPairings = () => {
        const food = selectedBeer.food_pairing.map((foodPairings, index) => (<p key={index}>{foodPairings}</p>))
        return {food}
    }

    return (
        <div>
            <div>{selectedBeer && <Card beer={selectedBeer} beerIngredients={beerIngredients} foodPairings={foodPairings}/>}</div>
        </div>
    );
};

export default CardList;
