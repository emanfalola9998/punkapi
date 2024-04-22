import FilterItem from "./FilterItem/FilterItem";
import { BeerType } from "../../../types/types";
import './FiltersList.scss'

type FilteredListProps = {
    beers: BeerType[] | undefined;
    searchTerm: string;
    isHighABV: boolean;
    isClassic: boolean;
    isAcidic: boolean;
    
};

const FiltersList = ({ beers, searchTerm, isHighABV, isClassic, isAcidic }: FilteredListProps) => {
    if(!beers) return <p>No beers</p>
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
        <div className="filter-beers">
            {
                beers.map((filteredBeer) => (
                <div key={filteredBeer.id}>
                    <FilterItem filteredBeer={filteredBeer} />
                </div>
                ))
            }
        </div>
    );
};

export default FiltersList;

// (searchTerm || isHighABV || isClassic || isAcidic) &&

// Display all beers here regardless of if any of the variables are truthy
// use the card component in the main.tsx to display each beer if selected so it should only be accessed if a beer is selected
// all beers will be displayed here if no filter is applied
// react-routing will be used to display the profiles 
// create a nav menu to navigate around site and will always show
// could mimic what is going on in our beatles page take menu (three horizontal lines stacked above each other) image as well
// Grid layout for beers possibly 5 columns by 2 rows
// possibility for pagination

// Two theories: 
// 1. We could map all beer data into filter functions and only use cardList and item for selected beers
// 2. We could use && to map beers when variables are truthy and map beers within main.tsx when they aren't+