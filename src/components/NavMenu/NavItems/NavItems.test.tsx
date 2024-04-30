import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavItems from './NavItems'; // Assuming NavItems is in the same directory
import { BrowserRouter } from 'react-router-dom';

it('should render the menu icon',  () => {
    // const toggleNav = jest.fn();
    
    // Arrange
    render(
    <BrowserRouter>
        <NavItems 
        toggleNav={() => console.log("nav toggled")}
        />
    </BrowserRouter>
    ); 
    
    // Act
    const menuIcon =  screen.getByAltText('Close menu');
    
    // Assert
    expect(menuIcon).toBeInTheDocument();
    
    // Optional: Test if toggleNav is called when menu icon is clicked
    // userEvent.click(menuIcon);
    // expect(toggleNav).toHaveBeenCalled();
});
