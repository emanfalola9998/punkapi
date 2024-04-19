import { useEffect } from "react";
import { BeerType } from "../../../types/types";
import Card from "./Card/Card";
import { useParams } from "react-router";

type CardListTypes = {
  beers: BeerType[];
  hasBeerBeenSelected: boolean;
  setHasBeerBeenSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardList = ({beers, hasBeerBeenSelected, setHasBeerBeenSelected,}: CardListTypes) => {
    const { beerId } = useParams();

    if (!beerId) return <p>Error</p>;
    const selectedBeer = beers.find((beer) => beer.id === parseInt(beerId));
    
    useEffect(() => {
        return () => {
            setHasBeerBeenSelected(false);
        };
    }, [setHasBeerBeenSelected]); 

    if (!selectedBeer) return <h1>No beer selected</h1>;

    return (
        <div>
        <div>{selectedBeer && <Card beer={selectedBeer} />}</div>
        </div>
    );
};

export default CardList;
