import FilterItem from './FilterItem/FilterItem'
import { BeerType } from '../../../types/types'

type FilteredListProps = {
    beers: BeerType[];
    searchTerm: string;
}


const FiltersList = ({beers, searchTerm}: FilteredListProps) => {
    const filteredBeers: BeerType[] = beers.filter((beer: BeerType) => beer.name.toLowerCase().includes(searchTerm.toLowerCase()))

    // if(filteredBeers.length > 0) {
    //     // console.log( "beerName:" ,filteredBeers[0].name);
        
    // }

    return (
    <div>
        {filteredBeers.map((filteredBeer => {
            return(
                <div key={filteredBeer.id}>
                    <FilterItem filteredBeer = {filteredBeer} />
                </div>
            )
        }))}
    </div>
    )
}

export default FiltersList
