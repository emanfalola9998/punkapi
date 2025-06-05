import React from 'react';
import './SearchBox.scss'
import { useSelector,  } from 'react-redux';
import { RootState } from '../../../store/store';

type SearchBoxProps = {
    handleIsAcidic: () => void
    handleIsClassic: () => void
    handleIsHighABV: () => void
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void

}

const SearchBox = ({handleIsAcidic, handleIsClassic, handleInput, handleIsHighABV }: SearchBoxProps) => {
    
    const searchTerm = useSelector((state: RootState) => state.beer.searchTerm)
    const isAcidic = useSelector((state: RootState) => state.beer.isAcidic)
    const isClassic = useSelector((state: RootState) => state.beer.isClassic)
    const isHighABV = useSelector((state: RootState) => state.beer.isHighABV)


    return (
        <div className='search-beers'>
            <label>Search Beer Type</label>
            <input 
                value={searchTerm}
                onInput={handleInput}
                placeholder='Type Your beer here...'
            />
            <label htmlFor="checkbox">High ABV ({'>'}6.0%)</label>
            <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={isHighABV}
            onChange={handleIsHighABV}
            />
            <label htmlFor="checkbox">Classic Range</label>
            <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={isClassic}
            onChange={handleIsClassic}
            />
            <label htmlFor="checkbox">High Acidity</label>
            <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={isAcidic}
            onChange={handleIsAcidic}
            />
        </div>
    );
}

export default SearchBox;



