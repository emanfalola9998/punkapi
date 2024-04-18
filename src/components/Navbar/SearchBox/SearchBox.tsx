import React from 'react';

type SearchBoxProps = {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({ searchTerm, setSearchTerm, handleChange }: SearchBoxProps) => {
    console.log("searchTerm", searchTerm);
    

    return (
        <div>
            <label>Search Beer Type</label>
            <input 
                value={searchTerm}
                onInput={handleChange}
                placeholder='Type Your beer here...'
            />
        </div>
    );
}

export default SearchBox;
