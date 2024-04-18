import React from 'react';

type SearchBoxProps = {
    searchTerm: string;
    handleInput:  (e: React.ChangeEvent<HTMLInputElement>) => void;
    isHighABV: boolean;
    handleIsHighABV: () => void;
}

const SearchBox = ({ searchTerm, handleInput, isHighABV, handleIsHighABV }: SearchBoxProps) => {
    console.log("searchTerm", searchTerm);
    

    return (
        <div>
            <label>Search Beer Type</label>
            <input 
                value={searchTerm}
                onInput={handleInput}
                placeholder='Type Your beer here...'
            />
            <label htmlFor="checkbox">Checkbox Example:</label>
            <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={isHighABV}
            onChange={handleIsHighABV}
            />
        </div>
    );
}

export default SearchBox;
