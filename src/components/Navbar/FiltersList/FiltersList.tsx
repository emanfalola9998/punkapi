import FilterItem from "./FilterItem/FilterItem";
import { BeerType } from "../../../types/types";
import './FiltersList.scss'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store';
import { setCurrentPage } from "../../../store/beerSlice";

type FilterListProps = {
    beersUsed: BeerType[]
}

const FiltersList = ({beersUsed}: FilterListProps) => {
    const itemsPerPage = 6;

    const searchTerm = useSelector((state: RootState) => state.beer.searchTerm)
    const isHighABV = useSelector((state: RootState ) => state.beer.isHighABV)
    const isClassic = useSelector((state: RootState) => state.beer.isClassic)
    const isAcidic = useSelector((state: RootState) => state.beer.isAcidic)
    const currentPage = useSelector((state: RootState) => state.beer.currentPage)
    const beers = useSelector((state: RootState) => state.beer.beerData)

    const beersArray = beersUsed ?? beers


    const dispatch = useDispatch()
    // Filter beers based on search term and other criteria
    let filteredBeers = beersArray || [];
    if (searchTerm) {
        filteredBeers = filteredBeers.filter((beer: BeerType) =>
            beer.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    if (isHighABV) {
        filteredBeers = filteredBeers.filter((beer: BeerType) => beer.abv > 6);
    }
    if (isClassic) {
        filteredBeers = filteredBeers.filter(
            (beer: BeerType) => parseInt(beer.first_brewed.split("/")[1]) < 2010
        );
    }
    if (isAcidic) {
        filteredBeers = filteredBeers.filter((beer: BeerType) => beer.ph && beer.ph < 4 );
    }

    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredBeers.slice(startIndex, endIndex);

    // Function to handle page change
    const handlePageChange = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber));
    };



    return (
        <div className="filter">

            <div className="filter__beers">
                {currentItems.length > 0 ? (
                    currentItems.map((filteredBeer) => (
                        <div key={filteredBeer.id}>
                            <FilterItem filteredBeer={filteredBeer} />
                        </div>
                    ))
                ) : (
                    <p>No beers found.</p>
                )}
                    
            </div>
            <div className="filter__pagination">
            {Array.from({ length: Math.ceil(filteredBeers.length / itemsPerPage) }, (_, index) => (
                        <a className="filter__pagination-buttons" key={index + 1} onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </a>
                    ))}
            </div>
        </div>
    );
};

export default FiltersList;
