import React from 'react';

type SearchBoxProps = {
    searchTerm: string;
    handleInput:  (e: React.ChangeEvent<HTMLInputElement>) => void;
    isHighABV: boolean;
    handleIsHighABV: () => void;
    isClassic: boolean;
    handleIsClassic: () => void;
    isAcidic: boolean;
    handleIsAcidic: () => void;
}

const SearchBox = ({ isAcidic, handleIsAcidic, handleIsClassic, isClassic, searchTerm, handleInput, isHighABV, handleIsHighABV }: SearchBoxProps) => {
    

    return (
        <div>
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
