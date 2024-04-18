import FilterItem from "./FilterItem/FilterItem";
import { BeerType } from "../../../types/types";

type FilteredListProps = {
    beers: BeerType[];
    searchTerm: string;
    isHighABV: boolean;
    handleIsHighABV: () => void

};

const FiltersList = ({ beers, searchTerm, isHighABV, handleIsHighABV }: FilteredListProps) => {
    let filteredBeersByName: BeerType[] = beers.filter((beer: BeerType) =>
        beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    let filteredBeersByABV: BeerType[] = beers.filter(
        (beer: BeerType) => beer.abv > 4.5
    );
    let combinedFilteredBeers: BeerType[] = filteredBeersByName.filter(
        (beer: BeerType) => filteredBeersByABV.includes(beer)
    );

  // if (highABV && searchTerm){
  //     filteredBeersByName = filteredBeersByName.filter(filteredBeersByABV)
  // }

    return (
        <div>

        {searchTerm && isHighABV ? (
        combinedFilteredBeers.map((filteredBeer) => (
            <div key={filteredBeer.id}>
            <FilterItem isHighABV={isHighABV} handleIsHighABV={handleIsHighABV} filteredBeer={filteredBeer} />
            </div>
        ))
        ) : (
        <>
            {searchTerm &&
            filteredBeersByName.map((filteredBeerByName) => (
                <div key={filteredBeerByName.id}>
                <FilterItem isHighABV={isHighABV} handleIsHighABV={handleIsHighABV} filteredBeer={filteredBeerByName} />
                </div>
            ))}
                {isHighABV &&
                filteredBeersByABV.map((filteredBeerByABV) => (
                    <div key={filteredBeerByABV.id}>
                    <FilterItem isHighABV={isHighABV} handleIsHighABV={handleIsHighABV} filteredBeer={filteredBeerByABV} />
                    </div>
            ))}
        </>
        )}
        
    </div>
    );
};

export default FiltersList;
