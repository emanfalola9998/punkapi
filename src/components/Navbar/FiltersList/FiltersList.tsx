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
            <label htmlFor="checkbox">Checkbox Example:</label>
            <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={isHighABV}
            onChange={handleIsHighABV}
            />
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
                {!searchTerm && !isHighABV &&
                beers.map((beer) => (
                    <div key={beer.id}>
                    <FilterItem isHighABV={isHighABV} handleIsHighABV={handleIsHighABV} filteredBeer={beer} />
                    </div>
            ))}
        </>
        )}
        
    </div>
    );
};

export default FiltersList;
