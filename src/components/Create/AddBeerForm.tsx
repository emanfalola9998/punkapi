import React, { useState } from "react";
import { BeerType, BeerTypeServer } from "../../types/types";
import { useNavigate } from 'react-router-dom';


type AddBeerFormProps = {
  newBeer: BeerTypeServer;
  setNewBeer: React.Dispatch<React.SetStateAction<BeerTypeServer>>;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  formError: string | null
  setFormError: React.Dispatch<React.SetStateAction<string | null>>

}

const AddBeerForm = ({newBeer,setNewBeer,isSubmitting,setIsSubmitting,formError,setFormError}: AddBeerFormProps) => {
  const navigate = useNavigate();

   // Handle input changes (read scala fullstack notion page for understanding)
   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
  
    // If the field is 'abv' or 'ph', convert the value to a number
    if (name === 'abv' || name === 'ph') {
      setNewBeer({ ...newBeer, [name]: value === '' ? 0 : parseFloat(value) });
    } else {
      setNewBeer({ ...newBeer, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Convert abv and ph to numbers before submitting
    const beerToSubmit = {
      id: newBeer.id,
      name: newBeer.name,
      firstBrewed: newBeer.firstBrewed,
      description: newBeer.description,
      imageUrl: newBeer.imageUrl,  // Ensure this is camelCase
      abv: newBeer.abv as Number,  // Convert abv to a number
      ph: newBeer.ph as Number,    // Convert ph to a number
    };
  

    try {
      const response = await fetch('http://localhost:9000/beers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(beerToSubmit),  // Send the corrected payload
      });
  
      if (!response.ok) {
        throw new Error('Failed to add the new beer');
      }
  
      const result = await response.json();
      console.log('Beer added successfully:', result);
      navigate("/punkapi/");      
      
      // Reset the form after successful submission
      setNewBeer({
        id: 0,
        name: '',
        firstBrewed: '',
        description: '',
        imageUrl: null,
        abv: 0, // Reset abv to number (0)
        ph: 0,  // Reset ph to number (0)
      });
      setFormError(null);
    } catch (error) {
      setFormError('An error occurred while submitting the beer');
      console.error(error);
    } finally {
      setIsSubmitting(false);
      
    }
  };
  


  
  return (
    <div className="add-beer-form">
      <h2>Add New Beer</h2>
      {formError && <p className="formError">{formError}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newBeer.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="firstBrewed">First Brewed</label>
          <input
            type="text"
            id="firstBrewed"
            name="firstBrewed"
            value={newBeer.firstBrewed}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={newBeer.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image_url">Image URL</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={newBeer.imageUrl || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="abv">ABV</label>
          <input
            type="number"
            id="abv"
            name="abv"
            value={newBeer.abv}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <div>
          <label htmlFor="ph">pH</label>
          <input
            type="number"
            id="ph"
            name="ph"
            value={newBeer.ph}
            onChange={handleChange}
            min="0"
            max="14"
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Add Beer'}
        </button>
      </form>
    </div>
  );
};

export default AddBeerForm;