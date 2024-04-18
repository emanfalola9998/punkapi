import FilterItem from "./FilterItem/FilterItem";
import { BeerType } from "../../../types/types";

type FilteredListProps = {
    beers: BeerType[];
    searchTerm: string;
    isHighABV: boolean;
    isClassic: boolean;
    isAcidic: boolean;
};

const FiltersList = ({ beers, searchTerm, isHighABV, isClassic, isAcidic }: FilteredListProps) => {
    
    if (searchTerm){
        beers = beers.filter((beer: BeerType) =>
        beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    if (isHighABV){
        beers = beers.filter(
            (beer: BeerType) => beer.abv > 6
        );
    }
    if(isClassic){
        beers  = beers.filter((beer: BeerType) => parseInt(beer.first_brewed.split("/")[1]) < 2010);
    }

    if(isAcidic){
        beers =  beers.filter((beer:BeerType) => beer.ph < 4)
    }
    

    return (
        <div>
            {(searchTerm || isHighABV || isClassic || isAcidic) &&
                beers.map((filteredBeer) => (
                <div key={filteredBeer.id}>
                    <FilterItem filteredBeer={filteredBeer} />
                </div>
                ))}
            </div>
        );
        
    
};

export default FiltersList;
